var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
	console.log('Entraste en personas/new');
	res.render('personas');
});

router.post('/create', (req, res) => {
	res.json(req.body);
});

module.exports = router;