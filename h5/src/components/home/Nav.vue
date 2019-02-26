<template>
  <div class="page-navbar">
    <button class="iconfont icon-htmal5icon37" @click="$router.go(-1)" v-if="!hideBack">返回</button>
    <div class="page-title" :title="title">{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data () {
      return {

      }
    },
    props:['title','hideBack']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
