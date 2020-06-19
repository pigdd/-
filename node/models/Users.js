//引入mongos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//创建Schema：数据库名是WorkSchame  数据表的名字是：users
var WorkSchema  = new Schema({
    // userName:String,  //用户名
    // Password:String, //密码
    // Phone:Number,  //电话
    // Age:Number,   //年龄
    // Sex:String,    //性别
    // Class:String,  //类别（老师/学生）
    // Email:String,  //邮箱
    // Avatar:String   //头像
    userName:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Age:{
        type:Number,
        require:true
    },
    Sex:{
        type:String,
        require:true
    },
    Phone:{
        type:String,
        required:true
    },
    Email:{
        type:String
    },
    Login:{
        type:Number
    },
    Work:{
        type:Array
    }
})

var User = mongoose.model('users',WorkSchema);
module.exports = User
