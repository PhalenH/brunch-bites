import React from "react";
// import { Link } from "react-router-dom";

const ToVisitList = ({ toVisitResults }) => {
  if (!toVisitResults) {
    return <h3>Add a place to view list</h3>;
  }

  return (
<div>
{toVisitResults &&
          toVisitResults.map((toVisit) => (
    <li className="p-2">
<div className="scene scene--card">
  <div className="card">
    <div className="card__face card__face--front">
      <div className="card-body">
        <button className="btn btn-dark"> <i className="bi bi-check-square"></i> Visited </button>
        <button className="btn btn-dark"> <i className="bi bi-dash-square"></i> Let's Not </button>
        <button className="flip-to-back btn btn-dark"> <i className="bi bi-arrow-clockwise"></i> Flip for more info</button>
      </div>
      <img src="./placeholder.png" alt="temp" style="width: 50%; height: 50%"/>
      <div className="card-body">
        <h5 className="card-title">{toVisit.name}</h5>
      </div>
    </div>
    <div className="card__face card__face--back">
      <div className="card-body">
        <button className="flip-to-front btn btn-dark"> <i className="bi bi-arrow-clockwise"></i> Go back</button>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Rating: {toVisit.rating}</li>
        <li className="list-group-item">Price: {toVisit.price}</li>
        <li className="list-group-item">Address: {toVisit.location.address1} {toVisit.location.city} {toVisit.location.zip_code} {toVisit.location.state}</li>
        <li className="list-group-item">
          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" placeholder="Why are we visiting?"> {toVisit.comment} </textarea>
            <button className="btn btn-outline-secondary" type="button">Save</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</li>
))}
</div>
  );
};

export default ToVisitList;

