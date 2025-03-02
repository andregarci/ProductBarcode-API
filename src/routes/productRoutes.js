
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Crear un producto (ahora solo pasamos name en el body)
router.post('/', productController.createProduct);

// Obtener un producto por ID
router.get('/:id', productController.getProduct);

// Obtener la imagen PNG del código de barras
router.get('/:id/barcode', productController.getBarcode);

module.exports = router;
