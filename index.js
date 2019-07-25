//引入collection集合
const my_index_movies = require("./collections/my_index_movies");
const my_index_coming_soon = require("./collections/my_index_coming_soon");
const my_index_in_theaters = require("./collections/my_index_in_theaters");

// 1.引入Movies相关数据
/* let indexMoviesData = require("./data/my_index_movies");
let comingSoon = require("./data/my_index_coming_soon");
let inTheaters = require("./data/my_index_in_theaters"); */

// 2.插入多条语句
/* my_index_movies.insertMany(indexMoviesData,err=>{
    if(!err){
        console.log("my_index_movies插入成功！")
    }
})
my_index_coming_soon.insertMany(comingSoon, err => {
    if (!err) {
        console.log("my_index_coming_soon插入成功！")
    }
})
my_index_in_theaters.insertMany(inTheaters, err => {
    if (!err) {
        console.log("my_index_in_theaters插入成功！")
    }
}) */

var express = require('express')
var app = express();
//设置监听9000端口
app.listen(9000, "0.0.0.0")
//创建路由
var router = express.Router()
app.use("/my", router)
//localhost:9000/my/movies
router.get("/movies", (req, res, next) => {
    moviesModel = my_index_movies.find({})
    moviesModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
router.get("/in_theaters", (req, res, next) => {
    moviesModel = my_index_in_theaters.find({})
    moviesModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})
router.get("/coming_soon", (req, res, next) => {
    moviesModel = my_index_coming_soon.find({})
    moviesModel.exec((err, doc) => {
        if (err) {
            res.json({
                status: '-1',
                msg: err.message
            })
        } else {
            res.json({
                status: '1',
                data: {
                    total: doc.length,
                    object_list: doc
                }
            })
        }
    })
})

// 查询/my/movies/list?page=2&limit=4&sort=1
//page页数  limit条数 sort排序
// router.get("/movies/list", (req, res, next) => {
//     // 接受前端传来的参数
//     let page = parseInt(req.param('page')) || 1 //页数 默认为1
//     let pageSize = parseInt(req.param('limit')) || 10 //每页显示的条数 默认为10
//     //按照sort来排序 
//     let sort = req.param("sort")
//     let skip = (page - 1) * pageSize//1*10
//     let params = {};

//     let hotsModel = my_index_movies.find(params).skip(skip).limit(pageSize)
//     let len = 0;
//     my_index_movies.find(params, (err, result) => {
//         len = result.length;
//         //可以按照sc评分来排序 用户传入sort=1正序排列
//         hotsModel.sort({ 'sc': sort })
//         hotsModel.exec((err, doc) => {
//             if (err) {
//                 res.json({
//                     status: '-1',
//                     msg: err.message
//                 })
//             } else {
//                 res.json({
//                     status: '1',
//                     data: {
//                         total: len,
//                         current_total: doc.length,
//                         object_list: doc
//                     }
//                 })
//             }
//         })
//     })
// })





//更新语句
// dt.updateOne({ sender_id: 16617347 }, { $set: { msg:"哈哈哈"}},err=>{
//     if(!err){
//         console.log("更新成功！")
//     }
// })

// dt.updateMany({ name: "王五" }, { $set: { age: 30 } }, err => {
//     if (!err) {
//         console.log("更新成功！")
//     }
// })


//删除语句
// dt.deleteMany({name:"Lisi"},err=>{
//     if(!err){
//         console.log("删除成功！")
//     }
// })


//查找用户
// dt.find({ name: "王五" }, { name: 1, age: 1, _id: 0 }, (err, result) => {
//     if (!err) {
//         var str = ""
//         result.forEach(item => {
//             str += item.name + ":" + item.age + "\n"
//         })
//         console.log("用户信息为：\n" + str)
//     }
// });