var request = require("request");
var cheerio = require("cheerio");

function get(username) {
var options = {
	url: "https://www.facebook.com/"+ username +"/reviews/",
	headers: {'User-Agent': 'request'}
}  	
   
request(options, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    var head = $('.fwn').first();
    var headText = head.text();
    var userContent = $('.userContent').first();
    var userContentText = userContent.text();

    var review = {
    	head: headText,
    	content: userContentText

    }
    console.log(review.head + '\n' + review.content + '\n');
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});

}

module.exports.get = get;