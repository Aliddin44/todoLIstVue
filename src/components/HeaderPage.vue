<template>
  <div class="header">
      <div class="search">
          <img src="@/assets/search.png" alt="">
          <input type="text" @input="searchTodo($event)" placeholder="Search for any training you want ">
      </div>
    <div class="notif">
        <div class="notf" >
           <div class="actives" @click="toggleActive = !toggleActive">
                <img src="@/assets/notf.png" alt=""  >
            <span  v-show="delTask.length > 0" ></span>
           </div>
            
        </div>
        <div class="avatar">
            <img src="@/assets/apa.png" alt="">
        </div>
         <div class="modal__del" :class="{'active': toggleActive  && delTask.length>0}" >
                <div class="box">
                    <div class="task" v-for="(todo,index) of delTask" :key="index">
                        <div class="title">{{todo.name}}</div>
                        <div class="exit" @click="delTasks(todo)">X</div>
                    </div>
                </div>
            </div>
    </div>
   
  </div>
</template>

<script>
export default {
    name:'HeaderPage',
data(){
    return{
        search:'',
        toggleActive:false
    }
},
computed:{
delTask(){
    return this.$store.getters.deleteTask
}
},
 methods:{
        searchTodo(event){
          this.$store.commit('searchTodo',event.target.value)
        },
        delTasks(todo){
            todo.status = 0
            this.$store.dispatch('deleteTodos',todo)
        }
    }
}
</script>

<style lang="scss">
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 57px;
    .search{
        display: flex;
        align-items: center;
        font-weight: 400;
       

/* gray */
        img{
            margin-right: 12px;
        }
        input{
             font-size: 16px;
                line-height: 15px;
        font-family:Montserrat sans-serif;
        min-width: 300px;
        letter-spacing: 0.01em;
        padding: 5px;
        border: none;
        }
    }
    .actives{
        cursor: pointer;
    }
    .notif{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
               .modal__del{
            position: absolute;
            top: 30px;
            right: 50px;
            padding: 10px;
            border-radius: 8px ;
            background-color: #fff;
            
            min-width: 200px;
            overflow: hidden;
            height: 0;
            padding: 0;
            .exit{
                cursor: pointer;
            }
            &.active{
                box-shadow: 2px 11px 8px 3px rgba(34, 60, 80, 0.2);
                padding: 15px;
                height: auto;
            }
            .task{
                display: flex;
                align-items: center;
                justify-content: space-between;
                  border-bottom: 1px solid 
                  #e7e7e7;
                    margin-bottom: 15px;
                    padding-bottom: 15px;

                .title{
                    margin: 0;
                    font-style: 16px;
                  
                }
            }

            
        }
        .notf{
            margin-right: 33px;
            position: relative;
     
            span{
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                top: 1px;
                right: -1px;
                background-color: #F7685B;
            }
        }
    }
}

</style>