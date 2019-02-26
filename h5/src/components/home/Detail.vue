<template>
  <div>
    <!--nav-->
    <div class="page-navbar">
      <button class="iconfont icon-htmal5icon37" @click="$router.go(-1)">返回</button>
      <div class="page-title">
        <a href="javascript:;" v-for="(item,index) in pageClass" @click="pageSlide" :key="index" :name="item.id"
           :class="{active:selected == item.id}">{{item.label}}</a>
      </div>
      <span class="iconfont icon-gengduo"></span>
    </div>
    <div>
      <img id="firstImg" onload="window._PFM_TIMING[4] = window._PFM_TIMING[4] || new Date();"
           src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/32251/26/438/89633/5c3c055bE61414b4d/5691c8e1a9f05df9.jpg!q80.dpg.webp"
           onerror="__reloadResource(this)">
    </div>
  </div>
  <!--main-->
</template>

<script>
  export default {
    name: 'Detail',
    data() {
      return {
        selected: 'goods',
        pageClass: [
          {
            id: 'goods',
            label: '商品'
          }, {
            id: 'evaluate',
            label: '评价'
          }, {
            id: 'detail',
            label: '详情'
          }
        ]
      }
    },
    components: {},
    methods: {
      pageSlide: function (event) {
        this.selected = event.target.name
        console.log(event);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-title > a {
    font-size: 0.4rem;
    margin: 0 0.1rem;
    color: #ddd;
  }

  .active {
    color: #fff !important;
    font-size: 0.45rem !important;
  }

  .icon-gengduo {
    position: absolute;
    right: 14px;
    top: 14px;
    color: #ddd;
  }
</style>
