import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $password: String!) {
    addProfile(name: $name, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_TO_VISIT = gql`
  mutation addToVisit(
    $profileId: ID!
    $name: String!
    $location: String!
    $price: String
    $url: String
    $rating: Float
    $comment: String
  ) {
    addToVisit(
      profileId: $profileId
      name: $name
      location: $location
      price: $price
      url: $url
      rating: $rating
      comment: $comment
    ) {
      _id
      name
      location
      price
      url
      rating
      comment
    }
  }
`;

export const ADD_VISITED = gql`
  mutation addVisited(
    $profileId: ID!
    $name: String!
    $location: String!
    $price: String
    $url: String
    $myRating: Float
    $comment: String
    $dateVisited: Date
  ) {
    addVisited(
      profileId: $profileId
      name: $name
      location: $location
      price: $price
      url: $url
      myRating: $myRating
      comment: $comment
      dateVisited: $dateVisited
    ) {
      _id
      name
      location
      price
      url
      myRating
      comment
      dateVisited
    }
  }
`;

export const REMOVE_TO_VISIT = gql`
  mutation removeToVisit($profileId: ID!, $placeId: ID!) {
    removeToVisit(profileId: $profileId, placeId: $placeId) {
      _id
      name
    }
  }
`;

export const REMOVE_VISITED = gql`
  mutation removeVisited($profileId: ID!, $placeId: ID!) {
    removeVisited(profileId: $profileId, placeId: $placeId) {
      _id
      name
    }
  }
`;
