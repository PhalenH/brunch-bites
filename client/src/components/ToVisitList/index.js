import React from "react";
// import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_VISITED, REMOVE_TO_VISIT } from "../../utils/mutations";

const ToVisitList = ({ toVisitResults }) => {
  // Set up mutation with an option to handle errors
  const [addVisited, { error }] = useMutation(ADD_VISITED);
  const [removeToVisit, { error: error2 }] = useMutation(REMOVE_TO_VISIT);

  const { loading, data, refetch } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const handleAddVisited = async (event, toVisit) => {
    event.preventDefault();
    try {
      const { data } = await addVisited({
        variables: {
          profileId: profile._id,
          name: toVisit.name,
          address1: toVisit.address1,
          city: toVisit.city,
          zip_code: toVisit.zip_code,
          state: toVisit.state,
          price: toVisit.price,
          url: toVisit.url,
          image_url: toVisit.image_url,
        },
      });
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };
  const handleRemoveCard = async (event, toVisit) => {
    event.preventDefault();
    try {
      const { data } = await removeToVisit({
        variables: {
          profileId: profile._id,
          placeId: toVisit._id,
        },
      });
      refetch();
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  console.log(toVisitResults);
  if (!toVisitResults) {
    return <h3>Add a place to view list</h3>;
  }

  return (
    <div>
      {toVisitResults &&
        toVisitResults.map((toVisit) => (
          <div key={toVisit._id} className="">
            <form
              onSubmit={(event) => {
                handleAddVisited(event, toVisit);
              }}
            >
              <div className="">
                <h4 className="">
                  {toVisit.name} <br />
                  <ul>
                    <li>{toVisit.address1}</li>
                    <li>{toVisit.city}</li>
                    <li>{toVisit.zip_code}</li>
                    <li>{toVisit.state}</li>
                    <li>{toVisit.price}</li>
                    <li>{toVisit.rating}</li>
                  </ul>
                </h4>
                <a className="" href={`${toVisit.url}`}>
                  View the yelp url.
                </a>
              </div>
              <div className="">
                <button className="" type="submit">
                  Add To you Visited list
                </button>
              </div>
            </form>
            <div className="">
              <button
                className=""
                type="button"
                onClick={(event) => {
                  handleRemoveCard(event, toVisit);
                }}
              >
                Remove from list
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ToVisitList;
