const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * get all items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  const data = await storageModel.find({});
  res.send({ data });
};

/**
 * get a item
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {

}

/**
 * create a item
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body, file } = req;
  const fileData = {
    fileName: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
  
}

/**
 * update a item
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {
  
}

/**
 * delete a item
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {
  
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
