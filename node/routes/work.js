// 登录注册
const express = require('express');
const router = express.Router();
//post引入创建的数据库模板
var Work = require("../models/Work")
//get请求 请求地址就是http://localhost:3000/test
//返回的是请求的json数据
router.get("/test",(req,res) =>{
    res.json({msg:"login works"})
})

//post请求来写注册接口
router.post("/addwork",(req,res)=>{
    console.log(req.body)
    var NewWork =  Work({
        WorkName:req.body.WorkName,
        WorkImg:req.body.WorkImg,
        TeacherName:req.body.TeacherName,
    })
    NewWork.save().then(user => res.json(user))
    .catch(err => console.log(err))
   
})
router.get('/getWorks',function(req,res){
    Work.find()
    .then(user=>{
        return res.status(200).json(user)
    })
})
//根据用户名查找
router.get('/getwork',function(req,res){
    Work.find({"WorkName":req.query.WorkName})
    .then(user=>{
        return res.status(200).json(user)
    })
})






module.exports = router