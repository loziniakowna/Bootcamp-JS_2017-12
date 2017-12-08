process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {  //na zdarzenie odczytu wykonaj funkcję

	var input = process.stdin.read(); //metoda read() odczytuje co podal uzytkownik na wejsciu
	
	if(input !== null) {
		var instruction = input.toString().trim(); //trim() - pozbywamy się wszystkich białych znaków

		var version = "wersja node.js: " + process.versions.node + '\n';
		var lang = "język systemowy użytkownika: "+ process.env.LANG + '\n';

		switch (instruction) {
			case "/exit":
				process.stdout.write(version);
				process.stdout.write(lang);
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;	 
			default:
				process.stdout.write(version);
				process.stdout.write(lang);
				process.stderr.write('Wrong instruction!\n');
				break;
		}
	}
});

//console.log("język systemowy użytkownika: "+ process.env.LANG);
//console.log("wersja node.js: " + process.versions.node);