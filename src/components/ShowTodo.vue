<template>
  <div class="oneTask">
      <div class="box">
          <div @click=" $emit('active',false)" class="exit">X</div>
          <div class="title">comments ||{{ todos.name}}</div>
          <div class="flex">
              <div class="status">
              status: {{todos.status}}
          </div>
          <div class="prog" >
            progress:  {{progress[0]}}
          </div>
          <div class="person">
             <img :src="require(`@/assets/${ava}.png`) " alt="" v-for="(ava,index) of todos.person" :key="index">
          </div>
          </div>
          <input type="text" v-model="comment.person" placeholder="ism familiya">
          <input type="text" v-model="comment.feed" placeholder="nima masalada">
           <quill-editor
    v-model:value="comment.comment"
    
  />
  <div class="btn">submit</div>
      </div>
      
  </div>
</template>

<script>
import { quillEditor } from 'vue3-quill'

export default {
props:['todos'],

data(){
    return{
        progress:['pending','in_progress','cancelled','completed'],
        comment:{
            date:new Date()
        }
    }
},
components: {
    quillEditor
  }
}
</script>
<style>
@keyframe leaves {
        0% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
        100% {
            transform: scale(2.0);
            -webkit-transform: scale(2.0);
        }
    }

</style>
<style lang="scss">
.oneTask{
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;bottom: 0;left: 0;
    z-index: 2;
    opacity: 0;
     .exit{
        text-transform: uppercase;
        font-style: 18px;
        position: absolute;
        right: 10px;
        top: 15px;
        cursor: pointer;
    }
    .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    color: #fff;
    border: none;
    background-color: blue;
    width: 200px;
    height: 40px;
    margin: auto;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    margin-top: 15px;
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 16x;
    }
    .title{
        font-size: 18px;
        text-align: center;
        margin-bottom: 15px;
        font-weight: bold;
        display: block;

    }
     input{
         margin-right: 15px;
         height: 40px;
         width: 43%;
         font-size: 14px;
         border: 1px solid #e7e7ee;
         border-radius:10px;
         padding-left: 15px;
         margin-bottom: 15px;
         margin-top: 15px;
     }
    &.active{
      animation: leaves 5s ease-in-out infinite alternate;
      opacity: 1;
    }
    .box{
    min-width: 400px;
    max-width: 600px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 6px 10px 32px 0px rgba(34, 60, 80, 0.2);
    background-color: #fff;
    position: relative;
    }
}
</style>