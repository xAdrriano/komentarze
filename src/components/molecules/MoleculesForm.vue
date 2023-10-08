<template>
    <div class="add-comment">
        <form @submit.prevent="handleSubmit">
            <AtomInput type="text" v-model="newCommentUser" placeholder="Nazwa użytkownika" name="user"/>
            <AtomInput type="text" v-model="newCommentContent" placeholder="Dodaj komentarz" name="content"/>
            <AtomButton value="Anuluj" type="reset" class="btn"/>
            <AtomButton value="Skomentuj" type="submit" class="btn"/>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useCommentStore} from '../../stores/CommentStore'
import AtomButton from '../atoms/AtomButton.vue'
import AtomInput from '../atoms/AtomInput.vue'   

export default {
    components: {
        AtomButton,
        AtomInput
    },
    setup (){
        const CommentStore = useCommentStore()

        const newCommentUser = ref('')
        const newCommentContent = ref('')
        const handleSubmit = () => {
            CommentStore.addComment({
                user: newCommentUser.value,
                content: newCommentContent.value,
                id: Math.floor(Math.random()*1000)
            })
            newCommentUser.value = ""
            newCommentContent.value = ""
        }
        return {
            handleSubmit, 
            newCommentContent, 
            newCommentUser
        }
    }
}
</script>

