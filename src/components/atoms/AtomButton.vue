<template>
    <button :type="type">{{ value }}</button>
</template> 


<script>
export default {
    props:{
        type:String,
        value:String
    },
}
</script>