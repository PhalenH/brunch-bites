import React from "react";
import "./Visited.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const styles = {
  card: {
    width:"18rem",
  }
}


const VistedList = ({ visitedResults }) => {
  // if (!visitedResults) {
  //   return <h3>You aint been nowhere</h3>;
  // }
  // calculate size of container
  const handleButtonRight = ()=> {
    const buttonRight = document.getElementById('slideRight-Visited');
  
    buttonRight.onclick = function () {
    document.getElementById('container-visited').scrollLeft += 1000;
    console.log("click right Visited")
    };
  }
  
  const handleButtonLeft = ()=> {
     const buttonLeft = document.getElementById('slideLeft-Visited');
  
     buttonLeft.onclick = function () {
     document.getElementById('container-visited').scrollLeft -= 1000;
     console.log("click left Visited")
     };
  }

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
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
          }
        };
      });
    }

    function printRatingResult(result) { }

    executeRating(ratingStars);

  }
  

  return (
    <div>
      {/* {toVisitResults &&
          toVisitResults.map((toVisit) => ( */}

      <div className="header-container">
        <h3>Visited</h3>
        <div className="button-container">
          <button type="button" className="btn btn-dark" id="slideLeft-Visited"><i className="bi bi-arrow-left-circle" onClick={handleButtonLeft}></i>Left</button>
          <button type="button" className="btn btn-dark" id="slideRight-Visited"><i className="bi bi-arrow-right-circle" onClick={handleButtonRight}></i>Right</button>
        </div>
      </div>

      <h3 className="">{}</h3>
      <div className="">
        {/* {visitedResults &&
          visitedResults.map((visited) => ( */}
      <div className="scrollmenu" id="container-visited">
        <div className="col-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
                <button type="button" className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg> Remove </button>
            </div>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 1</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> Personal Rating: 
                  <div className="rating" onClick={starRating}>
                    <span className="rating_result"></span>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                  </div>
                </li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            </div>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 2</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: ****</li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            </div>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 3</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> Personal Rating: 
                  <div className="rating" onClick={starRating}>
                    <span className="rating_result"></span>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                  </div>
                </li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            </div>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 4</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: ****</li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            </div>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 5</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: ****</li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            </div>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 6</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: ****</li>
              </ul>
          </div>
        </div>
      </div>

          {/* ))} */}
      </div>
      {/* ))} */}
    </div>
  );
};

export default VistedList;
