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
  mutation addToVisit($name: String!, $location: String!, $price: String!, $rating: Float!, $comment: String) {
    addToVisit(name: $name, location: $location, price: $price, rating: $rating, comment: $comment) {
      _id
      name
      location
      price
      rating
      comment
    }
  }
`;

export const ADD_VISITED = gql`
  mutation addVisited($name: String!, $location: String!, $price: String!, $rating: Float!, $comment: String, $dateVisited: Date) {
    addVisited(name: $name, location: $location, price: $price, rating: $rating, comment: $comment, dateVisited: $dateVisited) {
      _id
      name
      location
      price
      myRating
      comment
      dateVisited
    }
  }
`;
