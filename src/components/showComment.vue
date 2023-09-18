<template>
    <div>
    <h4>{{ comment.user }}</h4>
    <p>{{ comment.content }} </p>
    </div>
</template>
        
    <script>
        export default {
         props:{
          comment:Object
         }
        }
    </script>
        
    <style>

   
    </style>
        