// 登录注册
const express = require('express');
const router = express.Router();
//post引入创建的数据库模板
var Teacher = require("../models/Teacher")
//get请求 请求地址就是http://localhost:3000/test
//返回的是请求的json数据

//post请求来写注册接口
router.post("/registerteacher",(req,res)=>{
    console.log(req.body)
    Teacher.findOne({"TName":req.body.TName})  //查询数据库中的用户名，user就是返回的数据
   .then(user=>{
    // console.log(user+"打印的user")
       if(user){
           return res.json({
               code:1,
               data:'该用户名已经被注册'
           })

       }else{
           var NewTeacher =  Teacher({
               TName:req.body.TName,
               TClass:req.body.TClass,
               TSchool:req.body.TSchool,
               TPassword:req.body.TPassword,
               TPhone:req.body.TPhone,
               TEmail:req.body.TEmail
           })
           NewTeacher.save().then(user => res.json(user))
           .catch(err => console.log(err))
       }
   })
   
})
// 查询登录状态的接口

router.get('/getT',function(req,res){
    Teacher.findOne({"TLogin":1})
    .then(user=>{
        return res.status(200).json(user)
    })
})
//更新作业的接口
router.post("/updateTwork",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    TWork = req.body.TWork;
    const updateStr = {
        TWork: TWork
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    Teacher.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })

})
   
//
router.get('/getTeacher',function(req,res){
    Teacher.find()
    .then(user=>{
        return res.status(200).json(user)
    })
})
// 更新老师作业的接口
router.post("/updateTwork",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    TWork = req.body.TWork;
    const updateStr = {
        TWork: TWork
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    Teacher.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })

})
//修改登录状态接口
router.post("/updateTeacherLogin",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    TLogin = req.body.TLogin;
    const updateStr = {
        TLogin: TLogin
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    Teacher.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
})
//修改密码
router.post("/updateTeacherpassword",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    TPassword = req.body.TPassword;
    const updateStr = {
        TPassword: TPassword
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    Teacher.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
})
//修改电话
router.post("/updateTeacherPhone",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    TPhone = req.body.TPhone;
    const updateStr = {
        TPhone: TPhone
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    Teacher.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
})
//修改邮箱
router.post("/updateTeacherEmail",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    TEmail = req.body.TEmail;
    const updateStr = {
        TEmail: TEmail
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    Teacher.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
})
module.exports = router