const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function(req, file, cb) {
    const ext = file.originalname.split(".").pop(); //["name", "ext"]
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  }
});

const uploadMiddleware = multer({
  storage,
});

module.exports = uploadMiddleware;
