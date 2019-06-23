// LEER Y MOSTRAR POR CONSOLA EL CONTENIDO DE LOS FICHEROS DE UN DIRECTORIO CUYA EXTENSIÓN SEA .md

const fs = require('fs');

fs.readdir('./ficherosMD', (err, files) => {
	console.log(files);
	for (file of files) {
		if (file.endsWith(".md")) {
			fs.readFile('./ficherosMD/'+file, 'utf8', (err, content) => {
 				console.log(content);
 			});
		}
	}
});

// fs.readdir('.', (e, f) => f.filter(fl => fl.endsWith('.md')).forEach(f => fs.readFile(`./ficherosMD/${f}`, 'utf8', (e, c) => console.log(c))));