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
    $address1: String!
    $city: String!
    $zip_code: String!
    $state: String!
    $price: String
    $url: String
    $rating: Float
    $comment: String
    $image_url: String
  ) {
    addToVisit(
      profileId: $profileId
      name: $name
      address1: $address1
      city: $city
      zip_code: $zip_code
      state: $state
      price: $price
      url: $url
      rating: $rating
      comment: $comment
      image_url: $image_url
    ) {
      _id
      toVisitList {
        name
        address1
        city
        zip_code
        state
        price
        url
        rating
        comment
        image_url
      }
    }
  }
`;

export const ADD_VISITED = gql`
  mutation addVisited(
    $profileId: ID!
    $name: String!
    $address1: String!
    $city: String!
    $zip_code: String!
    $state: String!
    $price: String
    $url: String
    $myRating: Float
    $comment: String
    $dateVisited: String
    $image_url: String
  ) {
    addVisited(
      profileId: $profileId
      name: $name
      address1: $address1
      city: $city
      zip_code: $zip_code
      state: $state
      price: $price
      url: $url
      myRating: $myRating
      comment: $comment
      dateVisited: $dateVisited
      image_url: $image_url
    ) {
      _id
      visitedList {
        name
        address1
        city
        zip_code
        state
        price
        url
        myRating
        comment
        dateVisited
        image_url
      }
    }
  }
`;

export const REMOVE_TO_VISIT = gql`
  mutation removeToVisit($profileId: ID!, $placeId: String!) {
    removeToVisit(profileId: $profileId, placeId: $placeId) {
      _id
    }
  }
`;

export const REMOVE_VISITED = gql`
  mutation removeVisited($profileId: ID!, $placeId: String!) {
    removeVisited(profileId: $profileId, placeId: $placeId) {
      _id
    }
  }
`;

// export const MY_RATING = gql`
// mutation myRating($profileId: ID!, $myRatingId: ID!) {
//   myRating(profileId: $profileId, myRatingId: $myRatingId){
//     _id
//     name
//   }
// }`;