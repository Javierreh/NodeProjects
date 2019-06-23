const readline = require('readline');
// const exec = require('child_process').exec; // para ejecutar comandos en la consola
const rl = readline.createInterface(process.stdin, process.stdout);

let arr = [];

rl.question('¿Cuál es tu nombre?', (answer) => {
	
	rl.setPrompt('Dime algo (exit para salir) ');
	rl.prompt();

	rl.on('line', (input) => {
		if (input == 'exit') {
			// console.log(arr);
			rl.close();
		}
		else {
			arr.push(input);
			rl.prompt();
		}
	});
});

rl.on('close', () => {
	console.log(arr);
});

