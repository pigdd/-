//创建教师表
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//创建教师表Teachers
var WorkSchema = new Schema({
    WorkName:{
        type:String,
        require:true
    },
    WorkImg:{
       type:String,
       require:true,
    },
    TeacherName:{
        type:String,
        require:true
    }

})
var Work = mongoose.model('Works',WorkSchema)
module.exports = Work