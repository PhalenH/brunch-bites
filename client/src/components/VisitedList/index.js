import React from "react";
// import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_VISITED, REMOVE_VISITED } from "../../utils/mutations";

const VistedList = ({ visitedResults }) => {
  // Set up mutation with an option to handle errors
  const [removeVisited, { error }] = useMutation(REMOVE_VISITED);
  const { loading, data, refetch } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const handleRemoveVisited = async (event, visited) => {
    event.preventDefault();
    try {
      const { data } = await removeVisited({
        variables: {
          profileId: profile._id,
          placeId: visited._id,
        },
      });
      refetch();
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  if (!visitedResults) {
    return <h3>You aint been nowhere</h3>;
  }

  return (
    <div>
      <h3 className="">{}</h3>
      <div className="">
        {visitedResults &&
          visitedResults.map((visited) => (
            <div key={visited._id} className="">
              <div className="">
                <h4 className="">
                  {visited.name} <br />
                  <ul>
                    <li>{visited.address1}</li>
                    <li>{visited.city}</li>
                    <li>{visited.zip_code}</li>
                    <li>{visited.state}</li>
                    <li>{visited.price}</li>
                    <li>{visited.myRating}</li>
                    <li>{visited.comment}</li>
                    <li>{visited.dateVisited}</li>
                    <li>
                      {" "}
                      <a className="" href={`${visited.url}`}>
                        View the yelp url.
                      </a>
                    </li>
                  </ul>
                </h4>
              </div>
              <div className="">
                <button
                  className=""
                  type="button"
                  onClick={(event) => {
                    handleRemoveVisited(event, visited);
                  }}
                >
                  Remove from list
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VistedList;
