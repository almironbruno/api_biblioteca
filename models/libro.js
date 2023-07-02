const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/biblioteca', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const libroSchema = new mongoose.Schema({
    nombre: String,
    producto: String,
    email: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', libroSchema);

module.exports = Libro;