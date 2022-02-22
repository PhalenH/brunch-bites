import React from "react";
import { Link } from "react-router-dom";

const ToVisitList = ({ toVisitResults }) => {
  if (!toVisitResults) {
    return <h3>Add a place to view list</h3>;
  }

  return (

    <li class="p-2">
<div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">
      <div class="card-body">
        <button class="btn btn-dark"> <i class="bi bi-check-square"></i> Visited </button>
        <button class="btn btn-dark"> <i class="bi bi-dash-square"></i> Let's Not </button>
        <button class="flip-to-back btn btn-dark"> <i class="bi bi-arrow-clockwise"></i> Flip for more info</button>
      </div>
      <img src="./placeholder.png" alt="temp" style="width: 50%; height: 50%"/>
      <div class="card-body">
        <h5 class="card-title">{toVisit.name}</h5>
      </div>
    </div>
    <div class="card__face card__face--back">
      <div class="card-body">
        <button class="flip-to-front btn btn-dark"> <i class="bi bi-arrow-clockwise"></i> Go back</button>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Rating: {toVisit.rating}</li>
        <li class="list-group-item">Price: {toVisit.price}</li>
        <li class="list-group-item">Address: {toVisit.location.address1} {toVisit.location.city} {toVisit.location.zip_code} {toVisit.location.state}</li>
        <li class="list-group-item">
          <div class="input-group">
            <textarea class="form-control" aria-label="With textarea" placeholder="Why are we visiting?"> {toVisit.comment} </textarea>
            <button class="btn btn-outline-secondary" type="button">Save</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</li>

  );
};

export default ToVisitList;

