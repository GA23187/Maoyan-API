//引入mongoose模块
const db = require("../config")
//设置Schema规范
const mySchema = new db.Schema({
    rating: Object,
    genres: Array,
    title: String,
    casts: Array,
    durations: Array,
    collect_count:Number,
    mainland_pubdate: String,
    has_video: Boolean,
    original_title:String,
    subtype: String,
    directors: Array,
    pubdates: Array,
    year: String,
    images: Object,
    alt:String,
    id:String
})
//创建一个名称为indexMovies的集合
module.exports = db.model("inTheaters", mySchema)