const { Schema, model } = require("mongoose");

const VisitedSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  pricePoint: {
    type: String,
    trim: true,
    // required: true,
  },
  comment: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 280,
    // required: true,
  },
  dateVisted: {
    type: String,
    trim: true,
    // required: true,
  },
  rating: {
    type: Number,
    trim: true,
    // required: true,
  },
  //   picture: {
  //     type: String,
  //     trim: true,
  //     // required: true,
  //   },
});

const Visited = model("Visited", VisitedSchema);

module.exports = Visited;
