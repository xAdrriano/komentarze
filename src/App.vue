<template>
  <div>
    <bialko-blog></bialko-blog>
      <add-comment @add-comment="AddComment"></add-comment>
    <show-comments @delete-comment="deleteComment" :comments="comments"></show-comments>
  </div>
</template>

<script>
import addComment from './components/addComment.vue'
import bialkoBlog from './components/bialkoBlog.vue'
import showComments from './components/showComments.vue'

export default {
  components: {
    'add-comment':addComment,
    'bialko-blog':bialkoBlog,
    'show-comments':showComments
  },
  data(){
    return {
      comments: [],
    }
  },
  methods:{
    async AddComment(comment){
      const res = await fetch('api/comments',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(comment)
      })
      const data = await res.json()
      this.comments = [data,...this.comments]
    },
    async deleteComment(id){
      const res = await fetch(`api/comments/${id}`,{
        method:"DELETE"
      })
      res.status === 200 ? (this.comments = this.comments.filter((comment) => comment.id !==id)) : alert('Błąd - nie udało się usunąć')
    },
    async fetchComments(){
      const res = await fetch('api/comments')
      const data = await res.json()
      return data
    },
    async fetchComment(id){
      const res = await fetch(`api/comments/${id}`)
      const data = await res.json()
      return data
    }
  },

  async created(){
    this.comments = await this.fetchComments()
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
