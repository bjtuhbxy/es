<template>
  <div class="home">
    <el-row>
      <el-col :span="18" :offset="3">
        <el-col :span="6">
          <homeLeft></homeLeft>
        </el-col>
        <el-col :span="18">
          <el-col :span="24" class="left">
            menu
          </el-col>
          <el-col :span="24" class="left">
            content
          </el-col>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import left from '@components/homeLeft'

import homeLeft from '@/components/homeLeft'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    homeLeft
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-purple{
  background-color: red;
}
.left{
  background-color: red;
}
</style>
