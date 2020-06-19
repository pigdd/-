//创建教师表
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//创建教师表Teachers
var WorkSchema = new Schema({
    TName:{
        type:String,
        require:true
    },
    TClass:{
        type:String,
        require:true
    },
    TSchool:{
        type:String,
        require:true
    },
    TPassword:{
        type:String,
        require:true
    },
    TPhone:{
        type:String,
        require:true
    },
    TEmail:{
        type:String,
        require:true
    },
    TWork:{
        type:String
    },
    TLogin:{
        type:Number
    }

})
var Tearch = mongoose.model('Tearchs',WorkSchema)
module.exports = Tearch