import { createStore } from 'vuex'
import axios from 'axios'
import comment from '@/store/comment'
export default createStore({
  state: {
    todos:[],
    search:''
  },
  getters: {
    countTodo(state){
     let count = state.todos.filter(todo=>{
        return todo.status !== 2
      })
      return count.length
      // console.log(state.todos.length);
    },
    OnHold(state){
      if(state.search !== ''){
        return state.todos.filter(todo=>{
         return todo.status == 0  && todo.name.toLowerCase().indexOf(state.search.toLowerCase() ) !== - 1
        })

      }else{
        return state.todos.filter(todo=>{
          return todo.status == 0 
        })
      }

    
    },
    Completed(state){
      if(state.search !== ''){
        return state.todos.filter(todo=>{
         return todo.status == 1 && todo.name.toLowerCase().indexOf(state.search.toLowerCase() ) !== - 1
        })

      }else{
        return state.todos.filter(todo=>{
          return todo.status == 1 
        })
    }
  },
  deleteTask(state){
    return state.todos.filter(todo=>{
      return todo.status == 2 
    })
  }

},
  mutations: {
    addTodos(state,payload){
      state.todos.push(payload)
    },
    searchTodo(state,payload){

      state.search = payload
    },
    getAlltodos(state,payload){
      state.todos = payload
    },
    removeTodos(state,payload){
       state.todos.find(todo=>{
        if(todo.id == payload.id){
          todo = payload
        }
      })
    },
    
  },
  actions: {
    newTodos(context,payload){
      axios.post('http://localhost:3000/todos',payload).then(res=>{
        context.commit('addTodos',res.data)
      })
    },
    getAllTodos(context){
      axios.get(' http://localhost:3000/todos').then(res=>{
        context.commit('getAlltodos',res.data)
      })
    },
    deleteTodos(context,payload){
      axios.put(' http://localhost:3000/todos/'+payload.id,payload).then(res=>{
       if(res == 200){
        context.commit('removeTodos',res.data)
       }
      })
    },
    
  },
  modules: {
    comment
  }
  })
