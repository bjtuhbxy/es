<template>
  <div id="app">
    <!-- 基本按钮 -->
    <div class="block">
      <div class="row">
        <button class="button col">Button</button>
        <button class="button col">Button</button>
        <button class="button col button-round">Round</button>
      </div>
    </div>

    <div class="block">
      <div class="row">
        <button class="col button button-fill">Button</button>
        <button class="col button button-fill">Button</button>
        <button class="col button button-fill button-round">Round</button>
      </div>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
