const db = require('../config/connection');
const { Profile, ToVist, Visited } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const toVisitSeeds = require('./toVisitSeeds.json');
const visitedSeeds = require('./visitedSeeds.json');

// db.once('open', async () => {
//   try {
//     await Profile.deleteMany({});
//     await Profile.create(profileSeeds);

//     console.log('all done!');
//     process.exit(0);
//   } catch (err) {
//     throw err;
//   }
// });
