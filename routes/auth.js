const express = require('express');
const { register, login } = require("../controllers/auth");
const {
  registerValidator,
  loginValidator,
} = require("../validators/auth");

const router = express.Router();

router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);




module.exports = router;