const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    password: String
    toVisitList: [ToVisit]
    visitedList: [Visited]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type ToVisit {
    _id: ID
    name: String
    address1: String
    city: String
    zip_code: String
    state: String
    price: String
    url: String
    rating: Float
    comment: String
    image_url: String
  }

  type Visited {
    _id: ID
    name: String
    address1: String
    city: String
    zip_code: String
    state: String
    price: String
    url: String
    myRating: Float
    comment: String
    dateVisited: String
    image_url: String
  }

  type BrunchSpot {
    _id: String
    name: String
    location: Location
    price: String
    rating: Float
    url: String
    image_url: String
  }

  type Location {
    address1: String
    city: String
    zip_code: String
    state: String
  }

  type Query {
    profiles: [Profile]
    profile(profileId: ID!): Profile
    me: Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data

    toVisitList: [ToVisit]
    visitedList: [Visited]

    brunchSpotList(city: String!): [BrunchSpot]
  }

  type Mutation {
    addProfile(name: String!, password: String!): Auth
    login(name: String!, password: String!): Auth

    addToVisit(
      profileId: ID!
      name: String!
      address1: String!
      city: String!
      zip_code: String!
      state: String!
      price: String
      url: String
      rating: Float
      comment: String
      image_url: String
    ): Profile

    addVisited(
      profileId: ID!
      name: String!
      address1: String!
      city: String!
      zip_code: String!
      state: String!
      price: String
      url: String
      myRating: Float
      comment: String
      dateVisited: String
      image_url: String
    ): Profile

    removeToVisit(profileId: ID!, placeId: ID!): Profile
    removeVisited(profileId: ID!, placeId: ID!): Profile
  }
`;

module.exports = typeDefs;
