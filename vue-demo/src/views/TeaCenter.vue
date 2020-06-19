<template>
    <div class="teacenter">
        <p>个人中心</p>
        <div class="updateinf">
             <van-collapse v-model="activeNames">
                    <van-collapse-item title="修改密码" name="1">               
                         <van-field v-model="password" type="password"  name="密码" label="密码"  placeholder="请输入新的密码" :rules="[{ required: true, message: '请填写密码' }]" />
                         <van-field v-model="password2" type="password"  name="密码" label="密码"  placeholder="请再次输入新的密码" :rules="[{ required: true, message: '请填写密码' }]" />
                         <van-button type="default" plain @click="updatepassword()">确认修改</van-button>
                    </van-collapse-item>
                    <van-collapse-item title="修改手机" name="2">
                        <van-field v-model="phone" required label="手机号" placeholder="请输入新的手机号" /> 
                        <van-button type="default" plain @click="updatephone()">确认修改</van-button>
                    </van-collapse-item>
                    <van-collapse-item title="修改邮箱" name="3" >
                        <van-field v-model="email" required label="邮箱" placeholder="请输入新的邮箱" /> 
                        <van-button type="default" plain @click="updateEmail()">确认修改</van-button>
                    </van-collapse-item>
                    <van-collapse-item title="退出登录" name="4" >
                        <van-button type="default" plain @click="logout()">
                          退出登录
                        </van-button>
                         <a href="http://localhost:8080" >重新登录</a>
                    </van-collapse-item>
                </van-collapse>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            arruser:[],
            show:false,
            username: '',
            password: '',
            password2:'',
            phone:'',
            email:'',
           activeNames:[]
        }
    },
    methods: {
        showPopup() {
      this.show = true;
    },
    //更新密码
   updatepassword(){
       if(this.password != this.password2){
           alert("两次输入的密码不相同！")
           this.password = "";
           this.password2 = ""
       }else{
           const obj = {
             id:this.arruser._id,
             TPassword : this.password
           };
           return this.$ajax.post("/routes/teacher/updateTeacherpassword",obj)
           .then((res) => {
             if(res.ok){
              console.log("更新失败")              
             }else{
              alert("更新成功")
              this.password = '';
              this.password2 = ''
                }   
               })
               }     
     },
    updatephone(){
          if(!(/^1[3456789]\d{9}$/.test(this.phone))){ 
        alert("手机号码有误，请重填");  
        this.phone=''
    } else{
         const obj = {
             id:this.arruser._id,
             TPhone : this.phone
           };
           return this.$ajax.post("/routes/teacher/updateTeacherPhone",obj)
           .then((res) => {
             if(res.ok){
              console.log("更新失败")              
             }else{
              alert("更新成功")
              this.phone = ''
                }   
               })  
    }
             
    },
    //修改邮箱
    updateEmail(){
       if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.email))){ 
        alert("邮箱格式有误，请重写填写");  
        this.email = "";
    } else{
         const obj = {
             id:this.arruser._id,
             TEmail : this.email
           };
           return this.$ajax.post("/routes/teacher/updateTeacherEmail",obj)
           .then((res) => {
             if(res.ok){
              console.log("更新失败")              
             }else{
              alert("更新成功")
              this.email = ''
                }   
               })  
    }
             
    },
    //获取正在登陆的人的id
     getUserLogin(){
       this.$ajax
        .get("/routes/teacher/getT")
        .then(response =>{
          console.log(response)
          this.arruser = response.data
          console.log( "现在正在登陆的人是"+this.arruser._id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //退出登录
    logout(){
       const obj = {
             id:this.arruser._id,
             TLogin : 0
           };
           return this.$ajax.post("/routes/teacher/updateTeacherLogin",obj)
           .then((res) => {
             if(res.ok){
              console.log("失败")              
             }else{
             alert("退出登录")
                }   
               })     
    },
    },
    
 mounted() {
    this.getUserLogin()
   
  },
}
</script>
<style scoped>
a{
  text-decoration: none;
  color:black;
}
    .teacenter{
        width:98vw;
        height:80vh;
        /* border:1px solid black; */
        margin:0 0.5vw;
        position: relative;
    }
    .teacenter p{
        position: absolute;
        left:41vw;
        top:-15px;
        font-size: 18px;
    }
    .teacenter .van-collapse{
        position: absolute;
        top:50px;
        width:98%;
    }
   /* .mycenter .van-collapse .van-button{
       position: absolute;
       right:15px;
       width:100px;
       height:80px;
   } */
</style>