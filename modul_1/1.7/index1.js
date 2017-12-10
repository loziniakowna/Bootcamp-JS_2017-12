var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err,data){
	console.log('dane przed zapsem'.blue);
	console.log(data);

	fs.appendFile('./tekst.txt', '\nTak wygladają dane po zapisie', function(err) {
		if(err) throw err;
		console.log('zapisano'.blue);

		fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
			console.log('Dane po zapisie'.blue);
			console.log(data);
		});
	});
});