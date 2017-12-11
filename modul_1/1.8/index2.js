var http = require('http');
var fs = require('fs');

var server = http.createServer();

var image = './404.jpeg';


server.on('request', function(request, response) {
	response.setHeader ("Content-Type", "text/html; charset=utf-8");

	if (request.method === 'GET' && request.url === '/') {

		fs.readFile('./index.html', 'utf-8', function(err, data) {
			if (err) throw err;
			response.write(data);
			response.end();
		});
	} else {
		response.setHeader('Content-Type', 'image/jpeg');
		response.statusCode = 404;

		fs.readFile(image, function(err, myImg){
			if (err) throw err;
			response.write(myImg);
			response.end();	
		});
	}
});

server.listen(9000);
