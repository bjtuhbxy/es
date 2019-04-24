<template>
  <div class="home">
    这是主页 {{obj}}
    <span @click="$store.commit('m',$store.state.obj+10)">点我</span>
    <span @click="$store.dispatch('mp',10)">点我</span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed:{
    obj(){
      return this.$store.getters.obj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
