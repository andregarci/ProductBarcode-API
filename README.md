# ProductBarcode API

Una API REST para gestionar productos y generar códigos de barras asociados a ellos.

## Instrucciones de instalación

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/andregarci/ProductBarcode-API.git
    cd ProductBarcode-API
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Crear el archivo .env:**

    Crea un archivo llamado `.env` en la raíz del proyecto y copia el siguiente contenido, adaptándolo a tu configuración de MySQL:

    ```
    PORT=3000
    DB_HOST=localhost
    DB_USER=tu_usuario_mysql
    DB_PASSWORD=tu_contraseña_mysql
    DB_NAME=barcode_db
    ```

    * Asegúrate de que los valores de `DB_HOST`, `DB_USER`, `DB_PASSWORD` y `DB_NAME` coincidan con tu configuración de MySQL.

4.  **Ejecutar la aplicación:**

    ```bash
    node app.js
    ```

    La API estará disponible en `http://localhost:3000`.

