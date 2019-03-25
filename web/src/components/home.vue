<template>
  <div class="home">
    <el-row>
      <el-col :span="18" :offset="3">
        <el-col :span="6">
          <ul>
            <li v-for="item in ul">
              {{item.api}}
            </li>
          </ul>
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
export default {
  name: 'home',
  data () {
    return {
      ul:[
        {
          api:'users'
        },
        {
          api:'goods'
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
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
