const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleError");

/**
 * Reister user
 * @param {*} req
 * @param {*} res
 */
const register = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (_) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

/**
 * login user
 * @param {*} req
 * @param {*} res
 */

const login = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({ email: req.email });
    if (!user) {
      handleHttpError(res, "USER_NOT_EXIST", 404);
      return;
    }

    const hashPassword = user.get('password');
    const check = await compare(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, "PASSORD_INVALID", 401);
      return;
    }

    user.set('password', undefined, { strict: false });
    const data = {
      token: tokenSign(user),
      user,
    }

    res.send({ data });


  } catch (_) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = {
  register,
  login,
};
