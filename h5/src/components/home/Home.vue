<template>
  <div class="">
    <!-- 轮播图 -->
    <mt-swipe :auto="3000" class="swiper">
      <mt-swipe-item v-for="(item,index) in swipe" :key="index"
                     :style="'background: url('+item.img+') no-repeat; background-size: 100% 100%;'"></mt-swipe-item>
    </mt-swipe>
    <!-- 商品分类 -->
    <div class="goods_class">
      <ul>
        <li v-for="(item,index) in goods_class" :key="index">
          <img :src="item.icon" alt="">
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div>
    <button type="button" @click="init" name="button">加载</button>
    <!-- 商品列表 -->
    <ul class="goods_list">
      <li v-for="(item,index) in goods_list" :key="index">
        <img :src="item.src" alt="">
        <div>{{item.title}}</div>
        <p>
          <span>¥{{item.price}}</span>
          <span>{{item.num}}人付款</span>
        </p>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        swipe: [],
        goods_class: [],
        goods_list: [],
      }
    },
    components: {},
    mounted() {
      this.init()

    },
    methods: {
      init: function () {
        this.getSwipe()
        this.getGoodsClass()
        this.getGoodsList()
      },
      getSwipe: function () {
        this.swipe = [
          {
            img: 'http://img.c.irunyan.com/img/banner/banner2.jpg?v=100022',
            label: '111111'
          },
          {
            img: 'http://img.c.irunyan.com/img/banner/banner3.jpg?v=100022',
            label: '211111'
          },
          {
            img: 'http://img.c.irunyan.com/img/banner/banner4.jpg?v=100022',
            label: '311111'
          }
        ]
      },
      getGoodsClass: function () {
        this.goods_class = [
          {
            label: '日常护理',
            icon: 'http://img.c.irunyan.com/img/tuijian.svg'
          },
          {
            label: '日常护理',
            icon: 'http://img.c.irunyan.com/img/tuijian.svg'
          },
          {
            label: '日常护理',
            icon: 'http://img.c.irunyan.com/img/tuijian.svg'
          },
          {
            label: '日常护理',
            icon: 'http://img.c.irunyan.com/img/tuijian.svg'
          },
          {
            label: '日常护理',
            icon: 'http://img.c.irunyan.com/img/tuijian.svg'
          },
          {
            label: '日常护理',
            icon: 'http://img.c.irunyan.com/img/tuijian.svg'
          },
          {
            label: '日常护理',
            icon: 'http://img.c.irunyan.com/img/tuijian.svg'
          },
          {
            label: '日常护理',
            icon: 'http://img.c.irunyan.com/img/tuijian.svg'
          }
        ]
      },
      getGoodsList: function () {
        this.goods_list = [
          {
            url: 'http://iryoss2.oss-cn-beijing.aliyuncs.com/goods/xyy/m.jpg',
            title: '乔致经典留香洗衣液',
            price: '29.8',
            num: '26'
          },
          {
            src: 'http://iryoss2.oss-cn-beijing.aliyuncs.com/goods/xyy/m.jpg',
            tex: '乔致经典留香洗衣液',
            price: '29.8',
            num: '26'
          },
          {
            src: 'http://iryoss2.oss-cn-beijing.aliyuncs.com/goods/xyy/m.jpg',
            title: '乔致经典留香洗衣液',
            price: '29.8',
            num: '26'
          },
          {
            src: 'http://iryoss2.oss-cn-beijing.aliyuncs.com/goods/xyy/m.jpg',
            title: '乔致经典留香洗衣液',
            price: '29.8',
            num: '26'
          }
        ]
        for (let i = 0; i < this.goods_list.length; i++) {
          if (this.goods_list[i].url){
            this.goods_list[i].src = this.goods_list[i].url
          }
          if (this.goods_list[i].tex) {
            this.goods_list[i].title = this.goods_list[i].tex
          }
        }
      }
    },
    watch: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .swiper {
    height: 5rem;
  }

  .goods_class {
    width: 100%;
    min-height: 2.9rem;
    background-color: #fff;
  }

  .goods_class > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .goods_class > ul > li {
    width: 2rem;
    height: 2.5rem;
    margin: 0.2rem;
    text-align: center;
  }

  .goods_class > ul > li > img {
    width: 2rem;
    height: 2rem;
    display: block;
  }

  .goods_class > ul > li > span {
    width: 2rem;
    height: .5rem;
    text-align: center;
    font-size: 0.4rem;
  }

  .goods_list {
    width: 10rem;
  }

  .goods_list > li {
    width: 4.8rem;
    height: 5rem;
    display: inline-block;
  }

  .goods_list > li > img {
    width: 100%;
  }
</style>
