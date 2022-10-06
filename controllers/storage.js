const fs = require("fs");
const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * get all items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_LIST_ITEMS");
  }
};

/**
 * get a item
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_DETAIL_ITEM");
  }
};

/**
 * create a item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      url: `${PUBLIC_URL}/${file.filename}`,
      filename: file.filename,
    };
    const data = await storageModel.create(fileData);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEM");
  }
};

/**
 * update a item
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * delete a item
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await storageModel.findById(id);
    const deleteResponse = await storageModel.delete({ _id: id });
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filePath);
    const data = {
      filePath,
      delete: deleteResponse.matchedCount,
    };
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
