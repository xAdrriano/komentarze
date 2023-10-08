<template>
    <div class="add-comment">
            <h3>Liczba komentarzy {{ CommentStore.countComment }} </h3>
            <hr>
            <div v-for="comment in CommentStore.comments" :key="comment.id">
            <AtomShowComment :comment="comment"/>
        </div>
    </div>
</template>

<script>
import AtomShowComment from '../atoms/AtomShow.vue';
import { useCommentStore } from '../../stores/CommentStore';
export default {
    components: { 
        AtomShowComment,
    },
    setup() {
        const CommentStore = useCommentStore()  
        
        CommentStore.getComment()

        return { CommentStore }
    }
}
</script>