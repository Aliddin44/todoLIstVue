<template>
  <div class="AddTodo">
     <div class="box">
         <div class="exit" @click=" $emit('active',false)">X</div>
         <div class="title" >New todo</div>
          <input type="text" name=""
          v-model="listLocal.name"
           id="">
      <select name="" id="" v-model="listLocal.progress">
      <option value="0">pending</option>
      <option value="1">in_progress</option>
      <option value="2">cancelled</option>
      <option value="3">completed</option>
      </select>


      <select name="" id="" v-model="listLocal.prog">
      <option value="normal">Normal</option>
      <option value="critical">Critical</option>
      <option value="minor">Minor</option></select>
     <div class="flex">
          <label for="person_1">person_1
      <input type="checkbox"  v-model="listLocal.person" id="person_1" value="person_1"></label>
      <label for="peerson_2">person_2
      <input type="checkbox"  v-model="listLocal.person" id="peerson_2" value="person_2" ></label>
     </div>
     <div class="flex">
          <label for="person_3">person_3
      <input type="checkbox"  v-model="listLocal.person" id="person_3" value="person_3"></label>
      <label for="person_4">person_4
      <input type="checkbox"  v-model="listLocal.person" id="person_4" value="person_4"></label>
     </div>
      <button class="create__btn" @click="save()">save todo</button>
     </div>
     
  </div>
</template>

<script>


export default {
 props:['todos'],
data(){
    return{
       progress:['pending','in_progress','cancelled','completed'],  
    }
},
computed:{
listLocal: {
            get: function() {
                return this.todos
            },
},
},

methods:{
      
    

    save(){
        this.$store.dispatch('editTask',this.todos)
        this.$emit('active',false)
    }
},

}
</script>

<style lang="scss">
.AddTodo{
    input[type='text'],select{
        height: 40px;
        border-radius: 8px;
        margin-bottom: 15px;
        border: 1px solid #7e7e7e;
    }
position: fixed;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.6);
width: 100vw;
height: 100vh;
left: 0;
top: 0;
right: 0;
bottom: 0;
z-index: 2;
.title{
    font-style: 16px;
    font-weight: bold;
    text-align: center;
    display: block;
    margin-bottom: 15px;
}
.box{
    position: relative;
    min-width: 400px;
    padding: 10px;
    background:#fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .exit{
        text-transform: uppercase;
        font-style: 18px;
        position: absolute;
        right: 10px;
        top: 5px;
        cursor: pointer;
    }
    .flex{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
     input[type=tex]{
        width: 90%;
        border-radius: 5px;
        border: 1px solid #7e7e7e;
       margin-bottom: 10px;
    }
     input[type=checkbox]{
       
       margin-bottom: 10px;
    }
    .create__btn{
        display: block;
        padding: 5px 10px;
        color: #fff;
        border: none;
        background-color: blue;
        width: 200px;
        height: 40px;
        margin: auto;
        border-radius: 10px;
        cursor: pointer;
    }
    
}
}
</style>