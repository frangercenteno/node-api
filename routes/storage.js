const express = require("express");
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { createItem, getItem, getItems, updateItem, deleteItem } = require("../controllers/storage");
const { getItemValidation } = require("../validators/storage");

router.get("/", getItems);
router.get("/:id", getItemValidation, getItem);
router.delete("/:id", getItemValidation, deleteItem);
/**
 * single: when you want to submit a file
 * multi: when you want submit multiple files
 */

router.post("/", uploadMiddleware.single(("myfile")), createItem);

module.exports = router;