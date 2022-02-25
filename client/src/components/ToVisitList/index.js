import React from "react";
import "./ToVisit.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_VISITED, REMOVE_TO_VISIT } from "../../utils/mutations";

const styles = {
  card: {
    width: "18rem",
  },
};

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

  // implemenet that function as an onclick event in a button
  const handleButtonRight = () => {
    const buttonRight = document.getElementById("slideRight-ToVisit");

    buttonRight.onclick = function () {
      document.getElementById("container-to-visit").scrollLeft += 1000;
      console.log("click right ToVisit");
    };
  };

  const handleButtonLeft = () => {
    const buttonLeft = document.getElementById("slideLeft-ToVisit");

    buttonLeft.onclick = function () {
      document.getElementById("container-to-visit").scrollLeft -= 1000;
      console.log("click left ToVisit");
    };
  };


  if (!toVisitResults) {
    return <h3>Add a place to view list</h3>;
  }
  return (
    <div>
      <div className="container-To-Visit">
        <div className="header-container">
          <h3>To Visit</h3>
          <div className="button-container">
            <button
              type="button"
              className="btn btn-dark"
              id="slideLeft-ToVisit"
              onClick={handleButtonLeft}
            >
              <i className="bi bi-arrow-left-circle"></i>
            </button>
            <button
              type="button"
              className="btn btn-dark"
              id="slideRight-ToVisit"
              onClick={handleButtonRight}
            >
              <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>

        <div className="scrollmenu" id="container-to-visit">

        {toVisitResults &&
        toVisitResults.map((toVisit) => (
          <div className="col-4" key={toVisit._id}>
            <div className="card" style={styles.card}>
              <div className="internal-button-container">
                <button type="button" className="btn btn-dark" onClick={(event) => {handleAddVisited(event, toVisit);}}>
                  {" "}
                  <i className="bi bi-check-square"></i> Visited{" "}
                </button>
                <button type="button" className="btn btn-dark" onClick={(event) => {handleRemoveCard(event, toVisit);}}>
                  {" "}
                  <i className="bi bi-x-circle"></i> Remove{" "}
                </button>
              </div>
              <img
                className="card-img-top"
                src={toVisit.image_url}
                alt="to-visit-brunch"
              />
              <div className="card-body">
                <h5 className="card-title"> {toVisit.name}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: {toVisit.rating} Price: {toVisit.price}</li>
                <li className="list-group-item">{toVisit.address1}, {toVisit.city}, {toVisit.state}, {toVisit.zip_code}</li>
                <li className="list-group-item"> <a href={`${toVisit.url}`}>View the yelp url.</a></li>              
              </ul>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>

    
  );
};

export default ToVisitList;
