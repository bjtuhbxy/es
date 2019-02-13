<template>
  <div class="">
    <div class="page-part">
      <mt-cell :title="'我的 '" />
    </div>
    <router-link to="/login">
      <mt-button type="danger" size="large">退出</mt-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
