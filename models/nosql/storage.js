const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  }, 
  {
    timestamps: true, //TODO: createdAt, updatedAt
    versionKey: false,
  }
);

/** 
 * @params name schema
 * @params schema
*/
module.exports = mongoose.model("storage", StorageSchema);