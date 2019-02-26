<template>
  <navbar :title="title" :hideLeft="true"></navbar>
</template>

<script>
  import navbar from './Nav'
  export default {
    name: 'Order',
    data () {
      return {
        selected:1,
        title:'订单',
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
