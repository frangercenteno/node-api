const { check } = require('express-validator');
const validationResults = require("../utils/handleValidator");

const getItemValidation = [
  check("id").exists().notEmpty(),
  (req, res, next) => validationResults(req, res, next),
];

module.exports = {
  getItemValidation,
}