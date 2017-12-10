var fs = require('fs');

var fileName = 'myFiles.txt';
var myFiles = '';

fs.readdir('./', function(err, files) {

	for (var i = 0; i<files.length; i++) {
		myFiles += files[i] + '\n';
	}
	console.log('Zawartość katalogu: \n' + myFiles); 

	fs.writeFile(fileName, myFiles, 'utf-8', function(err) {
		if(err) throw err;
		console.log('Zapisano do pliku ' + fileName);
	});

});



