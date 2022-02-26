import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      toVisitList {
        _id
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
      visitedList {
        _id
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
      image_url
    }
  }
`;