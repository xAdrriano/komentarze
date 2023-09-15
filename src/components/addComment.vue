<template>
    <div id="add-comment">
      <h3>Komentarze</h3>
      <form>
        <input type="text" required placeholder="Nazwa użytkownika" v-model.lazy="comment.user">
        <textarea required placeholder="Dodaj komentarz" v-model.lazy="comment.content"></textarea>
      </form>
      <div id="preview">
        <h3>Podgląd komentarza</h3>
        <p>Nazwa użytkownika:</p>
        <p>{{ comment.user }}</p>
        <p>Treść:</p>
        <p>{{ comment.content }}</p>
      </div>
    </div>
    </template>
    
    <script>
    export default {
      data() {
        return{
          comment: {
            user: '',
            content: ''
          }
        }
      }
    
    }
    </script>
    
    <style scoped>
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
    