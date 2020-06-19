<template>
    <div class="helloworld">
        <div class="title">
            <p>如何上课</p>
            <img src="../assets/学习.png" alt="">
        </div>
        <div class="tip">
            <div class="tip1">
                第1步
            </div>
            <div class="tip2">
                第2步
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .title{
       width:98vw;
       height: 20vh;
       /* border:1px solid black; */
       position: relative;
       top:10px;
       left:3px;
       background-color: rgb(248, 244, 250)
   } 
   .title p{
        background: linear-gradient(to right,rgb(212, 85, 85), rgb(29, 189, 162));
        -webkit-background-clip: text;
        color: transparent;
        font-size: 45px;
        position: absolute;
        top:-5px;
   }
   .title img{
       width:24%;
       height:61%;
       position: absolute;
       right:10%;
       bottom:20%;
   }
</style>