var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// http://localhost:3000/users/new
router.get('/new', (req, res, next) => {
	console.log('Pasa por el middleware /users/new');
	next();
}, (req, res) => {
	res.send('Estas en users/new');
}); //todo esto es una forma de concatenar controladores, pero al final siempre hay que terminar dando la respuesta, pero el middleware anteriores tienen que usar el next() para seguir adelante con el siguiente controlador


// http://localhost:3000/users/list
router.get('/list', (req, res) => {
	res.json([
		{ nombre: 'iPhoneX', precio: 200 },
		{ nombre: 'MacBook Pro', precio: 2000 },
		{ nombre: 'Cable MagSafe', precio: 35 }
	]);
});

// http://localhost:3000/users/78
router.get('/:userId', (req, res) => {
	console.log(req.params);
	res.send('Ruta con parte variable');
});

// Peticion de tipo POST: http://localhost:3000/users/peticionPost
router.post('/peticionPost', (req, res) => {
	console.log(req.body);
	res.send('Ruta con verbo POST');
});

module.exports = router;
