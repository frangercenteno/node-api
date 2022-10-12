const { check } = require('express-validator');
const validationResults = require("../utils/handleValidator");

const registerValidator = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => validationResults(req, res, next),
];

const loginValidator = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => validationResults(req, res, next),
];



module.exports = {
  registerValidator,
  loginValidator,
};