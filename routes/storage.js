const express = require("express");
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { createItem, getItem, getItems, updateItem, deleteItem } = require("../controllers/storage");
const { getItemValidation } = require("../validators/storage");

/**
 * Get all storages
 * @openapi
 * /storage:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Listar archivos"
 *      description: Obten todas las listas de las archivos
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna la listas de las archivos.
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/storage'
 *        '422':
 *          description: Error de validacion.
 */
router.get("/", getItems);
/**
 * Get detail from storage
 * @openapi
 * /storage/{id}:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Detalle storage"
 *      description: Obten el detalle de una storage
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de storage a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la storage.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/storage'
 *        '422':
 *          description: Error de validacion.
 */
router.get("/:id", getItemValidation, getItem);
/**
 * Delete storage
 * @openapi
 * /storage/{id}:
 *    delete:
 *      tags:
 *        - storage
 *      summary: "Eliminar storage"
 *      description: Elimiar el detalle de una storage
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de canción a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la storage.
 *        '422':
 *          description: Error de validacion.
 */
router.delete("/:id", getItemValidation, deleteItem);
/**
 * Upload file
 * @openapi
 * /storage:
 *    post:
 *      tags:
 *        - storage
 *      summary: "Upload file"
 *      description: Subir un archivo
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *        content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               myfile:
 *                 type: string
 *                 format: binary
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
/**
 * single: when you want to submit a file
 * multi: when you want submit multiple files
 */

router.post("/", uploadMiddleware.single(("myfile")), createItem);

module.exports = router;