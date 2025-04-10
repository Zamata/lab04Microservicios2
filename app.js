const express = require('express');
const app = express();
const port = 9000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Rutas
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
