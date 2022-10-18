require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnectNoSql = require('./config/mongo');
const swaggerUI = require("swagger-ui-express");
//const morganBody = require("morgan-body");
const { dbConnectMysql } = require('./config/mysql');
const openApiConfigration = require('./docs/swagger');
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

// morganBody(app, {
//   noColors: true,
//   stream: loggerStream,
//   skip: function (req, res) {
//     return res.statusCode < 400;
//   },
// });

const port = process.env.PORT || 3000;

//Documentation
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfigration))

// Routes
app.use("/api", require("./routes"));

if (NODE_ENV !== 'test') {
  app.listen(port);
}

if (ENGINE_DB === "nosql") {
  dbConnectNoSql();
} else {
  dbConnectMysql();
}

module.exports = app;
