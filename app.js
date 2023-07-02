const express = require('express');
const app = express();

app.use(express.json());

// Importamos el Router de libros
const librosRouter = require('./routes/libros');
app.use('/libros', librosRouter);

// Importamos elMiddleware Error Handler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});