<template>
  <navbar :title="title"></navbar>
</template>

<script>
  import navbar from './Nav'
  export default {
    name: 'Detail',
    data () {
      return {
        title:'商品详情',
      }
    },
    components:{
       navbar,
    },
    methods:{
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
