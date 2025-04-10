const express = require('express');
const router = express.Router();

// Definir una ruta de ejemplo para los productos
router.get('/', (req, res) => {
  res.send('Listado de productos');
});

module.exports = router;
