const bwipjs = require('bwip-js');

const generateBarcodeBuffer = async (code) => {
  try {
    // Genera un buffer PNG para el código de barras sin incluir texto
    const png = await bwipjs.toBuffer({
      bcid: 'code128',   // Tipo de código de barras
      text: code,        // Usamos el "id" del producto
      scale: 3,
      height: 10,
      includetext: false
    });
    return png;
  } catch (error) {
    throw error;
  }
};

module.exports = { generateBarcodeBuffer };
