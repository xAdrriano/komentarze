<template>
    <div id="add-comment">
      <form @submit="onSubmit">
        <input v-model.lazy="comment.user" type="text" placeholder="Nazwa użytkownika" required>
        <textarea v-model.lazy.trim="comment.content" placeholder="Dodaj komentarz" required></textarea>
        <input class="btn" type="submit" value="Skomentuj">
      </form>
    </div>
</template>
    
<script>
    export default {
      data() {
        return{
          comment: {
            user: '',
            content: ''
          },
        }
      },
    methods: {
      onSubmit(e){
            e.preventDefault()

            const  newComment = {
                id: Math.floor(Math.random()*100000),
                user: this.comment.user,
                content: this.comment.content,
            }

            this.$emit('add-comment',newComment)

            this.comment.user = '',
            this.comment.content = ''     
        }
    }
    }
</script>
    
<style scoped>
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
    #add-comment *{
        box-sizing: border-box;
        font-family: sans-serif;
    }
    #add-comment{
        margin: 60px auto;
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
    h3{
        margin-top: 10px;
    }
</style>
    