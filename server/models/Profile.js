const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  toVisit: [
    {
      type: Schema.Types.ObjectId, // refers to the _id object type
      ref: "toVisit", // refers to the collection called toVisit in toVisit.js
    },
  ],
  Visited: [
    {
      type: Schema.Types.ObjectId, // refers to the _id object type
      ref: "Visted", // refers to the collection called Visted in Visted.js
    },
  ],
});

// set up pre-save middleware to create password
profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model("Profile", profileSchema);

module.exports = Profile;
