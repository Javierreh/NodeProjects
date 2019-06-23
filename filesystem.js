const fs = require('fs');

fs.readdir('.', (err, files) => { //podria hacerse tambien con el '__dirname'
	console.log('Primero');
	console.log(files);
});

console.log('Intermedio');

try {
	let files2 = fs.readdirSync(__dirname);
	console.log(files2);
} catch (err) {
	console.log(err);
}

console.log('Finaliza');

fs.readFile('./test.md', 'utf8', (err, content) => {
	console.log(content);
});

// LEER Y MOSTRAR POR CONSOLA EL CONTENIDO DE LOS FICHEROS DE UN DIRECTORIO CUYA EXTENSIÓN SEA .md

// fs.readdir('./ficherosMD', (err, files) => {
// 	console.log(files);
// 	for (file of files) {
// 		if (file.endsWith(".md")) {
// 			fs.readFile('./ficherosMD/'+file, 'utf8', (err, content) => {
//  				console.log(content);
//  			});
// 		}
// 	}
// });

