const mongoose = require('mongoose');
const mongoUrl = 'mongodb://127.0.0.1:27017/neoland';
mongoose.connect(mongoUrl, { useNewUrlParser: true });