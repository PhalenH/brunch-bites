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
  mutation addToVisit($profileId: ID!, $toVist: String!) {
    addSkill(profileId: $profileId, toVist: $toVist) {
      _id
      name
    // TODO: finish models
    }
  }
`;

export const ADD_VISITED = gql`
  mutation addVisited($visited: String!) {
    addVisited(visited: $visited) {
      _id
      name
    // TODO: finish models
    }
  }
`;
