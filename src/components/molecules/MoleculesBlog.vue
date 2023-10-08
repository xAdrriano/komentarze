<template>
    <div class="add-comment">
        <AtomTitle title="Blog o jedzeniu białka"/>
        <AtomImg src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/315549483_1482701595570753_8123729620137037645_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=WCqoNZ8dIvgAX8bc6R7&_nc_oc=AQmmYAM-qpY_WNYiLuT07mPUhWOgMXKq5ifsWJJI8P-gjzdz7RrlwPEVavI4viPuLl0&_nc_ht=scontent-waw1-1.xx&oh=00_AfBpjLG_58cQ_lfuLQIlVwulj7b8T2PQzS2MSk4n8vvU4w&oe=65276588" alt="obraz" css="center"/>
        <AtomText text="Optymalne spożycie białka dla osoby ćwiczącej to 2g na 1kg masy ciała, białko w prożku jest bardzo dobrym suplementem, gdy w diecie brakuje nam białka, pan Mariusz poleca"/>
    </div>
</template>

<script>
import AtomText from '../atoms/AtomText.vue';
import AtomTitle from '../atoms/AtomTitle.vue'
import AtomImg from '../atoms/AtomImg.vue'
export default {
    components: {
        AtomText,
        AtomTitle,
        AtomImg
    }
}
</script>