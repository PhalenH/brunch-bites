const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    password: String
    toVisitList: [toVisit]!
    visitedList: [visited]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  
  type toVisit {
    name
    location
    price
    rating
    comment
  }

  type visited {
    name
    location
    price
    myRating
    comment
    dateVisited
  }

  type brunchSpot {
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
    toVisitList: [toVisit]
    visitedList: [visited]
    brunchSpotList: [brunchSpot]
  }

  type Mutation {

    addToVisit(name: String!, location: String!, price: String!, rating mongoose.Decimal128!, comment: String): toVisit
    addVisited(name: String!, location: String, price: String, myRating: mongoose.Decimal128, comment: String, dateVisited: Date): Visited

    addProfile(name: String!, password: String!): Auth
    login(password: String!): Auth
  }
`;

module.exports = typeDefs;
