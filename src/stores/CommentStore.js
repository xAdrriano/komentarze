import { defineStore } from "pinia";

export const useCommentStore = defineStore('CommentStore',{
    state:() => ({
        comments: [],
    }),
    getters:{
        countComment: (state) => {
            return state.comments.length
        },
    },
    actions:{
      async getComment(){
        const res = await fetch('http://localhost:5000/comments')
        const data = await res.json()
        this.comments = data
      },
      async addComment(comment){
        this.comments.push(comment)
        const res = await fetch('http://localhost:5000/comments',{
          method:'POST',
          body: JSON.stringify(comment),
          headers:{
            'Content-type':'application/json'
          },
        })
        if (res.error) {
          console.log(res.error)
        }
      },
      async deleteComment(id){
        this.comments = this.comments.filter(t => {
          return t.id !== id
        })

        const res = await fetch(`http://localhost:5000/comments/` + id,{
          method:'DELETE'
        })
        if (res.error) {
          console.log(res.error)
        }
      },
    }
})