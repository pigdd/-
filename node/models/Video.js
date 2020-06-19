//创建图书表
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//创建视频表Books
var WorkSchema = new Schema({
    VideoName:{
        type:String,
        require:true
    },
    VideoGrade:{
        type:String,
        require:true
    },
    VideoClass:{
        type:String,
        require:true
    },
    VideoImg:{
        type:String,
        require:true
    },
    VNum:{
        type:Number,
        require:true
    }

})
var Video = mongoose.model('Videos',WorkSchema)
module.exports = Video