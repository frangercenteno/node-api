const { tracksModel } = require('../models');


/**
 * get all items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
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

  const { body } = req;
  const data = await tracksModel.create(body);
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
