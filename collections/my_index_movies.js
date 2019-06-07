//引入mongoose模块
const db = require("../config")
//设置Schema规范
const mySchema = new db.Schema({
    id: Number,
    haspromotionTag: Boolean,
    img: String,
    version: String,
    nm: String,
    preShow:Boolean,
    sc: Number,
    globalReleased: Boolean,
    wish:Number,
    star: String,
    rt: Date,
    showInfo: String,
    showst: Number,
    wishst: String
})
//创建一个名称为indexMovies的集合
module.exports = db.model("indexMovies", mySchema)