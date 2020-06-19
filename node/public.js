var Path = require("path");
var Formidable = require("formidable");
var FS = require('fs');
var Express = express();

//需要使用node.js的Express框架
Express.post('/UploadImg',function (Request,Response) {
  
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
        data:['http://localhost:8888/' + files.Content.name]
      };
      Response.json(MyJson);
    });
  });
});
