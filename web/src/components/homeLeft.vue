<template>
  <div class="">
    <ul>
      <li>接口列表</li>
      <li v-for="(item,index) in ul" :key="index">
        {{index + 1}}-{{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeLeft',
  data () {
    return {
      ul: []
    }
  },
  mounted () {
    this.test()
  },
  methods: {
    test: function () {
      let url = '/api/home/getList'
      var vm = this
      this.$http.get(url).then(function (res) {
        vm.ul = res.data
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
