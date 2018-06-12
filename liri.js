require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var omdb = require('omdb-api');
var Twitter = require('twitter');
var nodeArg = process.argv;
var text = process.argv[2];
// var secondInput = process.argv[2];
var secondInput = "";
var fs = require("fs");
var request = require('request');
var express = require('express');
var app = express();
for (var i = 3; i < process.argv.length; i++) {
  secondInput += process.argv[i] + "+"
}
secondInput = secondInput.slice(0, -1)

// console.log(keys);
var params = {
  screen_name:'newcomer805'
};

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// {/* spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

// // var movieQuery url

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({

// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) { */}
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify(keys.spotify);

// var action = process.argv[2];

// spotify.search({ type: 'track', query: secondInput, limit: 1 }, function (err, data) {
//   // console.log(response);
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
  // });
 
 
 
 
 
  // client.get('statuses/user_timeline', params, searchedData);
  // function searchedData(err, data, response){
    // if(err) throw err;
    // for (var i = 0; i < params.count; i++) {
      // console.log(data);


    // console.log(data);  // Tweet body.
    
  // };

// console.log(keys)

// var request = require("request");

// Grab the movieName which will always be the third node argument.
// var movieName = process.argv[2];

// Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);  UNCOMMENT

// request(queryUrl, function(error, response, body) {

  // If the request is successful
  // if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    // console.log("Release Year: " + JSON.parse(body).Year); UNCOMMENT
  // }
  // console.log(JSON.stringify(response, null, 2));
});