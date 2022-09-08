<template>
  <div id="app">
    <button @click="playText">Play text</button>
    <p id="message">Message is: {{ message }}</p>
  </div>
</template>

<script>
  export default {
    methods: {
      playText() {
        this.$alanBtnInstance.playText("Hello, I am Rubel Ahmad");
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
