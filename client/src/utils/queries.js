import { gql } from "@apollo/client";

// export const QUERY_PROFILES = gql`
//   query allProfiles {
//     profiles {
//       _id
//       name
//       skills
//     }
//   }
// `;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      toVisit {
        name
        location
        price
        point
      }
      visited {
        name
        location
        price
        point
        comment
        dataVisited
        rating
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
        point
      }
      visited {
        name
        location
        price
        point
        comment
        dataVisited
        rating
      }
    }
  }
`;

// export const QUERY_TOVISIT = gql`
//   query toVisit {
//     toVisit {
//       name
//       location
//       pricePoint
//       comment
//       // should I have comment if it's from user input and not api call?
//     }
//   }
// `;
