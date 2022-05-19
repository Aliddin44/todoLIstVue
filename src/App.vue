<template>
  <nav>
    <AddTodo  v-show="isActive" @active="isActive = $event"/>
    <headerwiev />
    <div class="row">
      <div class="title">
        <div class="task__title">You’ve got <span>{{AllTodos}} task</span> today </div>
        <div class="create__btn" @click="add">
          <img src="@/assets/plus.png" alt="">
          Add New
        </div>
      </div>
      <div class="col-lg-9">
      <Todo :todo='onHoldTodo'>
         on Hold
      </Todo >
      <Todo :todo='CompletedTodo'>
       Comleted
      </Todo>
      </div>
      <div class="col-lg-3">
<show-message :comments="comments"></show-message>
      </div>
    </div>
  </nav>
 
</template>
<script>
import headerwiev from '@/components/HeaderPage.vue'
import Todo from '@/components/TodosVue.vue'
import AddTodo from '@/components/AddTodo.vue'
import showMessage from '@/components/ShowMessage.vue'


export default({

  data(){
    return{
      isActive:false
    }
  },
  computed:{
    onHoldTodo(){
      
      return this.$store.getters.OnHold
    },
    getOneTodo(){
      
      return this.$store.dispatch('getOneTodo')
    },
    CompletedTodo(){
     return  this.$store.getters.Completed
    },
    AllTodos(){
      return this.$store.getters.countTodo
    },
     comments(){

       
        return  this.$store.getters.allComment 
    }
  },
  components:{
    headerwiev,
    Todo,
    AddTodo,
    showMessage
  },
  methods:{
  add(){
    this.isActive = true
  }    
  },
  created(){
    this.$store.dispatch('getAllTodos')
    this.$store.dispatch('getLastComment')
    // this.$store.dispatch('getLastComments')
    
    console.log(this.$store.dispatch('getLastComment'));
    
  }
})
</script>
<style lang="scss">
.title{
  display: flex;
  align-items: center;
  margin-bottom: 57px;
  .task__title{
    font-family: Poppins sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    color: #1D262C;
    span{
      color:#F3477A;
    }
  }
  .create__btn{
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 10px;
    padding-bottom: 10px;
   background: #884CB2;
  border-radius: 10px; 
  color: #fff;   
  display: flex;
  align-items: center;
  margin-left: 24px;
  cursor: pointer;
    transition: ease 0.5s;

  &:hover{
    box-shadow: 8px 13px 31px 0px rgba(34, 60, 80, 0.2);
    transform: translateY(-5px);
    transition: ease 0.5s;
  }
  img{
    color: #fff;
    filter: invert(0);
    margin-right: 5px;
  }

  }
}
nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
input,select{
&:focus{
  outline: none;
}
}
nav a.router-link-exact-active {
  color: #42b983;
}
.row{
  display: flex;
  align-items: center;
  margin-left: -15px;
  margin-right: -15px;
  flex-wrap: wrap;
}
.col-lg-9{
  width: 75%;
  max-width: 75%;
  flex-basis: 75%;
  padding: 15px;
}
body{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
</style>
