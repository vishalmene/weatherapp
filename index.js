var express = require('express');
var app = express();
var Client = require('node-rest-client').Client;

var client = new Client();

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
});

app.get('/api/:ctname',function(req, res){
    var cityname = req.params.ctname;
     client.get("http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=YOURAPIKEY&mode=html", function (data, response) {
    // parsed response body as js object 
	res.send(data);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
