const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);

let arr = [];

rl.question('¿Cuál es tu nombre?', (answer) => {

	// fs.appendFileSync(`./${answer}.md`, `## Fichero de ${answer}\n-----------------------\n`);
	
	let streamW = fs.createWriteStream(`./${answer}.md`);
	streamW.write(`## Fichero de ${answer}\n-----------------------\n`);

	rl.setPrompt('Dime algo (exit para salir) ');
	rl.prompt();

	rl.on('line', (input) => {
		if (input == 'exit') {
			streamW.write(`\n`);
			streamW.close();
			rl.close();
		}
		else {
			arr.push(input);
			streamW.write(`* ${input}\n`);
			rl.prompt();
		}
	});
});

rl.on('close', () => {
	console.log(arr);
});

