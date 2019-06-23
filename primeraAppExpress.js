require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT | 3000;


app.get('/', (req, res) => {
	res.end('Ruta Raiz');
});


// GET http://localhost:3002/json
app.get('/json', (req, res) => {
	res.json({ nombre: 'Javi', apellidos: 'Arroyo', edad: 28});
});


// POST http://localhost:3002/peticionPost
app.post('/peticionPost', (req, res) => {
	res.end('Estoy haciendo una petición POST');
});


app.listen(PORT, () => {
	console.log(process.env.MAIL);
	console.log(`App escuchando sobre el puerto ${PORT}`);
});