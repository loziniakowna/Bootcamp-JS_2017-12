var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {  //na zdarzenie odczytu wykonaj funkcję

	var input = process.stdin.read(); //metoda read() odczytuje co podal uzytkownik na wejsciu
	
	if(input !== null) {
		var instruction = input.toString().trim(); //trim() - pozbywamy się wszystkich białych znaków

		switch (instruction) {
			case "/exit":
				process.stdout.getOSwrite('Quitting app!\n');
				process.exit();
				break;
			case "/sayhello":
				process.stdout.write('hello!\n');
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;	 
			default:
				process.stderr.write('Wrong instruction!\n');
				break;
		}
	}
});



//console.log("język systemowy użytkownika: "+ process.env.LANG);
//console.log("wersja node.js: " + process.versions.node);