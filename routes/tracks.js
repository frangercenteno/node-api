const express = require('express');
const { getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/tracks');
const { createItemValidation, getItemValidation } = require("../validators/tracks");
const authMiddleware = require('../middleware/session');
const checkRol = require("../middleware/rol");
const router = express.Router();

// TODO: http://localhost/tracks GET, POST, DELETE, PUT

router.get('/', authMiddleware, checkRol(["admin", "user"]), getItems);

router.get('/:id', authMiddleware, getItemValidation, getItem);

router.post('/', authMiddleware, createItemValidation, createItem);

router.put('/:id', authMiddleware, getItemValidation, createItemValidation, updateItem);

router.delete('/:id', authMiddleware, getItemValidation, deleteItem);




module.exports = router;