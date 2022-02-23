const { AuthenticationError } = require("apollo-server-express");
const { Profile, ToVisit, Visited, Places } = require("../models");
const { signToken } = require("../utils/auth");
const axios = require("axios");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find({});
    },
    // profile: async () => {
    //   let prof = await Profile.find({ }).populate("places");
    //     return {...prof,
    //       toVisitList: prof.places.filter(place => place.visited = false),
    //       visitedList: prof.places.filter(place => place.visited = true)
    //     }
    //   },

    profile: async (parent, { profileId }) => {
      let prof = await Profile.findOne({ _id: profileId }).populate("places");
      prof = prof.toObject();
      return {
        ...prof,
        toVisitList: prof.places.filter((place) => (place.visited = false)),
        visitedList: prof.places.filter((place) => (place.visited = true)),
      };
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      console.log(context.user._id);
      if (context.user) {
        let prof = await Profile.findOne({ _id: context.user._id }).populate(
          "places"
        );
        // need toObject to fix data serialization issue, returns plain object
        prof = prof.toObject();
        return {
          ...prof,
          toVisitList: prof.places.filter((place) => (place.visited = false)),
          visitedList: prof.places.filter((place) => (place.visited = true)),
        };
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    toVisitList: async (parent, args, context) => {
      if (context.user) {
        let prof = await Profile.findOne({ _id: context.user._id }).populate(
          "places"
        );
        prof = prof.toObject();
        return prof.places.filter((place) => (place.visited = false));
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    visitedList: async (parent, args, context) => {
      if (context.user) {
        let prof = await Profile.findOne({ _id: context.user._id }).populate(
          "places"
        );
        prof = prof.toObject();
        return prof.places.filter((place) => (place.visited = true));
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // how to set this up for searching by location
    brunchSpotList: async (parent, { city }) => {
      console.log("Working");
      const response = await axios({
        method: "get",
        url: `https://api.yelp.com/v3/businesses/search`,
        responseType: "json",
        headers: {
          Authorization:
            // how do i use my api key as a process.env file here?
            "Bearer z0VKGJ5saPw9o4NFOXM0ltn74MlNL-ImY3NuRwKqHSBzlro8-FDROabYZfAYjy60-7y8RngCZo3O84AfF9TTLqmlz6geb3b3jG1K3IxXFeAXCfS4QDpDPqpTVaYBYnYx",
        },
        params: {
          location: `${city}`,
          categories: "breakfast_brunch",
        },
      });

      const dataResponse = response.data.businesses;
      console.log(dataResponse);
      return dataResponse.map((data) => ({
        _id: data.id,
        name: data.name,
        location: data.location,
        price: data.price,
        rating: data.rating,
        url: data.url,
      }));
    },
  },

  Mutation: {
    // adds the token to the response of graphQl mutation for addProfile
    addProfile: async (parent, { name, password }) => {
      const profile = await Profile.create({ name, password });
      const token = signToken(profile);
      return { token, profile };
    },

    // adds the token to the response of graphQl mutation for login
    login: async (parent, { name, password }) => {
      const profile = await Profile.findOne({ name });
      if (!profile) {
        throw new AuthenticationError("No profile with this name found!");
      }
      const correctPw = await profile.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(profile);
      return { token, profile };
    },

    addToVisit: async (
      parent,
      { profileId, name, location, price, url, rating, comment },
      context
    ) => {
      if (context.user) {
        let values = {
          name,
          location,
          price,
          url,
          rating,
          comment,
          visited: false,
        };
        // if name doesn't exist it will create it, if it does exist it will update using the name as a filter
        let placeRecord = await Places.findOneAndUpdate(
          { name: name },
          { $set: { ...values } },
          { upsert: true, returnNewDocument: true }
        );

        // add to the profile the place._id
        let prof = await Profile.findOne({ _id: profileId });
        prof = prof.toObject();

        let found = prof.places.filter(
          (place) => place._id === placeRecord._id
        );
        if (found.length > 0) {
          return await Profile.findOne({ _id: profileId }).populate("places");
        } else {
          return await Profile.findOneAndUpdate(
            { _id: profileId },
            { $push: { places: placeRecord._id } },
            { upsert: true, returnNewDocument: true }
          ).populate("places");
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addVisited: async (
      parent,
      { profileId, name, location, price, url, myRating, comment, dateVisited },
      context
    ) => {
      if (context.user) {
        let values = {
          name,
          location,
          price,
          url,
          myRating,
          comment,
          dateVisited,
          visited: true,
        };
        // if name doesn't exist it will create it, if it does exist, it will update using the name as a filter
        let placeRecord = await Places.findOneAndUpdate(
          { name: name },
          { $set: { ...values } },
          { upsert: true, returnNewDocument: true }
        );

        // add to the profile the place._id
        let prof = await Profile.findOne({ _id: profileId });
        prof = prof.toObject();
        
        let found = prof.places.filter(
          (place) => place._id === placeRecord._id
        );
        if (found.length > 0) {
          return await Profile.findOne({ _id: profileId }).populate("places");
        } else {
          return await Profile.findOneAndUpdate(
            { _id: profileId },
            { $push: { places: placeRecord._id } },
            { upsert: true, returnNewDocument: true }
          ).populate("places");
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeToVisit: async (parent, { profileId, placeId }, context) => {
      if (context.user) {
        return await Profile.findOneAndUpdate(
          { _id: profileId },
          { $pullAll: { places: placeId } },
          { returnNewDocument: true }
        ).populate("places");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeVisited: async (parent, { profileId, placeId }, context) => {
      if (context.user) {
        return await Profile.findOneAndUpdate(
          { _id: profileId },
          { $pullAll: { places: placeId } },
          { returnNewDocument: true }
        ).populate("places");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
