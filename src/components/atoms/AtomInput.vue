<template>
    <input 
    v-model="value" 
    :type="type" 
    :placeholder="placeholder" 
    :name="name"
    @input="$emit('input', value)"
    required
    />
</template>

<script>
export default {
    props: {
        type:String,
        placeholder:String,
        name:String,
    },
    data(){
        return {
            value: ''
        }
    }
}
</script>