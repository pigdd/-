<template>
    <div class="mywork">
        <p class="one_p" @click="showwork()" >我的作业</p>
        <div class="showwork">
           <div class="show" v-for="(item, index) in arrwork">
              <img :src="arrwork[index]" alt=""> 
             
           </div> 
           <div class="word" v-for="(item, index) in arrwork2">
             <a :href="arrwork2[index]" target="blank"><p>{{arrwork2[index].substring(29)}}</p></a>
           </div>
          
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arrworkList:[],
            arrwork:[],
            seen:false,
            arrwork2:[],
        }
    },
    methods: {
     getworkList(){
       this.$ajax
        .get('/routes/work/getWorks')
        .then(response =>{
          console.log(response)
          this.arrworkList = response.data
          console.log(this.arrworkList.length)
        })
        .catch(err => {
          console.log(err)
        })
    },
    showwork(){
       this.seen = !this.seen
      for(var i = 0;i < this.arrworkList.length;i++){
          if(this.arrworkList[i].WorkName == "小乖乖"){
            if((this.arrworkList[i].WorkImg).indexOf(".txt") != -1 || (this.arrworkList[i].WorkImg).indexOf(".doc") != -1){
              this.arrwork2.push(this.arrworkList[i].WorkImg)
            }else{
               console.log(i)
            this.arrwork.push(this.arrworkList[i].WorkImg)
            }
           
          }
          
        }
       
    }
    },
    mounted() {
       this.getworkList()
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
    .mywork{
      position: relative;
    }
    .mywork .one_p{
      font-size:17px;
      position: absolute;
      top:7px;
      left:41vw;
    }
    .showwork{
      position: absolute;
      width:98vw;
      height:81vh;
      /* border:1px solid black; */
      margin:0 0.6vw;
      top:38px;
      overflow: hidden;
      overflow-y: scroll
    }
    .showwork .show{
      width:98%;
      height:30%;
      border:1px solid rgb(223, 221, 221);
      box-shadow: 2px 3px 2px rgb(223, 221, 221)
    }
    .showwork .show img{
      width:98%;
      height:100%;
      margin:1px;
    }
    /* .show p{
      position: relative;
      margin:1px 2px;
      top:450px;
    } */

</style>