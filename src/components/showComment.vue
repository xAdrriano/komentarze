<template>
    <div>
    <h4>
        {{ comment.user }}
        <i @click="onDelete(comment.id)" class="fas fa-trash"></i>
    </h4>
    <p>{{ comment.content }} </p>
    </div>
</template>
        
    <script>
        export default {
         props:{
          comment:Object
         },
         methods:{
            onDelete(id){
                this.$emit('delete-comment',id)
            }
        }
    }
        
    </script>
        
    <style>

.fas {
  color: red;
  float: right;
  margin-right: 50px;
}
    </style>