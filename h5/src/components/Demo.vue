<template>
  <div>
    Demo
    <button @click="pop"><返回</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
    }
  },
  methods:{
    pop:function () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
