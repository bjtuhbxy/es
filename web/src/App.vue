<template>
  <div id="app">
    <vheader></vheader>
    <router-view/>
  </div>
</template>

<script>
import vheader from '@/components/vheader'
export default {
  name: 'App',
  components: {
    'vheader': vheader
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
