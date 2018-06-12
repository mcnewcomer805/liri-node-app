

require("dotenv").config();

var keys = require("./keys.js");
var nodeArg = process.argv;
var text = process.argv[2];

var params = {
    count: 5
}

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var spotify = require('node-spotify-api');
 
var spotify = new Spotify({
//   id: "d0a10b53bd6848e2893d82d9a4cfc427",
//   secret: "6725aa831e074f8aa248664ec1e27f9c"
//   SPOTIFY_SECRET=6725aa831e074f8aa248664ec1e27f9c
});


// boot camp homework 7 updated inprocess

// Client ID a89d12152251447b9298966c8a10a32c
// Client Secret 24d36dcca20048878a18f107167f4e07
 
spotify.search({ type: 'track', query: secondInput, limit: 1 }, function (err, data) {
    // console.log(response);
  })
  (function(err) {
//   .catch(function(err) {
    // console.log(err);
  });

  var Twitter = require('twitter');
 
//   var client = new Twitter({
//     consumer_key: 'dV30lCx4V6te77xJkAvCao96z',
//     consumer_secret: 'GGekSG2vpWWONsMoUF7CvkfWEVmqjiodjdAaJekScO8oOybEHx',
//     access_token_key: '1004883329789788161-l42OBloYkbPqBNmX6P2SVWlzT9E72G',
//     access_token_secret: 'XXU3L5WPfaUPvVvpx0GwkahOwYIjOYSUBKYCNOLRaz1F2'
//   });
   
//   var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, searchedData);
  function searchedData(err, data, response){
    if (!error) {
      console.log(tweets);
    }
  };

// console.log(keys);

http://www.omdbapi.com/?i=tt3896198&apikey=5fdd6ce2


require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var omdb = require('omdb-api');
var Twitter = require('twitter');
var nodeArg = process.argv;
var text = process.argv[2];
var secondInput = process.argv[2];
var fs = require("fs");
var request = require('request');
var express = require('express');
var app = express();
// console.log(keys);
var params = {
  screen_name:'newcomer805'
};

// var movieQuery url
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

 
// spotify.search({ type: 'track', query: secondInput, limit: 1 }, function (err, data) {
//   console.log(response);
// //   })
// if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 

// console.log(data); 
// });

  // TWIITER

  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      
      for (i = 0; i < tweets.length; i++) {
        console.log(`Tweet : ${tweets[i].text}`);
        console.log(`Created : ${tweets[i].created_at}`);
        console.log("============================")
      };
    }
  });
  // client.get('statuses/user_timeline', params, searchedData);
  // function searchedData(err, data, response){
    // if(err) throw err;
    // for (var i = 0; i < params.count; i++) {
      // console.log(data);


    // console.log(data);  // Tweet body.
    
  // };

// console.log(keys)

var request = require("request");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);  UNCOMMENT

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    // console.log("Release Year: " + JSON.parse(body).Year); UNCOMMENT
  }
});