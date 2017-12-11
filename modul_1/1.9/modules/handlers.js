var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');

var imgName ="";

exports.upload = function(request, response) {
	console.log ("rozpoczynam obsługe żądania upload.");

	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {

		imgName = files.upload.name;
		console.log("pobrano: " + imgName);

		mv(files.upload.path, imgName, function(err) {
    		if (err) { throw err; }
			console.log('poprawnie przeniesiono plik');
		});
		
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}

exports.welcome = function(request, response) {
	console.log("rozpoczynam obsługę żadania welcome");

	fs.readFile('templates/start.html','utf-8', function(err, data){
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(data);
		response.end();
	});
}

exports.show = function(request, response) {
	fs.readFile(imgName, "binary", function(error, file){
		response.writeHead(200, {"Content-Type": "image/png"});
		response.write(file, "binary");
		response.end();
	});
}

exports.error = function(request, response) {
	console.log("nie wiem co robić");
	response.write("404 :(");
	response.end()
}