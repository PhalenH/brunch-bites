import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      toVisitList {
        _id
        name
        location
        price
        url
        rating
        comment
      }
      visitedList {
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
  }
`;

export const QUERY_BRUNCH_SPOT_LIST = gql`
  query brunchSpotList($city: String!) {
    brunchSpotList(city: $city) {
      _id
      name
      location {
        address1
        city
        zip_code
        state
      }
      price
      rating
      url
    }
  }
`;

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($profileId: ID!) {
//     profile(profileId: $profileId) {
//       _id
//       name
//       toVisitList {
//         _id
//         name
//         location
//         price
//         url
//         rating
//         comment
//       }
//       visitedList {
//         _id
//         name
//         location
//         price
//         url
//         myRating
//         comment
//         dateVisited
//       }
//     }
//   }
// `;

// export const TO_VISIT = gql`
//   query toVisit {
//     toVisit {
//       name
//       location
//       price
//       rating
//       comment
//     }
//   }
// `;

// DON'T THINK WE NEED THESE SINCE LISTS WILL BE DISPLAYED WITH USER QUERY

// export const VISITED = gql`
//   query visited {
//     visited {
//       name
//       location
//       price
//       myRating
//       comment
//       dateVisited
//     }
//   }
// `;
