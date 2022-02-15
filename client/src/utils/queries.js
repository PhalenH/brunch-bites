import { gql } from "@apollo/client";

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
        _id
        toVisit {
          name
          location
          price
          rating
          comment
        }
        visited {
          name
          location
          price
          myRating
          comment
          dataVisited
          rating
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      toVisit {
        name
        location
        price
        rating
        comment
      }
      visited {
        name
        location
        price
        myRating
        comment
        dataVisited
        rating
      }
    }
  }
`;

export const TO_VISIT = gql`
  query toVisit {
    toVisit {
      name
      location
      price
      rating
      comment
    }
  }
`;

export const VISITED = gql`
  query visited {
    visited {
      name
      location
      price
      myRating
      comment
      dateVisited
    }
  }
`;

export const QUERY_BRUNCHSPOT = gql`
  query brunchSpot {
    brunchSpot {
      name
      location
      price
      rating
    }
  }
`;
