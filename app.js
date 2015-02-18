var express = require('express');
var fs= require('fs');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	// res.render('index');
	var fileContents = fs.readFile('data.txt', function(err, data){
	  
	  if(err){
		throw err;
	  }
	  else{
	  	console.log('async worked, THIS IS A CONSOLE.LOG')
		res.header('Content-Type', 'text/html');
		res.send(data);
	  }
	});
});

app.get('/:filename', function(req, res){
	var fileContents = fs.readFile(req.params.filename, function(err, data){
		if(err){throw err}
		else{
			console.log('CONSOLE.LOG :filename function')
			res.header('Content-Type', 'text/html');
			res.send(data);
		}
	});
});

var server = app.listen(3208, function() {
	console.log('Express server listening on port ' + server.address().port);
});
