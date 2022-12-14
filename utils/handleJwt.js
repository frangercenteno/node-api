const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require("../utils/handlePropiertiesEngine");
const propertiesKey = getProperties();
/**
 * Should pass user object
 * @param {*} user
 */
const tokenSign = (user) => {
  const sign = jwt.sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return sign;
};

/**
 * Should pass session JWT
 * @param {*} tokenJwt 
 * @returns 
 */

const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null
  }
};

module.exports = {
  tokenSign,
  verifyToken,
};
