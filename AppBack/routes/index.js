var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.currentDate); //me he traido la propiedad currentDate en el req del app.js
  res.render('index', { 
  	title: 'Express',
  	estilos: ['uno', 'dos', 'tres'],
  	personas: [
  		{ nombre: 'Javi', apellidos: 'Arroyo', edad: 28 },
  		{ nombre: 'Antonio', apellidos: 'García', edad: 20 },
  		{ nombre: 'Conchi', apellidos: 'Herrera', edad: 18 }
  	]
  });
});


module.exports = router;
