const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personaSchema = new Schema({
	nombre: String,
	apellidos: String,
	edad: Number,
	empresa: String,
	coche: Boolean
});


/*
* let p = new Persona();
* p.nombre = 'Rodolfo';
* p.apellidos = 'Martín';
* console.log(p.nombre_completo);
* p.nombre_completo = 'Nombre Apellidos';
*/

personaSchema.virtual('nombre_completo').get(function () {
	return this.nombre + " " + this.apellidos;
});

personaSchema.virtual('nombre_completo').set(function (value) {
	let stringSplit = value.split(' ');
	this.nombre = stringSplit[0];
	this.apellidos = stringSplit[1];
});

module.exports = mongoose.model('Persona', personaSchema);