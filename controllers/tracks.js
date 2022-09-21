const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');


/**
 * get all items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
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

  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_CREATE_ITEM');
  }
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
