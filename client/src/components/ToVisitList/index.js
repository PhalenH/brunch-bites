import React from "react";
import "./ToVisit.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_VISITED, REMOVE_TO_VISIT } from "../../utils/mutations";

// fix cards so they are one uniform size
// fix images so they are 50% of space taken up
// fix internal and left right button styling
// play with container styling so they are both uniform and no delays onclicks

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


  if (toVisitResults.length === 0) {
    return <h3 className="blank-list">Add a place to view list</h3>;
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
          <div className="brunch-card-to-visit" key={toVisit._id}>
            <div className="to-visit-internal-buttons">
              <button type="button" className="to-visit-check btn btn-dark" onClick={(event) => {handleAddVisited(event, toVisit);}}>{" "}<i className="bi bi-check-circle"></i> Visited {" "} </button>
              <button type="button" className="to-visit-remove btn btn-dark" onClick={(event) => {handleRemoveCard(event, toVisit);}}>{" "}<i className="bi bi-x-circle"></i> Let's Not {" "} </button>
            </div>
            <img className="brunch-image" src={toVisit.image_url} alt="to-visit-img"/>
            <div>
              <div className="restaurant-name">
                <h1>{toVisit.name}</h1>
              </div>
              <section>
                <ul className="brunch-info">
                  <li>Rating: {toVisit.rating} Price: {toVisit.price}</li>
                  <li>{toVisit.address1}, {toVisit.city}, {toVisit.state}, {toVisit.zip_code}</li>
                  <li><button type="button" className="btn btn-dark"> <i className="bi bi-box-arrow-up-right"></i><a href={`${toVisit.url}`}> View the yelp url. </a> </button></li>
                </ul>
              </section>

            </div>
          </div>
          ))}
        </div>
      </div>
    </div>

    
  );
};

export default ToVisitList;
