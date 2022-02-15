const { Schema, model } = require("mongoose");

const VisitedSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  // personal rating
  myRating: {
    type: mongoose.Decimal128,
    trim: true,
  },
  comment: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 180,
  },
  dateVisted: {
    type: Date,
    trim: true,
  },
  // picture: {
  //   // type: String, what should this be?
  //   type: ,
  //   trim: true,
  // },
});

const Visited = model("Visited", VisitedSchema);

module.exports = Visited;
