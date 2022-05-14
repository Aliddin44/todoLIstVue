<template>
  <div class="todos">
      <show-todo v-show="activeTodo" :todos='onetodos' :class="{'active':activeTodo} "   @active="activeTodo = $event"></show-todo>
      <div class="todos__title">
          <slot></slot>
      </div>
      <table>
          <tr v-for="(todo,index) of todo" :key="index">
              <td> <div class="todos__name"  @click="oneTodo(todo)">{{todo.name}}</div></td>
              <td> <div class="todos__proc " :class="progress[todo.progress]">{{progress[todo.progress]}}</div></td>
              <td>
                  <div class="todos__status " :class="todo.prog">{{todo.prog}}</div>
              </td>
              <td>
                  <div class="todos__avatar">
                      <img :src="require(`@/assets/${ava}.png`) " alt="" v-for="(ava,index) of todo.person" :key="index">
                      
                  </div>
              </td>
                <td :ref='"toggle-"+todo.id'>
                  <div class="pangination" @click="ModalToggle(todo.id)" >
                      <span></span>
                     
                  </div>
                    <div  class="modal_box">
                       <div  @click="changeStatus(todo,todo.id)">
                            {{(todo.status == 0)? 'to completed' :'on hold'}}
                       </div>
                          <div class="edit" @click="edit(todo)">
                              edit
                          </div>
                          <div class="delet" @click="del(todo,todo.id)">
                              delete
                          </div>
                      </div>
              </td>
          </tr>
      </table>
    <EditTodo v-show='isAct' :class="{'active':isAct} " :todos='onetodo' @active="isAct = $event" />

  </div>
</template>

<script>
import EditTodo from '@/components/editTodo.vue'
import ShowTodo from '@/components/ShowTodo.vue'
export default {
    props:['todo'],
  
    data(){
        return{
            onetodos:{},
            onetodo:{},
            progress:['pending','in_progress','cancelled','completed'],
               refName : '',
         item : [],
         isAct:false,
         activeTodo:false,
        }
    },
      components:{
        EditTodo,
        ShowTodo
    },
    methods:{
        edit(todo){
            this.onetodo = todo
            console.log(todo);
            this.isAct = true
            console.log(todo);
        },
        oneTodo(todo){
            this.onetodos = todo
            console.log(todo);
            this.activeTodo = true
        },
    del(todo,id){
        if(todo.status == 1 || todo.status==0)
            todo.status = 2
        this.$store.dispatch('deleteTodos',todo)
         this.refName = 'toggle-'+id
      this.item = this.$refs[this.refName]
       this.item[0].classList.toggle('active')
    },
    changeStatus(todo,id){
        if(todo.status == 0) todo.status = 1
            else todo.status = 0
        this.$store.dispatch('deleteTodos',todo) 
       this.refName = 'toggle-'+id
      this.item = this.$refs[this.refName]
       this.item[0].classList.toggle('active')
    },
    ModalToggle(id){
      this.refName = 'toggle-'+id
      this.item = this.$refs[this.refName]
       this.item[0].classList.toggle('active')
    }
        
    }

}
</script >

<style lang="scss">
.todos{
    .modal_box{
        position: absolute;
        top: 4px;
        right: -20px;
        background-color: rgb(232, 189, 189);
        border-radius: 8px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        top: 49px;
        right: -80px;
        height: 0;
        transition: ease 0.5s;
        overflow: hidden;
        z-index: 2;
       
        div{
            margin-bottom: 15px;
            cursor: pointer;
            &:hover{
                color: #219653;
            }
        }
    }
    .todos__name{
        cursor: pointer;
    }
    &__avatar{
        img{
            width: 23px;
            height: 23px;
        }
        img:nth-child(2){
            position: relative;
            left: -7px;
        }
        img:nth-child(3){
            position: relative;
            left: -14px;
             width: 23px;
            height: 23px;
        }
        img:nth-child(4){
            position: relative;
            left: -21px;
        }
    }
    &__title{
        margin-top: 40px;
        font-weight: bold;
    }
    &__name{
        position: relative;
        margin-left: 6px;
        &::before{
            content: '';
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            background: linear-gradient(133.9deg, rgba(243, 71, 122, 0.2) 0.24%, rgba(136, 76, 178, 0.2) 95.04%);
            border-radius: 50%;
            left: -16px;
            top: 3px;
        }
        &::after{
            content: '';
            display: block;
            position: absolute;
            width: 6px;
            height: 6px;
            background: linear-gradient(133.9deg, rgba(243, 71, 122, 0.7) 0.24%, rgba(136, 76, 178, 0.7) 95.04%);
            border-radius: 50%;
            left: -14px;
            top: 5px;
        }
    }
    &__title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 28px;
        color: #1D262C;
    }
    &__proc{
        font-weight: 400;
        font-size: 11px;
        line-height: 18px;
        text-align: center;
        letter-spacing: -0.0676923px;
        color: #F2994A;
        padding:5px 0px;
        background: rgba(242, 153, 74, 0.2);
        border-radius: 8.5px;
        width: 78px;
        margin: auto;
    }
    &__proc.in_progress{
        color: #56CCF2;
        background: rgba(86, 204, 242, 0.2);
    }
    &__proc.completed{
        color: #27AE60;
       
        background: rgba(39, 174, 96, 0.2);
    }
    &__proc.cancelled{
        color: #EB5757;
       
        background: rgba(235, 87, 87, 0.2);
    }
     &__status{
         position: relative;
     }
    &__status.minor{
        margin-left: 14px;
        &::before{
            content: '';
            display: block;
            position: absolute;
            width: 6px;
            height: 6px;
            border: 2px solid #219653;
            top: 4px;
            left: -14px;
            border-radius: 50%;


        }
    }
    &__status.normal{
        margin-left: 14px;
        &::before{
            content: '';
            display: block;
            position: absolute;
            width: 6px;
            height: 6px;
            border: 2px solid #F2C94C;
            top: 4px;
            left: -14px;
            border-radius: 50%;


        }
    }
    &__status.critical{
        margin-left: 14px;
        &::before{
            content: '';
            display: block;
            position: absolute;
            width: 6px;
            height: 6px;
            border: 2px solid #EB5757;
            top: 4px;
            left: -14px;
            border-radius: 50%;


        }
    }
}
 .pangination{
        background-color: #F2F2F2;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ease .5s;
        cursor: pointer;
        
                span{
            width: 3px;
            height: 3px;
            background-color: #DCD9D9;
            border-radius: 50%;
            position: relative;
                transition: ease .5s;

            &::after{
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            background-color: #DCD9D9;
                right: -5px;
            }
            &::before{
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            background-color: #DCD9D9;
                left: -5px;
            }
            
        }
    }
    table{
        width: 100%;
        td{
            border-bottom: 0.5px solid #E0E0E0;
            padding-bottom: 21px;
            padding-top: 20px;
        }
        tr{
            td:nth-child(1){
                width: 40%;
            }
            td:nth-child(2){
                width: 15%;
            }
            td:nth-child(3){
                width: 15%;
            }
            td:nth-child(4){
                width: 15%;
            }
            td:nth-child(5){
                width: 15%;
                text-align: right;
                position: relative;
                .pangination{
                    margin-left: auto;
                }
                
            }
            td:last-child{
                &.active{
                    .modal_box{
                            height: auto;
                            transition: ease 0.5s;
                            padding: 15px;
                    }
                     .pangination{
                        transform: rotate(90deg);
                        transition: ease .5s;
            }
                }
            }
        }
    }
</style>