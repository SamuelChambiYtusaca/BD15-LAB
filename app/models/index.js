const dbConfig = require("D:/BD15-LAB/config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.publi = require("./publi.model.js")(mongoose);
db.url = dbConfig.url;

module.exports = db;