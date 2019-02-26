<template>
  <div class="page-navbar">
    <button class="iconfont icon-htmal5icon37" @click="$router.go(-1)">返回</button>
    <div class="page-title" v-model="selected">
      <a href="#">商品</a>
      <a href="#">评价</a>
      <a href="#">详情</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
        selected:'商品',
      }
    },
    components:{
    },
    methods:{
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
