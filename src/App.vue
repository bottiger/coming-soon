<template>
  <div id="container">
    <!--
    <div id="head" class="align-bottom">
      <img src="@/assets/elon-header.webp">
    </div>
  -->
    <div id="title">
      <blockquote class="blockquote">
        <p class="mb-2 fs-2 text-light">“I feel very confident predicting autonomous robotaxis for Tesla next year,”</p>
        <footer class="blockquote-footer">Elon mush at <cite title="Source Title"> Tesla Autonomy Investor Day 2019</cite></footer>
      </blockquote>
    </div>
    <div id="main">
      <ComingSoon />
    </div>
  </div>
</template>

<script>
import ComingSoon from './components/ComingSoon.vue'

export default {
  name: 'App',
  components: {
    ComingSoon
  }
}
</script>

<style>
/*
body {
  margin-top: 60px;
  margin-left: 30px;
  background-color: #2c3e50;
}
*/
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1600px;
  margin: auto;
}

#head {
}

#head img {
  display: -webkit-box;
  margin-left: auto;
}

#main {
  /*color: #2c3e50;*/
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 25px;
}
</style>
