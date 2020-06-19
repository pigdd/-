var express = require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var Path = require('path');
var  Formidable = require("formidable");
var FS = require('fs');
var app = express()
var Express = express()
//引入路由
var userRouter = require("../node/routes/user")
var bookRouter = require("../node/routes/book")
var videoRouter = require("../node/routes/video")
var teacherRouter = require("../node/routes/teacher")
var workRouter = require("../node/routes/work")
app.use('/Public',express.static('./Public'))
//bodyParser的中间件
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//引入user.js并使用

app.use(require('./routes/user'))
app.use(require('./routes/book'))
app.use(require('./routes/video'))
app.use(require('./routes/teacher'))
app.use(require('./routes/work'))
app.use("/routes/user",userRouter)  //第一个参数相当于路由的路径可以自己命名
app.use("/routes/book",bookRouter)
app.use("/routes/video",videoRouter)
app.use("/routes/teacher",teacherRouter)
app.use("/routes/work",workRouter)
mongoose.connect('mongodb://localhost:27017/WorkMsg')


//public图片接口
app.post('/routes/user/UploadImg',function (Request,Response) {
    //Formidable模块用来接收前端传递过来的formdata
    var From = new Formidable.IncomingForm();  
    //设置保存 文件路径
    var TargetFile = Path.join(__dirname, './Public/');
    From.uploadDir = TargetFile; 
    //parse方法的回调函数中，fields对象为前端formdata append的一般字段，
    //files为前端formdata append的图片文件
    From.parse(Request,function (err, fields, files) {
      if (err) throw err;
      var FilePath = files.Content.path;         //此处Content为前端formdata append文件的对应字段
      var NewPath = Path.join(Path.dirname(FilePath), files.Content.name);
      FS.rename(FilePath, NewPath, function (err) {
        if (err) throw err;
        var MyJson = {
          errno: 0,
          data:['http://localhost:3000/Public/' + files.Content.name]
        };
        Response.json(MyJson);
      });
    });
  });
// 判断数据库是否连接成功
var db=mongoose.connection

db.on('open',function(){
    console.log('数据库连接成功')
})

db.on('error',function(){
    console.log('数据库连接失败')
})
app.get("/",(req,res) => {
    res.send("加油！奥利给！！")
})
app.listen(3000,function(){
    console.log('服务器在http://localhost:3000 打开')
})