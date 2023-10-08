<template>
    <img :src="src" :alt="alt" :class="css">
</template>

<script>
export default {
    props: {
        src:String,
        alt:String,
        css:String
    }
}
</script>