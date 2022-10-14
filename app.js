require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnectNoSql = require('./config/mongo');
const { dbConnectMysql } = require('./config/mysql');
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

// Routes
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`listen in port ${port}`);
});

if (ENGINE_DB === "nosql") {
  dbConnectNoSql();
} else {
  dbConnectMysql();
}
