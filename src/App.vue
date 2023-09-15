<template>
  <div>
    <bialko-blog></bialko-blog>
    <add-comment></add-comment>
  </div>
</template>

<script>
import addComment from './components/addComment.vue'
import bialkoBlog from './components/bialkoBlog.vue'

export default {
  components: {
    'add-comment':addComment,
    'bialko-blog':bialkoBlog
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
