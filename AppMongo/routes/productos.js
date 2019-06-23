let express = require('express');
let router = express.Router();
let Producto = require('../models/producto');

router.get('/igual1000', (req, res) => {
	Producto.find({
		precio: 1000
	}, (err, productos) => {
		res.json(productos);
	});
});

router.get('/menor1000', (req, res) => {
	Producto.find({
		precio: { $lt: 1000 }
	}, (err, productos) => {
		res.json(productos);
	});
});

router.get('/entre50y1000', (req, res) => {
	Producto.find({
		precio: { $lt: 1000, $gte: 50 },
		activo: true
	}, (err, productos) => {
		res.json(productos);
	});
});

router.get('/mismoDepartamento', (req, res) => {
	let prod = new Producto();
	prod.departamento = 'Alimentacion';

	prod.mismoDepartamento((err, productos) => {
		res.json(productos);
	});
});

router.get('/activos', (req, res) => {
	Producto.activos((err, productos) => {
		res.json(productos);
	});

});

router.post('/new', (req, res) => {
	Producto.create(req.body)
	.then(producto => {
		res.json(producto)
	})
	.catch(err => res.json(err));
});

module.exports = router;