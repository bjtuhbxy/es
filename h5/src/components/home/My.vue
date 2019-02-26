<template>
  <div class="">
    <navbar :title="title" :hideLeft="true"></navbar>
    <br/>
    <router-link to="/login">
      <mt-button type="danger" size="large">退出</mt-button>
    </router-link>
  </div>
</template>

<script>
  import navbar from './Nav'
export default {
  name: 'My',
  data () {
    return {
      title:'个人中心',
    }
  },
  components:{
    navbar,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
