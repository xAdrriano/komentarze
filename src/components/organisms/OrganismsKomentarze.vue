<template>
    <BlogComment/>
    <FormComment/>
    <ShowComment/>
</template>

<script>

import FormComment from '../molecules/MoleculesForm.vue';
import BlogComment from '../molecules/MoleculesBlog.vue';
import ShowComment from '../molecules/MoleculesShow.vue';

export default {
    components: { 
        FormComment,
        BlogComment,
        ShowComment
    }
}
</script>