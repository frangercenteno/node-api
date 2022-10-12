const bcryptjs = require('bcryptjs');

/**
 * Password without encrypt: hi.01
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};

/**
 * Give password without encrypt and encrypt password 
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */

const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = {
  encrypt,
  compare,
}