const http = require('http');

let server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	res.end('Adios, este es mi primer server');
});

server.listen(3000);