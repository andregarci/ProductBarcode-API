const { v4: uuidv4 } = require('uuid'); // Para generar un identificador
const productModel = require('../models/productModel');
const { generateBarcodeBuffer } = require('../services/barcodeService');

const productController = {
  // Crear un producto
  createProduct: async (req, res) => {
    try {
      const { name } = req.body;
      
      if (!name) {
        return res.status(400).json({ message: 'Falta el campo "name"' });
      }

      // Genera un identificador corto de 10 caracteres
      const shortId = uuidv4().replace(/-/g, '').slice(0, 10);

      // Guardar el producto en la base de datos con el id generado
      await productModel.create(shortId, name);

      return res.status(201).json({
        message: 'Producto creado',
        productId: shortId
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear el producto' });
    }
  },

  // Obtener un producto por id
  getProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productModel.findById(id);

      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

      return res.status(200).json({
        id: product.id,
        name: product.name,
        barcodeImageUrl: `/products/${product.id}/barcode`
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener el producto' });
    }
  },

  // Generar la imagen del código de barras usando el id
  getBarcode: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productModel.findById(id);

      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

      // Generar el buffer PNG usando el id (que es el código)
      const pngBuffer = await generateBarcodeBuffer(product.id);

      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': pngBuffer.length
      });
      return res.end(pngBuffer);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al generar código de barras' });
    }
  }
};

module.exports = productController;
