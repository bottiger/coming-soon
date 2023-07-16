<template>
  <div id="container" class="m-0 m-lg-5">
    <div id="title">
      <blockquote class="blockquote">
        <p class="mb-2 fs-2 text-light">“I feel very confident predicting autonomous robotaxis for Tesla next year,”</p>
        <footer class="blockquote-footer">Elon Musk at <cite title="Source Title"> Tesla Autonomy Investor Day 2019</cite></footer>
      </blockquote>
    </div>
    <div id="main">
      <ComingSoon />
    </div>
  </div>
  <footer
    class="text-center text-lg-start text-white"
    style="background-color: #3e4551"
  >
    <div
         class="text-center p-1"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/bottiger/elonmeter" role="button">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </footer>
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
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 25px;
}
</style>
