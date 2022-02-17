const db = require("../config/connection");
const { Profile, Places } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const placesSeeds = require("./places.json");

db.once("open", async () => {
  // clean database
  await Profile.deleteMany({});
  await Places.deleteMany({});

  // bulk create each model
  const profiles = await Profile.insertMany(profileSeeds);
  const places = await Places.insertMany(placesSeeds);

  for (newProfile of profiles) {
    // randomly add a place to each profile
    const tempPlace = places[Math.floor(Math.random() * places.length)];
    newProfile.places = tempPlace._id;
    await newProfile.save();
  }

  console.log("all done!");
  process.exit(0);
});
