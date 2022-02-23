import React from "react";
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

      <div>
        <button type="button" className="btn btn-dark" id="slideLeft"><i class="bi bi-arrow-left-circle"></i>Left</button>
        <button type="button" className="btn btn-dark" id="slideRight"><i class="bi bi-arrow-right-circle"></i>Right</button>
      </div>

      <h3 className="">{}</h3>
      <div className="">
        {/* {visitedResults &&
          visitedResults.map((visited) => ( */}
      <div className="scrollmenu" id="container">
        <div className="col-4">
          <div className="card" style={styles.card}>
            <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
            <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 1</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: **** Price: $$</li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
            <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 2</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: **** Price: $$</li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
            <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 3</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: **** Price: $$</li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
            <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 4</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: **** Price: $$</li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
            <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 5</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: **** Price: $$</li>
              </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={styles.card}>
            <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
            <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
            <img className="card-img-top" src="./placeholder.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 6</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: **** Price: $$</li>
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
