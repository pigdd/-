<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../assets/swiper1.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/swiper2.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/swiper3.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/swiper4.jpg" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 导航栏 -->
    <div class="midnav">
        <div class="mid1" >
          <router-link to="/helloworld"><p>如何选课</p></router-link>
          <img src="../assets/课程1.png" alt="">
        </div> 
        <div class="mid2">
         <p>添加班主任</p>
          <img src="../assets/班主任.png" alt="">
        </div>
    </div>
    <!-- 抽奖 -->
    <div class="choujiang" ref="hello" @click="get"> 
      <img src="../assets/抽奖.jpg" alt="">
    </div>
    <!-- 课程 -->
    <div class="course">
        <!-- 学科课程 -->
        <!-- 选择年级 -->
       <van-tabs v-model="active"class="bvchice">
        <van-tab title="图书" >
          <div class="bookshow" v-for="(item, index) in arrBook">
            <img :src="arrBook[index].BookImg" alt="">
            <p>{{arrBook[index].BookName}}
              <van-icon name="plus" @click="add(index)"/>
              </p>
          </div>
        </van-tab>
        <van-tab title="课程">
          <div class="videoshow" v-for="(item, index) in arrVideo">
            <img :src="arrVideo[index].VideoImg" alt="">
            <p>{{arrVideo[index].VideoName}}
              <van-icon name="plus"  @click="addv(index)"/>
              
              <br>
              </p>
              <router-link to="/video"><h5>查看详情</h5></router-link>
            
          </div>
        </van-tab>
       
      </van-tabs>
        <!-- <img :src="arrBook[0].BookImg" alt=""> -->
        <!-- {{arrBook[0].BookName}}   一年级语文
        {{arrBook[1].BookName}}   一年级数学 -->
        <!-- {{arrBook[0].BookName}} -->
        <!-- 尝试 -->
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import Video from "../components/Video"
export default {
  name: "home",
  components: {
    HelloWorld,
    Video 
  },
   data() {
    return {
      show: false,
      arrBook:[],
      arrVideo:[],
      active: 2,
      arrVideo2:0,
      BNum:"",
      update:{
        BNum :''
      },
      _id:'',
      _id2:'',
      VNum:'',
      update2:{
        VNum : ''
      }

    }
  },

  methods: {
    showPopup() {
      this.show = true;
    },
     getBook(){
        this.$ajax
        .get("routes/book/getBook")
        .then(response =>{
          // console.log(response)
          this.arrBook = response.data
        })
        .catch(err => {
          console.log(err)
        })
      },
      getVideo(){
         this.$ajax
        .get("/routes/video/getVideo")
        .then(response =>{
          console.log(response)
          this.arrVideo = response.data
          this.arrVideo2 = response.data.VideoName
          console.log("尝试"+this.arrVideo2)
        })
        .catch(err => {
          console.log(err)
        })
      },
     get(){
        console.log(this.$refs.hello.innerHTML)
      },
     add(index){
        let a
        a = ++this.arrBook[index].BNum ;
       if(a > 1){
         alert("您已经添加了该图书了哦！")
          //  const id = this._id,
          //  BNum = a
           const obj = {
             id:this.arrBook[index]._id,
             BNum:a

           };
           return this.$ajax.post("/routes/book/updateBook",obj)
           .then((res) => {
             if(res.ok){
              console.log("成")
               
             }else{
              console.log("失败")
}
    
               })
       
     }
     },
     addv(index){
       let b
        b = ++this.arrVideo[index].VNum ;
       if(b > 1){
         alert("您已经添加了该课程了哦！")
         const obj = {
             id:this.arrVideo[index]._id,
             VNum:b

           };
           return this.$ajax.post("/routes/video/updateVideo",obj)
           .then((res) => {
             if(res.ok){
              console.log("成")
               
             }else{
              console.log("失败")
}
    
               })
       }
     }
 },
 
 mounted() {
    this.getBook(),
    this.getVideo()
  },
}

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color:black;
}
.home{
      position: relative;
      margin-bottom: 150px;
      /* overflow: hidden; */
    }

.swiper {
  width: 98vw;
  height: 25vh;
  /* border: 1px solid black; */
  margin-left:3px;
  margin-top:5px;
  box-shadow: 1px 2px 3px rgb(230, 230, 245);
}
.swiper img{
  width:100%;
  height:167px;
}
.midnav{
  width:98vw;
  height:8vh;
  /* border:1px solid black; */
  margin-top:4px;
  margin-left:3px;
}
.mid1,
.mid2{
  width:46%;
  height:100%;
  border-radius: 10%;
  position: relative;
  background-color:rgb(245, 245, 250)
}
.mid1{
  left:8px;
}
.mid2{
  position: relative;
  top:-100%;
  left:52%;
}
.mid1 p,
.mid2 p{
  position: absolute;
  left:10px;
  top:10px;
  font-size: 20px;
  
}
.mid1 img,
.mid2 img{
  width:45px;
  height:43px;
  position: absolute;
  right:5px;
  top:5px;
}
.choujiang{
  width:98vw;
  height:14vh;
  margin-top:5px;
  /* border:1px solid black; */
}
.choujiang img{
  width:102%;
  height:100%;
  position: relative;
  left:-4px;
}
.course{
  width:98vw;
  height:50vh;
  /* border:1px solid blue; */

}
.course .bvchice{
  width:100%;
  height:100%;
  /* border:1px solid black; */
}
.course .van-tab__pane{
  display:flex;
  overflow: hidden;
  overflow-y: scroll;
  /* width:100%;
  height:30vh;;
  border: 1px solid red; */
  width:100%;
  height:284px;
  /* border:1px solid orangered; */
   flex-flow: wrap;
}
.course .van-tab__pane .bookshow{
  width:45%;
  height:60%;
  margin: 5px 6px;
  border:1px solid rgb(225, 228, 226);
  box-shadow: 2px 2px 2px rgb(225, 228, 226);
  display: flex;
  flex-direction:column;
  position: relative;

}
.course .van-tab__pane .bookshow img{
  width:90%;
  height:80%;
}
.course .van-tab__pane .bookshow p{
  font-size: 14px;
  margin:5px 17px 3px;
}
.course .van-tab__pane .bookshow .van-icon{
  width:15px;
  height:25px;
  position: absolute;
  right:10px;
  bottom:2px;
}
.course .van-tab__pane .videoshow{
  width:90%;
  height:45%;
  margin: 7px 6px;
   border:1px solid rgb(225, 228, 226);
  box-shadow: 2px 2px 2px rgb(225, 228, 226);
  display: flex;
  flex-direction:row;
  position: relative;
}
.course .van-tab__pane .videoshow img{
  width:70%;
  height:90%;
}
.course .van-tab__pane .videoshow p{
  position: relative;
  font-size: 18px;
  top:25%
}
.course .van-tab__pane .videoshow h5{
  position: absolute;
  right:60px;
  bottom:25px;
}
</style>
