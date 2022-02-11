const { Schema, model } = require('mongoose');

const ToVisitSchema = new Schema({
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
  dateVisted: {
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
});

const ToVisit = model('ToVisit', ToVisitSchema);

module.exports = ToVisit;
