const express = require('express');
const router = express.Router();

var Video = require('../models/Video')
router.get("/testvideo",(req,res) =>{
    res.json({msg:"video数据库"})
})

router.post("/addvideo",(req,res)=>{
    console.log(req.body)
    Video.findOne({VideoName:req.body.VideoName})  //查询数据库中的视频名，user就是返回的数据
   .then(user=>{
       if(user){
           return res.json('数据库中已有该图书')
       }else{
           var NewVideo = new Video({
               VideoName:req.body.VideoName,
               VideoGrade:req.body.VideoGrade,
               VideoClass:req.body.VideoClass,
               VideoImg:req.body.VideoImg,
               VNum:req.body.VNUm
           })
           NewVideo.save()
           res.json(NewVideo)
       }
   })
   
})
router.get('/getVideo',function(req,res){
    Video.find()
    .then(user=>{
        return res.status(200).json(user)
    })
})

//更新数据的接口
router.post("/updateVideo",(req,res) =>{
    console.log(req.body)
    //需要更新的数据
    const id = req.body.id,
   VNum = req.body.VNum;
    const updateStr = {
       VNum:VNum
    };
    const ids = {
        _id : id
    };
    console.log(ids);
    Video.findByIdAndUpdate(ids,updateStr,(err,docs) => {
        if(err){
            res.send({'code':1,'errorMsg':'更新失败'});
        }else{
            res.send(docs)
        }
    })

})
module.exports = router