<template>
    <div class="teacherwork">
        <p class="title">我的作业</p>
        <div class="show">
            <p>共收到{{studentWork.length + studentWork2.length}}份作业</p>
            <div class="showwork">
                <div v-for="(item, index) in studentWork" >
                    <p>{{studentWork[index].WorkName}}</p>
                    <img :src="studentWork[index].WorkImg" alt="">
                </div>
                 <div v-for="(item, index) in studentWork2">
                     <p>{{studentWork2[index].WorkName}}</p>
                     <a :href="studentWork2[index].WorkImg" target="blank"><p>{{(studentWork2[index].WorkImg).substring(29)}}</p></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arrteacher:[],
            arrwork:[],
            studentWork:[],
            studentWork2:[]
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
    getStudentWork(){
       this.$ajax
        .get('/routes/work/getWorks')
        .then(response =>{
          console.log(response)
          this.arrwork = response.data
          console.log(this.arrwork.length)
          for(var i = 0; i < this.arrwork.length; i++){
            if(this.arrwork[i].TeacherName == this.arrteacher.TName){
                console.log("使用" + i)
                if((this.arrwork[i].WorkImg).indexOf(".txt") != -1 || (this.arrwork[i].WorkImg).indexOf(".doc") != -1  ){
                    this.studentWork2.push(this.arrwork[i])
                }
                else{
                    this.studentWork.push(this.arrwork[i])
                }
                
            }
        }
        })
        .catch(err => {
          console.log(err)
        })
        
    },
    },
    mounted() {
        this.getTearchLogin(),
         this.getStudentWork()
    },
}
</script>
<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color:black;
    }
    .teacherwork{
        width:97vw;
        height:89vh;
        /* border:1px solid black; */
        margin:0 1.2vw;
        position: relative;
    }
    .teacherwork .title{
        font-size: 18px;
        position: absolute;
        top:7px;
        left:41vw;
    }
     .teacherwork .show{
         width:100%;
         height:93%;
         position: absolute;
         top:36px;
         /* border:1px solid red; */
     }
      .teacherwork .showwork{
          width:100%;
          height:93%;
          /* border:1px solid blueviolet; */
          position: absolute;
          top:35px;
          overflow: hidden;
          overflow-y: scroll;
      }
      .teacherwork .showwork div{
          width:98%;
          height:20%;
          border:1px solid rgb(228, 224, 224);
          box-shadow: 2px 2px 3px rgb(228, 224, 224);
          margin:5px 0;
      }
       .teacherwork .showwork div img{
           width:288px;
           height:80px;
           margin:0 35px;
       }
</style>