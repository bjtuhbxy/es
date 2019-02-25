<template>
  <div class="">
    <!-- 轮播图 -->
    <mt-swipe :auto="3000" class="swiper">
      <mt-swipe-item v-for="(item,index) in swipe" :key="index" :style="'background: url('+item.img+') no-repeat; background-size: 100% 100%;'"></mt-swipe-item>
    </mt-swipe>
    <!-- 商品分类 -->
    <div class="goods_class">
      <ul>
        <li v-for="(item,index) in goods_class" :key="index">{{item.label}}</li>
      </ul>
    </div>
    <button type="button" @click="init" name="button">加载</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        swipe:[],
        goods_class:[]
      }
    },
    components: {
    },
    mounted() {
      console.log('=============');
      this.init()
      console.log(this.swipe);
      console.log(this.goods_class);
    },
    methods: {
      init:function () {
        console.log('=========');
        this.getSwipe()
        this.getGoodsClass()
      },
      getSwipe:function () {
        this.swipe = [
          {
            img:'http://img.c.irunyan.com/img/banner/banner2.jpg?v=100022',
            label:'111111'
          },
          {
            img:'http://img.c.irunyan.com/img/banner/banner3.jpg?v=100022',
            label:'211111'
          },
          {
            img:'http://img.c.irunyan.com/img/banner/banner4.jpg?v=100022',
            label:'311111'
          }
        ]
      },
      getGoodsClass:function () {
        this.goods_class = [
          {
            label:'日常护理',
            icon:''
          },
          {
            label:'日常护理',
            icon:''
          },
          {
            label:'日常护理',
            icon:''
          },
          {
            label:'日常护理',
            icon:''
          },
          {
            label:'日常护理',
            icon:''
          },
          {
            label:'日常护理',
            icon:''
          },
          {
            label:'日常护理',
            icon:''
          },
          {
            label:'日常护理',
            icon:''
          }
        ]
      }
    },
    watch: {
    },
    mounted() {
      window.addEventListener('scroll', () => {
        let top = document.documentElement.scrollTop;
        if (top >= 200) {
          this.sort = true
        } else {
          this.sort = false
        }
      }, false)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.swiper{
  height: 10rem;
}
.goods_class{
  width: 100%;
  min-height: 4.55rem;
  background-color: #fff;
}
.goods_class>ul{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.goods_class>ul>li{
  width: 3.75rem;
  height: 3.75rem;
  margin: 0.4rem;
  text-align: center;
  background-color: red;
}
</style>
