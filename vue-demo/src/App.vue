<template>
<div>
  <!-- 登录界面 -->
 <div class="login" v-show="seen2">
   <p @click="change()"></p>
    <div class="RaL">
      <div class="RaL-login">
      <van-field v-model="text" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"  />
      <p class="p1" @click="login()">登录</p>
      <p class="p3" @click="loginteacher()">教师登录</p>
      <p class="p2">
        <van-cell is-link @click="showPopup">还未注册</van-cell>
        <van-popup v-model="show">
          <div class="regist">
            <van-tabs v-model="active">
             <van-tab title="我是学生">
               <van-field v-model="userName" label="用户名" placeholder="请输入用户名"/>
               <van-field v-model="Password" type="password" label="密码" placeholder="请输入密码"  />
                <van-field v-model="Password2" type="password" label="确认密码" placeholder="请确认密码" />
               <van-field v-model="Sex" label="性别" placeholder="请输入性别"/>
               <van-field v-model="Age" type="number" label="年龄" placeholder="请输入年龄"/>
               <van-field v-model="Phone" type="tel" label="手机号" placeholder="请输入手机号"/>
               <van-field v-model="Email" type="text" label="邮箱" placeholder="请输入邮箱"/>
               <van-button type="primary" @click="createUser()">注册</van-button>
             </van-tab>
            <van-tab title="我是教师">
                <van-field v-model="TName" label="用户名" placeholder="请输入用户名"/>
               <van-field v-model="TPassword" type="password" label="密码" placeholder="请输入密码"/>
                <van-field v-model="TPassword2" type="password" label="确认密码" placeholder="请确认密码" />
              <van-field v-model="TSchool" label="学校" placeholder="请输入学校"/>
              <van-field v-model="TClass" label="科目" placeholder="请输入科目"/>
               <van-field v-model="TPhone" type="tel" label="手机号" placeholder="请输入手机号"/>
               <van-field v-model="TEmail" type="text" label="邮箱" placeholder="请输入邮箱"/>
               <van-button type="primary" @click="createTeacher()">注册</van-button> 
            </van-tab>
            </van-tabs>
          </div>
        </van-popup>
      </p>
      </div>
    </div>
 </div>
 <!-- 学生界面 -->
  <div id="app" v-show="seen"> 
    <div id="nav" >
      <router-link to="/">

        <van-icon v-if="this.$route.path == '/'" name="wap-home-o" size='30' color="#C63300 " />
        <van-icon v-else name="wap-home-o" size='30' color="#000000" />
        <p v-if="this.$route.path == '/'" style="color:#C63300 ">首页</p>
         <p v-else style="color : black ">首页</p>
      </router-link>
      <router-link to="/work">
        <van-icon  v-if="this.$route.path == '/work'" name='records' size='30' color="#C63300 "/>
        <van-icon v-else name="records" size='30' color="#000000" />
        <p v-if="this.$route.path == '/work'" style="color:#C63300 ">课业</p>
         <p v-else style="color : black ">课业</p>
      </router-link>
      <router-link to="/about">
        <van-icon v-if="this.$route.path == '/about'" name="user-o" size='30' color="#C63300 "/>
         <van-icon v-else name="user-o" size='30' color="#000000" />
        <p v-if="this.$route.path == '/about'" style="color:#C63300 ">我的</p>
         <p v-else style="color : black ">我的</p>
      </router-link>
    </div>
    <router-view/>
   
  </div>

  <!-- 教师界面 -->
  <div id="app2" v-show="seenteacher"> 
    <div id="nav2" >
      <router-link to="/">

        <van-icon v-if="this.$route.path == '/'" name="wap-home-o" size='30' color="#C63300 " />
        <van-icon v-else name="wap-home-o" size='30' color="#000000" />
        <p v-if="this.$route.path == '/'" style="color:#C63300 ">首页</p>
         <p v-else style="color : black ">首页</p>
      </router-link>
      <router-link to="/teacher">
        <van-icon  v-if="this.$route.path == '/teacher'" name='description' size='30' color="#C63300 "/>
        <van-icon v-else name="description" size='30' color="#000000" />
        <p v-if="this.$route.path == '/teacher'" style="color:#C63300 ">教师</p>
         <p v-else style="color : black ">教师</p>
      </router-link>
      <router-link to="/teachermy">
        <van-icon v-if="this.$route.path == '/teachermy'" name="user-o" size='30' color="#C63300 "/>
         <van-icon v-else name="user-o" size='30' color="#000000" />
        <p v-if="this.$route.path == '/teachermy'" style="color:#C63300 ">我的</p>
         <p v-else style="color : black ">我的</p>
      </router-link>
    </div>
    <router-view/>
   
  </div>
  <!-- <Login v-bind:rvalue="text"></Login> -->
  </div>
  
</template> 
  
<script>
import Login from './components/Login'
export default {
  components: {
      Login
    },
  data() {
    return {
      seen5:false,
      seen:false,
      seen2:true,
      seen3:true,
      seenteacher:false,
      text: '',
      password: '',
      arrUser:[],
      arrTeacher:[],
      show: false,
      userName:'',
      Password:'',
      Phone:'',
      Sex:'',
      Email:'',
      Age:'',
      TName:'',
      TPassword:'',
      TPassword2:'',
      TSchool:'',
      TClass:'',
      TPhone:'',
      TEmail:'',
      active: 2
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    change(){
      this.seen = true,
      this.seen2 = false
      console.log("又被点击到" +this.seen)
    },
    getUser(){
       this.$ajax
        .get("/routes/user/getUser")
        .then(response =>{
          console.log(response)
          this.arrUser = response.data
          console.log(this.arrUser)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getTeacher(){
       this.$ajax
        .get("/routes/teacher/getTeacher")
        .then(response =>{
          console.log(response)
          this.arrTeacher = response.data
          console.log("教师" + this.arrTeacher)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login(){
      console.log(this.text + this.password)
      for(var i = 0; i < 20;i++){
        if(this.text == this.arrUser[i].userName){
          if(this.password == this.arrUser[i].Password){
              this.seen = true;
          this.seen2 = false;
           const obj = {
             id:this.arrUser[i]._id,
             Login : 1
           };
           return this.$ajax.post("/routes/user/updateLogin",obj)
           .then((res) => {
             if(res.ok){
              console.log("失败")              
             }else{
            console.log("success")
                }   
               })     
         console.log("登陆成功"+this.seen)
          }else{
            alert("用户名或密码错误，请重新登录")
          }
         
        }else{
         console.log("登陆失败")
        // alert("登录失败")
        }
      }
    },
    loginteacher(){
      for(var i = 0; i < 20;i++){
        // console.log("用户名"+this.arrUser[i].userName)
        if(this.text == this.arrTeacher[i].TName ){
          if(this.password == this.arrTeacher[i].TPassword){
             this.seenteacher = true;
          this.seen2 = false;
           const obj = {
             id:this.arrTeacher[i]._id,
             TLogin : 1
           };
           return this.$ajax.post("/routes/teacher/updateTeacherLogin",obj)
           .then((res) => {
             if(res.ok){
              console.log("失败")              
             }else{
            console.log("success")
                }   
               })     
          console.log("登陆成功"+this.seen)
          }else{
            alert('用户名或者密码错误！')
          }
         
          
        }else{
         console.log("登陆失败")
        }
      }
    },
    createUser(){
       if(this.Password != this.Password2){
        alert('两次输入的密码不正确，请重新输入')
      }
      else if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.Email))){ 
        alert("邮箱格式有误，请重新填写");
      }
      else if(!(/^1[3456789]\d{9}$/.test(this.Phone))){ 
        alert("手机号码有误，请重填");  
    } else{
       const params = { 
              userName : this.userName,
              Password : this.Password,
              Age : this.Age,
              Sex: this.Sex,
              Phone : this.Phone,
              Email : this.Email
        };
           this.$ajax.post("/routes/user/register",params)
           .then((res) => {
             console.log(res.data.code)
             if(res.data.code == 1){
              alert("该用户名已经被注册")
              this.userName = '';
               this.Password = '' ;
               this.Age = '';
               this.Sex = '';
               this.Phone = '';
               this.Email = '';
               this.Password2 = ''
             }else{
              this.show = !this.show
              alert("注册成功")
                 this.userName = '';
               this.Password = '' ;
               this.Age = '';
               this.Sex = '';
               this.Phone = '';
               this.Email = '';
               this.Password2 = ''
              }  
               })
              .catch(err => {console.log(err)})
        }
    },
    createTeacher(){
       if(this.TPassword != this.TPassword2){
        alert('两次输入的密码不正确，请重新输入')
      }
      else if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.TEmail))){ 
        alert("邮箱格式有误，请重新填写");
      }
      else if(!(/^1[3456789]\d{9}$/.test(this.TPhone))){ 
        alert("手机号码有误，请重填");  
    }else{
       const params2 = { 
              TName : this.TName,
              TPassword : this.TPassword,
              TSchool : this.TSchool,
              TClass: this.TClass,
              TPhone : this.TPhone,
              TEmail : this.TEmail
        };
           this.$ajax.post("/routes/teacher/registerteacher",params2)
           .then((res) => {
             console.log(res.data.code)
             if(res.data.code == 1){
              alert("该教师用户名已经被注册")
               this.TName= '';
               this.TPassword = '' ;
               this.TPassword2 = '';
               this.TSchool = '';
               this.TPhone = '';
               this.TEmail = '';
               this.TClass = ''    
             }else{
              this.show = !this.show
              alert("注册成功")
              this.TName= '';
               this.TPassword = '' ;
               this.TPassword2 = '';
               this.TSchool = '';
               this.TPhone = '';
               this.TEmail = '';
               this.TClass = ''
              }  
               })
              .catch(err => {console.log(err)})
    }
    },
    geshi(){
      if(this.Password != this.Password2 || this.TPassword != this.TPassword2){
        alert('两次输入的密码不正确，请重新输入')
      }
      if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.Email))){ 
        alert("邮箱格式有误，请重写填写");
      }
    }
  },
  mounted() {
    this.getUser();
    this.getTeacher();
 
  },
}
</script>

<style scoped>
   *{
  padding: 0;
  margin:0;
  }
  #nav,
  #nav2{
    position: fixed;
    bottom: 0px;
    width: 98vw;
    display: flex;
    justify-content: space-around;
    z-index: 555;
    background-color: rgb(253, 252, 250);
  }
  #nav a,
  #nav2 a{
    text-decoration: none;
  }
  #nav p,
  #nav2 p{
    font-size: 15px;
    /* color:black; */
  }
  .login{
    width:99vw;
    height:99vh;
    /* border:1px solid black; */
    background-image: url("../src/assets/背景图片3.jpg")
  }
  .login .RaL{
    width:80%;
    height:60%;
    /* background-color: rgba(215, 226, 215, 0.1); */
    /* border:1px solid black */
    position: relative;
    left:39px;
    top:52px;
  }
  
  .login .RaL .RaL-login{
    position:absolute;
    border:1px solid rgb(215,226,215);
    top:20%;
    width:98%;
    height: 40%;
     background-color: rgba(215, 226, 215, 0.4);
  }
  .van-cell{
     background-color: rgba(215, 226, 215, 0.3);
  }
   .login .RaL .RaL-login .p1{
     position: relative;
     left:20px;
     top:25px;
     font-size: 19px;
     color: rgb(20, 20, 20)
   }
   .login .RaL .RaL-login .p3{
     position: relative;
     left:100px;
     font-size: 19px;
     color: rgb(20, 20, 20)
   }
    .login .RaL .RaL-login .p2 .van-cell{
      position: relative;
      left:195px;
      top:-32px;
      font-size: 15px;
     color: rgb(20, 20 ,20 	)
    }
    .login .RaL .RaL-login .p2 .van-popup{
      width:370px;
      height:400px;
      border:1px solid black;
      position: relative;
      left:147px;
      top:-76px;
      background-color:rgba(215, 226, 215);
    }
    .login .RaL .RaL-login .p2 .regist .van-button{
      position:relative;
      left:300px;
      background-color: rgb(150, 146, 146);
      border-color: white;
      
    }
  .login .RaL .RaL-login .p2  .van-field{
    position:relative;
    left:0px;
    top:6px;
  }
</style>
