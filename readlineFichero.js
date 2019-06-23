const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);

let arr = [];

rl.question('¿Cuál es tu nombre?', (answer) => {

	fs.appendFileSync(`./${answer}.md`, `Fichero de ${answer}\n-----------------------\n`);
	
	rl.setPrompt('Dime algo (exit para salir) ');
	rl.prompt();

	rl.on('line', (input) => {
		if (input == 'exit') {
			// console.log(arr);
			fs.appendFile(`./${answer}.md`, `\n\n`, (err) => {
				if (err) console.log(err);
			});
			rl.close();
		}
		else {
			arr.push(input);
			fs.appendFile(`./${answer}.md`, `* ${input}\n`, (err) => {
				if (err) console.log(err);
			});
			rl.prompt();
		}
	});
});

rl.on('close', () => {
	console.log(arr);
});

