const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    }
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
module.exports = mongoose.model("users", UserSchema);