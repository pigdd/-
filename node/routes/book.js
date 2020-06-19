const express = require('express');
const router = express.Router();

var Book = require('../models/Book')
router.get("/testbook",(req,res) =>{
    res.json({msg:"book数据库"})
})
//添加图书的接口
router.post("/addbook",(req,res)=>{
    console.log(req.body)
    Book.findOne({BookName:req.body.BookName})  //查询数据库中的用户名，user就是返回的数据
   .then(user=>{
       if(user){
           return res.json('数据库中已有该图书')
       }else{
           var NewBook = new Book({
               BookName:req.body.BookName,
               BookGrade:req.body.BookGrade,
               BookClass:req.body.BookClass,
               BookImg:req.body.BookImg,
               BNum:req.body.BNum
           })
           NewBook.save()
           res.json(NewBook)
       }
   })
   
})
router.get('/getBook',function(req,res){
    Book.find()
    .then(user=>{
        return res.status(200).json(user)
    })
})

//更新数据的接口
router.post("/updateBook",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    BNum = req.body.BNum;
    const updateStr = {
        BNum: BNum
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    Book.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
    

})
module.exports = router