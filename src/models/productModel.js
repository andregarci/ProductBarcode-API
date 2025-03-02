const db = require('../config/db');

// Crear la tabla si no existe con id corto y name
const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id VARCHAR(10) PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;
  db.query(query, (err) => {
    if (err) {
      console.error('Error creando/verificando la tabla products:', err);
    } else {
      console.log('Tabla products verificada/creada correctamente.');
    }
  });
};

createTable();

const productModel = {
  // Crear un producto nuevo usando "id" (el código corto) y "name"
  create: (id, name) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO products (id, name) VALUES (?, ?)';
      db.query(query, [id, name], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  // Obtener un producto por id (que ahora es el código)
  findById: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products WHERE id = ?';
      db.query(query, [id], (err, rows) => {
        if (err) return reject(err);
        if (rows.length === 0) return resolve(null);
        resolve(rows[0]);
      });
    });
  }
};

module.exports = productModel;
