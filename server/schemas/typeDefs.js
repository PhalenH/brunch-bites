const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    password: String
    toVisitList: [ToVisit]!
    visitedList: [Visited]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  
  type ToVisit {
    name
    location
    price
    rating
    comment
  }

  type Visited {
    name
    location
    price
    myRating
    comment
    dateVisited
  }

  type BrunchSpot {
    name
    location
    price
    rating
  }

  type Query {
    // profiles: [Profile]!
    // toVisitList: [ToVisit]
    // visitedList: [Visited]
    
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile

    brunchSpotResults: [BrunchSpot]
  }

  type Mutation {

    addToVisit(name: String!, location: String!, price: String!, rating: mongoose.Decimal128!, comment: String): ToVisit
    addVisited(name: String!, location: String, price: String, myRating: mongoose.Decimal128, comment: String, dateVisited: Date): Visited
    
    removeTovisit
    removeVisited

    addProfile(name: String!, password: String!): Auth
    login(name: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
