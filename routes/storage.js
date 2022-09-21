const express = require("express");
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { createItem } = require("../controllers/storage");
/**
 * single: when you want to submit a file
 * multi: when you want submit multiple files
 */

router.post("/", uploadMiddleware.single(("myfile")), createItem);

module.exports = router;