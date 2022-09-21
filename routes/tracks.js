const express = require('express');
const { getItems, createItem } = require('../controllers/tracks');
const { createItemValidation } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader")
const router = express.Router();

// TODO: http://localhost/tracks GET, POST, DELETE, PUT

router.get('/', getItems);

router.post('/', createItemValidation, customHeader, createItem);


module.exports = router;