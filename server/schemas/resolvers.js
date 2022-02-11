const { AuthenticationError } = require("apollo-server-express");
const { Profile, ToVist, Visited } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // profiles: async () => {
    //   return Profile.find();
    // },

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
  },

  Mutation: {
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
