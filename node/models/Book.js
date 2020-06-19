//创建图书表
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//创建图书表Books
var WorkSchema = new Schema({
    BookName:{
        type:String,
        require:true
    },
    BookGrade:{
        type:String,
        require:true
    },
    BookClass:{
        type:String,
        require:true
    },
    BookImg:{
        type:String,
        require:true
    },
    BNum:{
        type:Number,
        require:true
    }

})
var Book = mongoose.model('Books',WorkSchema)
module.exports = Book