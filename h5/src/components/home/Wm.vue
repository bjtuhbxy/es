<template>
  <div class="">
    <mt-cell :title="'餐厅 '" />
    <mt-cell :title="'餐厅 '" />
    <mt-cell :title="'餐厅 '" />
    <button @click="toDemo">demo</button>
  </div>
</template>

<script>
export default {
  name: 'Wm',
  data () {
    return {
      selected: '外卖'
    }
  },
  methods:{
    toDemo:function () {
      this.$router.push({//你需要接受路由的参数再跳转
        path: '/home/demo'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
