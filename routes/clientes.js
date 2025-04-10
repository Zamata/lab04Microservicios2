const express = require('express');
const router = express.Router();

// Definir una ruta de ejemplo para los clientes
router.get('/', (req, res) => {
  res.send('Listado de clientes');
});

module.exports = router;
