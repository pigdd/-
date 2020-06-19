<template>
    <div class="teacher">
        <div class="publish">
            <p>发布作业</p>
            <div class="publishwork">
                <van-field v-model="message" rows="1" autosize label="作业"  type="textarea" placeholder="请输入作业"/>
                <van-button icon="edit" type="primary" plain hairline @click="publishWork()">发布</van-button>
            </div>
        </div>
        <div class="workshow">
            <p>查看学生作业</p>
            <van-search v-model="value" placeholder="请输入学生姓名"  @search="onSearch"/>
            <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="mini" @click="change()">显示</van-button>
            <div class="studentwork" v-show="seen">
                <div v-for="(item, index) in StudentWork">
                <img :src="StudentWork[index].WorkImg" alt="">
                </div>
                <div v-for="(item, index) in StudentWork2">
                     <a :href="StudentWork2[index]" target="blank"><p>{{(StudentWork2[index]).substring(29)}}</p></a>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
   
    data() {
        return {
            message:'',
            arrteacher : [],
            value:'',
            arrwork:[],
            StudentWork:[],
            StudentWork2:[],
            StudentWork3:[],
            seen:false,
        }
    },
    methods: {
     getTearchLogin(){
       this.$ajax
        .get("/routes/teacher/getT")
        .then(response =>{
          console.log(response)
          this.arrteacher = response.data
          console.log( "教师的登录状态"+this.arrteacher.TLogin)
        })
        .catch(err => {
          console.log(err)
        })
    },
    publishWork(){
        const b = this.arrteacher.TLogin;
        if(b == 1 && this.message != ''){
             alert('发布成功')
             const obj = {
             id:this.arrteacher._id,
             TWork:this.message
           };
           return this.$ajax.post("/routes/teacher/updateTwork",obj)
           .then((res) => {
             if(res.ok){
              console.log("成")   
             }else{
             this.message = ''
              console.log("失败")
}
              })
              alert('发布成功')

        }else{
            alert('发布作业不能为空')
        }
    },
        getStudentWork(){
       this.$ajax
        .get('/routes/work/getWorks')
        .then(response =>{
          console.log(response)
          this.arrwork = response.data
          console.log(this.arrwork.length)
        
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSearch(){
          for(var i = 0; i < this.arrwork.length;i++){
              if(this.value == this.arrwork[i].WorkName && this.arrteacher.TName == this.arrwork[i].TeacherName){
                  console.log(this.arrwork[i])
                  if((this.arrwork[i].WorkImg).indexOf(".txt") != -1 ||(this.arrwork[i].WorkImg).indexOf(".doc") != -1 ){
                      this.StudentWork2.push(this.arrwork[i].WorkImg)
                  }else{
                      this.StudentWork.push(this.arrwork[i])
                  }
                  
              }
          }
          console.log("学生" + this.StudentWork[0].WorkImg)
    },
    change(){
        this.seen = !this.seen;
    },
    },
    mounted() {
          this.getTearchLogin(),
          this.getStudentWork()
      },
}
</script>

<style scoped>
a{
    text-decoration: none;
    color:black;
}
    .teacher{
        width:95vw;
        height:90vh;
        /* border:1px solid black; */
        position: relative;
        left:2.5vw;
        top:0.5vh;
    }
    .teacher .publish{
        width:100%;
        height:35%;
        border-bottom: black;
        box-shadow: 1px 2px 3px rgb(236, 234, 236);
        overflow: hidden;
        overflow-y: scroll
    }
    .teacher .workshow{
        width:100%;
        height:63%;
        position: relative;
        top:10px;
        /* border:1px solid blue; */
        overflow: hidden;
        overflow-y: scroll;
    }
   .teacher .workshow .studentwork{
       width:98%;
       height:80%;
       /* border:1px solid red; */
   }
   .teacher .workshow .studentwork div:nth-of-type(1){
       overflow: hidden;
       overflow-y: scroll
   }
    .teacher .workshow .studentwork img{
        width:330px;
        height:100px;
        margin: 5px 10px;
    }
     .teacher .workshow .van-button{
         position: absolute;
         top:68px;
         right:23px;
     }
   .teacher .workshow .van-search{
       width:280px;
   }
     .teacher .publish .publishwork{
         width:100%;
         height:50%;
         /* border:1px solid black; */
         position: relative;

     }
     .teacher .publish p{
         font-size:17px;
         font-weight: bold
     }
     .teacher .publish .publishwork .van-button{
         position:relative;
         right:-274px;
         top:17px;
     }
</style>