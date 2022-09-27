const express = require('express');
const { getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/tracks');
const { createItemValidation, getItemValidation } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader")
const router = express.Router();

// TODO: http://localhost/tracks GET, POST, DELETE, PUT

router.get('/', getItems);

router.get('/:id', getItemValidation, getItem);

router.post('/', createItemValidation, createItem);

router.put('/:id', getItemValidation, createItemValidation, updateItem);

router.delete('/:id', getItemValidation, deleteItem);




module.exports = router;