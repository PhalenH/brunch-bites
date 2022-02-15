const { AuthenticationError } = require("apollo-server-express");
const { Profile, ToVisit, Visited } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    toVisitList: async () => {
      return ToVisit.find();
    },

    visitedList: async () => {
      return Visited.find();
    },

    // how to set this up for different user searches (name, location, price, rating)
    //  so we can avoid when they search by price and the url would have ?location=""
    brunchSpot: async (parent, { name, location, price, rating }) => {
      const response = await axios({
        method: "get",
        url: `https://api.yelp.com/v3/businesses/search?location=philadelpia`,
        responseType: "json",
        headers: {
          Authorization:
            // how do i use my api key as a process.env file here?
            "Bearer z0VKGJ5saPw9o4NFOXM0ltn74MlNL-ImY3NuRwKqHSBzlro8-FDROabYZfAYjy60-7y8RngCZo3O84AfF9TTLqmlz6geb3b3jG1K3IxXFeAXCfS4QDpDPqpTVaYBYnYx",
        },
      });
      const dataResponse = response.data;
      return {
        name: dataResponse.name,
        location: dataResponse.location,
        price: dataResponse.price,
        rating: dataResponse.rating,
      };
    },
  },

  Mutation: {
    addToVisit: async (parent, { name, location, price, rating, comment }) => {
      return ToVisit.create({ name, location, price, rating, comment });
    },
    addVisited: async (parent, { name, location, price, myRating, comment, dateVisited }) => {
      return Visited.create({  name, location, price, myRating, comment, dateVisited  });
    },

    addProfile: async (parent, { name, password }) => {
      const profile = await Profile.create({ name, password });
      const token = signToken(profile);
      return { token, profile };
    },
    login: async (parent, { password }) => {
      const correctPw = await profile.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(profile);
      return { token, profile };
    },
  },
};

module.exports = resolvers;
