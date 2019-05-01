"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {

        db.collection('tweets').insertOne(newTweet, (err) => {
          if (err) {
            return callback(err);
          }
        });
        callback(null, true);
    },

    // Get all tweets in `db`
    getTweets: function(callback) {
      db.collection('tweets').find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, tweets);
      })
    },

    //updates likes for a tweet in the database
    updateLikes: function(data, callback) {
      try {
        db.collection('tweets').updateOne(
          {"user.name": data.user, "content.text": data.text},
          { $set: {"likes": data.likes}}
        );
      } catch (err) {
        callback(err);
      };
    }
  }
}
