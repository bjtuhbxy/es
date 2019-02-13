<template>
  <div class="">

    <div class="page-tabbar">
      <div class="page-wrap">
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>
        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item v-for="item in tabList" :id="item.id">
            <component :is="item.page"></component>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item v-for="item in tabList" :id="item.id">
          <span :class="'iconfont icon-' + item.icon"></span>
          {{item.label}}
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
      selected: '外卖',
      tabList: [{
        id:'外卖',
        label:'外卖',
        icon:'diancan',
        page:'wm'
      },
        {
          id:'订单',
          label:'订单',
          icon:'dingdan',
          page:'order'
        },
        {
          id:'find',
          label:'发现',
          icon:'faxian',
          page:'find'
        },
        {
          id:'my',
          label:'我的',
          icon:'wode',
          page:'my'
        }]
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
  .iconfont{
    display: block;
  }
</style>
