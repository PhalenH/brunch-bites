import React from "react";
// import "..ToVisitList/ToVisit.css";
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

  return (
    <div>
      {/* {toVisitResults &&
          toVisitResults.map((toVisit) => ( */}

      <div className="header-container">
        <h3>Visited</h3>
        <div className="button-container">
          <button type="button" className="btn btn-dark" id="slideLeft"><i className="bi bi-arrow-left-circle"></i>Left</button>
          <button type="button" className="btn btn-dark" id="slideRight"><i className="bi bi-arrow-right-circle"></i>Right</button>
        </div>
      </div>

      <h3 className="">{}</h3>
      <div className="">
        {/* {visitedResults &&
          visitedResults.map((visited) => ( */}
      <div className="scrollmenu" id="container">
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
                  {/* <div className="rating">
                    <span className="rating_result"></span>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                    <i className="rating_star bi bi-star"></i>
                  </div> */}
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
