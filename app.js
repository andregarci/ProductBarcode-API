require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas
app.use('/products', productRoutes);

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
