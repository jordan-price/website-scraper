var request = require("request");
var cheerio = require("cheerio");

var reviews = require('./server.js');
var usernames = ['KenGarffAuto', 'DougSmithCJDRSpanishFork','bobwadeautoworld'];

usernames.forEach(reviews.get);