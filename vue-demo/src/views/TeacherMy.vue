<template>
  <div class="teachermy">

    <!-- 登录头像 -->
    <div class="loginback">
        <div class="avavant">
          <!-- <img src="../assets/娃娃头雪糕.png" alt=""> -->
        </div>
    </div>
    <div class="tubiao">
      <ul>
        <li>
          <img src="../assets/记录.png" alt="">
          <p>上课记录</p>
        </li>
        <li>
          <img src="../assets/报告.png" alt="">
          <p>学习报告</p>
        </li>
        <li>
          <img src="../assets/计划.png" alt="">
          <p>学习计划</p>
        </li>
      </ul>
    </div>
     <div class="information">
          <ul>
            <li>   
              <img src="../assets/作业.png" alt=""> 
             <router-link to="/teacherwork"><p>我的作业</p></router-link>
              <van-icon name="arrow" />
            </li>
            <li>       
              <img src="../assets/图书(1).png" alt="">
              <p>我的图书</p>
               <van-icon name="arrow" />
            </li>
            <li>    
              <img src="../assets/视频(1).png" alt="">
              <p>我的视频</p>
              <van-icon name="arrow" />
            </li>
            <li>    
              <img src="../assets/我的.png" alt=""> 
              <router-link to="/teacenter"><p>个人中心</p></router-link>
               <van-icon name="arrow" />
            </li>
          </ul>
      </div>
     
  </div>
</template>
<script>
import TeacherWork from "../components/TeacherWork"
export default {
  name:'teachermy',
  components: {
   TeacherWork,
  },
  data() {
    return {
      userData:[]
    }
  },
  methods: {
    
  },
  mounted() {
    
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
.teachermy{
  width: 98vw;
  height:90vh;
  /* border:1px solid black; */
  
}
.loginback{
  width:102%;
  height:35%;
  background-image: url('../assets/userbg.png');
  background-size: cover
}
.loginback .avavant{
  width:100px;
  height:100px;
  /* border:1px solid black; */
  position: relative;
  left:131px;
  top:56px;
  border-radius: 50%;
  background-image: url("../assets/teacher.jpg");
  background-size: cover
}
.tubiao{
  width:100%;
  height:20%;
  margin:10px 0;

}
.tubiao ul{
  display: flex;
  justify-content: space-evenly;
}
.tubiao ul li{
 display: flex;
 flex-direction: column;
 
}
.tubiao ul li img{
 width:64px;
 height:61px;
}
.tubiao ul li p{
  position: relative;
  top:8px;
}
.information{
  width:365px;
  height:249px;
  /* border:1px solid black; */
}
 .information ul{
  display: flex;
  flex-direction:column;
  width:100%;
  height:100%;
  position: relative;
  top:-3px;
  /* border:1px solid red; */

}
.information ul li{
  width:102%;
  height:18%;
  border-bottom:1px solid rgb(202, 200, 200);
  position:relative
}
.information ul li:nth-of-type(1){
  border-top:1px solid rgb(202, 200, 200);
}
.information ul li p{
  position: absolute;
  left:58px;
  top:10px;
}
.information ul li img{
  width:42px;
  height:37px;
}
.information ul li .van-icon{
  position:relative;
  top:-7px;
  right:-300px;
} 
</style>
