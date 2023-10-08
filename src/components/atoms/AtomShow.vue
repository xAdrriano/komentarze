<template>
    <div class="showComment border hover">
        <h4>{{ comment.user }}<i class="fa fa-trash" @click="CommentStore.deleteComment(comment.id)"></i></h4>
        <p>{{ comment.content }}</p>
        <hr>
    </div>
    </template>
    
    <script>
    import { useCommentStore } from '../../stores/CommentStore.js'
    export default {
        props: ['comment'],
        setup(){
            const CommentStore = useCommentStore()
    
            return { CommentStore }
        }
    }
    </script>