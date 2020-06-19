// 登录注册
const express = require('express');
const router = express.Router();
var Path = require('path');
var  Formidable = require("formidable");
var FS = require('fs');
//post引入创建的数据库模板
var User = require("../models/Users")
//get请求 请求地址就是http://localhost:3000/test
//返回的是请求的json数据
router.get("/test",(req,res) =>{
    res.json({msg:"login works"})
})

//post请求来写注册接口
router.post("/register",(req,res)=>{
    console.log(req.body)
    User.findOne({"userName":req.body.userName})  //查询数据库中的用户名，user就是返回的数据
   .then(user=>{
    // console.log(user+"打印的user")
       if(user){
           return res.json({
               code:1,
               data:'该用户名已经被注册'
           })

       }else{
           var NewUser =  User({
               userName:req.body.userName,
               Age:req.body.Age,
               Sex:req.body.Sex,
               Password:req.body.Password,
               Phone:req.body.Phone,
               Email:req.body.Email
           })
           NewUser.save().then(user => res.json(user))
           .catch(err => console.log(err))
       }
   })
   
})
router.get('/getUser',function(req,res){
    User.find()
    .then(user=>{
        return res.status(200).json(user)
    })
})
//根据用户名查找
router.post('/getUserwork',function(req,res){
    User.findOne({"userName":req.body.userName})
    .then(user=>{
        return res.status(200).json(user)
    })
})
router.get('/getLogin',function(req,res){
    User.findOne({"Login":1})
    .then(user=>{
        return res.status(200).json(user)
    })
})

router.get('/getAccount',(req,res) => {
    // 通过模型去查找数据库
   User.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
//修改密码
router.post("/updatepassword",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    Password = req.body.Password;
    const updateStr = {
        Password: Password
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    User.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
    

})
//修改电话
router.post("/updatePhone",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    Phone = req.body.Phone;
    const updateStr = {
        Phone: Phone
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    User.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
    

})
//修改邮箱
router.post("/updateEmail",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    Email = req.body.Email;
    const updateStr = {
        Email: Email
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    User.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
    

})
//修改登录状态
router.post("/updateLogin",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
    Login = req.body.Login;
    const updateStr = {
        Login: Login
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    User.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })
})

module.exports = router