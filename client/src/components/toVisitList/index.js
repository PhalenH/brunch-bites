import React from "react";
import "./ToVisit.css";
import { Link } from "react-router-dom";

const styles = {
  card: {
    width: "18rem",
  }
}

const ToVisitList = ({ toVisitResults }) => {
  // if (!toVisitResults) {
  //   return <h3>Add a place to view list</h3>;
  // }

  // create a function up here to handle the click events for the buttons
  // implemenet that function as an onclick event in a button

  const handleButtonRight = () => {
    const buttonRight = document.getElementById('slideRight-ToVisit');

    buttonRight.onclick = function () {
      document.getElementById('container-to-visit').scrollLeft += 1000;
      console.log("click right ToVisit")
    };
  }

  const handleButtonLeft = () => {
    const buttonLeft = document.getElementById('slideLeft-ToVisit');

    buttonLeft.onclick = function () {
      document.getElementById('container-to-visit').scrollLeft -= 1000;
      console.log("click left ToVisit")
    };
  }

  return (
    <div>
      {/* {toVisitResults &&
          toVisitResults.map((toVisit) => ( */}
      <div className="container-To-Visit">
        <div className="header-container">
          <h3>To Visit</h3>
          <div className="button-container">
            <button type="button" className="btn btn-dark" id="slideLeft-ToVisit" onClick={handleButtonLeft}><i className="bi bi-arrow-left-circle"></i></button>
            <button type="button" className="btn btn-dark" id="slideRight-ToVisit" onClick={handleButtonRight}><i className="bi bi-arrow-right-circle"></i></button>
          </div>
        </div>

        <div className="scrollmenu" id="container-to-visit">
          <div className="col-4">
            <div className="card" style={styles.card}>
              <div className="internal-button-container">
                <button type="button" className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg> Visited </button>
                <button type="button" className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg> Remove </button>
              </div>
              <img className="card-img-top" src="./placeholder.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 1</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: **** Price: $$</li>
                <li className="list-group-item">Address1, City, State</li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={styles.card}>
              <div className="internal-button-container">
                <button type="button" className="btn btn-dark"> <i className="bi bi-check-square"></i> Visited </button>
                <button type="button" className="btn btn-dark"> <i className="bi bi-x-circle"></i> Remove </button>
              </div>
              <img className="card-img-top" src="./placeholder.png" alt="Card image cap" />
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
              <div className="internal-button-container">
                <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
                <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
              </div>
              <img className="card-img-top" src="./placeholder.png" alt="Card image cap" />
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
              <div className="internal-button-container">
                <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
                <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
              </div>
              <img className="card-img-top" src="./placeholder.png" alt="Card image cap" />
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
              <div className="internal-button-container">
                <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
                <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
              </div>
              <img className="card-img-top" src="./placeholder.png" alt="Card image cap" />
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
              <div className="internal-button-container">
                <button type="button" className="btn btn-dark"><i className="bi bi-check-circle"></i> Visited </button>
                <button type="button" className="btn btn-dark"><i className="bi bi-x-circle"></i> Remove </button>
              </div>
              <img className="card-img-top" src="./placeholder.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Restaurant Name 6</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: **** Price: $$</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default ToVisitList;