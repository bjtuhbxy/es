<template>
  <div class="page-navbar">
    <div class="page-title">订单</div>
  </div>
</template>

<script>
  import navbar from './Nav'
  export default {
    name: 'Order',
    data () {
      return {
        selected:1,
      }
    },
    components:{
      navbar,
    },
    methods:{
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
