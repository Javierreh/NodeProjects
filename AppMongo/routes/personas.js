let express = require('express');
let router = express.Router();
let Persona = require('../models/persona');

router.get('/', (req, res) => {
	Persona.find((err, personas) => {
		if (err) return res.json({ error: err });
		res.render('personas/index', {
			arrPers: personas
		});
	})
});


router.get('/insert', (req, res) => {
	let p = new Persona();
	p.nombre = 'Raul';
	p.apellidos = 'García';
	p.edad = 23;
	p.empresa = 'Accenture';
	p.coche = true;
	p.save((err) => {
		res.send('Persona insertada');
	});
});

router.get('/insertv2', (req, res) => {
	Persona.create({ nombre: 'Elemna', apellidos: 'García', edad: 22, empresa: 'Accenture', coche: false })
	.then((persona) => {
		res.json(persona);
	})
});

router.post('/insertv3', (req, res) => {
	Persona.create(req.body)
	.then(persona => {
		res.json(persona);
	})
});


router.get('/:personaId', (req, res) => {
	Persona.findById(req.params.personaId, (err, persona) => {
		if (err) return res.json({ error: err });
		res.render('personas/show', {pers: persona});
	});
});

module.exports = router;
