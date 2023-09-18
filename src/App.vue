<template>
  <div>
    <bialko-blog></bialko-blog>
    <add-comment @add-comment="AddComment"></add-comment>
    <show-comments :comments="comments"></show-comments>
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
      comments: []
    }
  },
  methods:{
    AddComment(comment){
      this.comments = [comment,...this.comments]
    }
  },
  created(){
    this.comments = [
    {
      id: "1",
      user: "Adrian",
      content: "Bardzo fajny blog"
    },
    {
      id: "2",
      user: "Krzysiu",
      content: "kocham twoje posty"
    },
    {
      id: "3",
      user: "Maciek",
      content: "dobra robota"
    }
    ]
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
