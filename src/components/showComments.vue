<template>
    <div id='add-comment'>
        <h3>Komentarze</h3>
<div  v-for="comment in comments" :key="comment.id">
<show-comment :comment="comment"></show-comment>
</div>
    </div>

</template>
    
<script>
import showComment from './showComment.vue'

    export default {
     props:{
      comments:Array
     },
     components:{
        'show-comment':showComment
     }
    }
</script>
    
<style scoped>
     #add-comment *{
        box-sizing: border-box;
        font-family: sans-serif;
    }
    #add-comment{
        margin: 10px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h4{
        margin-top: 5px;
    }
</style>
    