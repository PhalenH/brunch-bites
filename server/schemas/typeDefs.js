const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    password: String
    toVisit: [String]!
    visited: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Brunch {
    name
    location
    price
    rating
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    brunchSpot: Brunch

  }

  type Mutation {
    addProfile(name: String!, password: String!): Auth
    login(password: String!): Auth
  }
`;

module.exports = typeDefs;
