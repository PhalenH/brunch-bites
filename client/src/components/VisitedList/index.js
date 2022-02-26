import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { REMOVE_VISITED } from "../../utils/mutations";
import "./Visited.css";
import "bootstrap-icons/font/bootstrap-icons.css";


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

  // calculate size of container
  const handleButtonRight = () => {
    const buttonRight = document.getElementById("slideRight-Visited");

    buttonRight.onclick = function () {
      document.getElementById("container-visited").scrollLeft += 1000;
      console.log("click right Visited");
    };
  };

  const handleButtonLeft = () => {
    const buttonLeft = document.getElementById("slideLeft-Visited");

    buttonLeft.onclick = function () {
      document.getElementById("container-visited").scrollLeft -= 1000;
      console.log("click left Visited");
    };
  };

  const starRating = () => {
    const ratingStars = [...document.getElementsByClassName("rating_star")];
    const ratingResult = document.querySelector(".rating_result");

    printRatingResult(ratingResult);

    function executeRating(stars, result) {
      const starClassActive = "rating_star bi-star-fill";
      const starClassUnactive = "rating_star bi bi-star";
      const starsLength = stars.length;
      let i;
      stars.map((star) => {
        star.onclick = () => {
          i = stars.indexOf(star);

          if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
          } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i)
              stars[i].className = starClassUnactive;
          }
        };
      });
    }
    function printRatingResult(result) {}
    executeRating(ratingStars);
  };

  if (!visitedResults) {
    return <h3>You aint been nowhere</h3>;
  }
  return (
    <div>
      <div className="header-container">
        <h3>Visited</h3>
        <div className="button-container">
          <button type="button" className="btn btn-dark" id="slideLeft-Visited">
            <i
              className="bi bi-arrow-left-circle"
              onClick={handleButtonLeft}
            ></i>
          </button>
          <button
            type="button"
            className="btn btn-dark"
            id="slideRight-Visited"
          >
            <i
              className="bi bi-arrow-right-circle"
              onClick={handleButtonRight}
            ></i>
          </button>
        </div>
      </div>
      
      <div className="scrollmenu" id="container-visited">
        {visitedResults &&
          visitedResults.map((visited) => (
            <div className="brunch-card-visited" key={visited._id}>
            <div className="visited-internal-buttons">
              <button type="button" className="visited-remove btn btn-dark" onClick={(event) => {handleRemoveVisited(event, visited);}}>{" "}<i className="bi bi-x-circle"></i> Remove {" "} </button>
            </div>
            <img className="brunch-image" src={visited.image_url} alt="visited-img"/>
            <div>
              <div className="restaurant-name">
                <h1>{visited.name}</h1>
              </div>
              <section>
                <ul className="brunch-info">
                  <li>Rating: {visited.rating} Price: {visited.price}</li>
                  <li><a href={`${visited.url}`}>View the yelp url.</a></li>
                </ul>
              </section>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default VistedList;
