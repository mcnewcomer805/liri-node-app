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
var params = {
  screen_name:'newcomer805'
}
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

