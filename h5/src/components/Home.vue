<template>
  <div class="">

    <div class="page-tabbar">
      <div class="page-wrap">
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>
        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="外卖">
            <wm></wm>
          </mt-tab-container-item>
          <mt-tab-container-item id="订单">
            <order></order>
          </mt-tab-container-item>
          <mt-tab-container-item id="发现">
            <find></find>
          </mt-tab-container-item>
          <mt-tab-container-item id="我的">
            <my></my>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="外卖">
          <img slot="icon" src="">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
import wm from './home/Wm'
import order from './home/Order'
import find from './home/Find'
import my from './home/My'
console.log(wm);
// const Wm = resolve=>require(['@/components/home/Wm.vue'],resolve)
export default {
  name: 'Home',
  data () {
    return {
      selected: '外卖'
    }
  },
  mounted () {
    // Vue.component(Navbar.name, Navbar);
  },
  components: {
    wm,
    order,
    find,
    my
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
