var express = require('express');
var router = express.Router();
let db = require('../db');

router.get('/select', (req, res) => {
	db.get().query('SELECT * FROM alumnos', (err, rows) => {
		if (err) return res.send(err);
		res.json(rows);
	});
});

router.post('/insert', (req, res) => {
	db.get().query('INSERT INTO alumnos (nombre, apellidos, email, edad, matricula, fecha_matricula, notamedia, sexo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [req.body.nombre, req.body.apellidos, req.body.email, req.body.edad, req.body.matricula, req.body.fecha_matricula, req.body.notamedia, req.body.sexo], (err, result) => {
		if (err) return res.send(err);
		res.json(result);
	});
});

router.get('/mayores/:edad', (req, res) => {
	console.log(req.params.edad); //para recuperar el parametro variable de la url
	db.get().query('SELECT * FROM alumnos WHERE edad > ?', [req.params.edad], (err, rows) => {
		if (err) return res.send(err);
		res.json(rows);
	});
});

module.exports = router;