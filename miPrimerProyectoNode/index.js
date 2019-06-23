const moment = require('moment');
const axios = require('axios');

console.log('Empieza mi SCRIPT');

let fechaActual = moment().format('DD-MM-YYYY');

console.log(fechaActual);

// axios.get('http://google.es').then(response => {
// 	console.log(response);
// });

console.log(__dirname);
console.log(__filename);