import axios from 'axios'


const createComment ={
state:{
comment:[],
lastComment:[]
},
mutations:{
newComment(state,payload){
    state.comment.push(payload)
},
lastComment(state,payload){
    state.lastComment = payload
},
lastComments(state,payload){
    state.comment = payload
},
// getComment(state,payload){
// state.comment = payload
// }

},
actions:{
    // getCommentTodo(context,payload){
    //     axios.get('http://loacalhost:3000/comment/'+payload).then(res=>{
    //         context.commit('getComment',res.data)
    //     })
    // },
    addComment(context,payload){
        axios.post('  http://localhost:3000/comments',payload).then(res=>{
    context.commit('newComment',res.data)
        })
        },
        getLastComment(context){
            axios.get('http://localhost:3000/comments?_sort=id&_order=desc,asc&&_limit=4').then(res=>{
                context.commit('lastComment',res.data)
            })
        },
        getLastComments(context){
            axios.get('http://localhost:3000/comments').then(res=>{
                context.commit('lastComments',res.data)
            })
        }
    },
    getters:{
        allComment(state){
           return  state.lastComment 
        },
        getComment(state){
            return state.comment
        }
    }
}

export default createComment