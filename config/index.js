const db = require("mongoose")
db.connect("mongodb://47.111.166.60:27017/my");
module.exports = db;