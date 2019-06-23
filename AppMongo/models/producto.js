const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productoSchema = new Schema({
	nombre: String,
	descripcion: String,
	departamento: String,
	precio: Number,
	activo: Boolean
});

productoSchema.methods.mismoDepartamento = function(callback) {
	this.model('Producto').find({ departamento: this.departamento }, callback);
}

productoSchema.statics.activos = function (callback) {
	this.model('Producto').find({ activo: true }, callback);
}

module.exports = mongoose.model('Producto', productoSchema);