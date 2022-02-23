const { Schema, model } = require("mongoose");

const PlacesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address1: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  zip_code: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    trim: true,
  },
  // personal rating
  myRating: {
    type: Number,
    trim: true,
  },
  comment: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 180,
  },
  dateVisited: {
    type: String,
    trim: true,
  },
  visited: {
    type: Boolean,
    default: false,
  },
});

const Places = model("Places", PlacesSchema);

module.exports = Places;
