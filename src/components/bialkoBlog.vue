<template>
  <div id="add-comment">
      <div id="border">
      <h3>Blog o jedzeniu białka</h3>
      <img src="../assets/pudzian.png" alt="białko" class="center">
      <p>Optymalne spożycie białka dla osoby ćwiczącej to 2g na 1kg masy ciała, białko w prożku jest bardzo dobrym suplementem, gdy w diecie brakuje nam białka, pan Mariusz poleca</p>
  </div>
  </div>
</template>
<script>
  export default {
  
  }
</script>
  
<style scoped>
  #add-comment *{
      box-sizing: border-box;
      font-family: sans-serif;
      
  }
  #add-comment{
      margin: 20px auto;
      max-width: 500px;
  }
  h3{
      text-align: center;
  }
  p{
      margin: 20px auto;
  }
  .center {
       display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 100% !important;
  }
  #border{
      padding: 10px 20px;
      margin: 30px 0;
  }
</style>
  