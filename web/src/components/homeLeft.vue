<template>
  <div class="">
    <ul>
      <li>接口列表</li>
      <li v-for="(item,index) in ul" :key="index">
        {{item.api}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeLeft',
  data () {
    return {
      ul: [
        {
          api: 'users'
        },
        {
          api: 'goods'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
