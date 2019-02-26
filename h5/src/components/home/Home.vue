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
    <!-- 商品列表 -->
    <ul class="goods_list">
      <li v-for="(item,index) in goods_list" :key="index">
        <a href="#">
          <div class="">
            <img :src="item.src" alt="">
            <p>{{item.title}}</p>
            <p>
              <span>¥ <big>{{item.price}}</big></span>
              <span>{{item.num}}人付款</span>
            </p>
          </div>
        </a>
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
            title: '乔致经典留香洗衣液乔致经典留香洗衣液乔致经典留香洗衣液',
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
    height: 2rem;
    margin: 0.2rem;
    text-align: center;
  }

  .goods_class > ul > li > img {
    width: 1.2rem;
    height: 1.2rem;
    display: block;
    margin: 0.15rem auto;
  }

  .goods_class > ul > li > span {
    width: 2rem;
    height: .5rem;
    text-align: center;
    font-size: 0.4rem;
  }

  .goods_list {
    width: 10rem;
    margin-top: 0.2rem;
  }

  .goods_list > li {
    width: 4.8rem;
    margin: 0.05rem;
    height: 6.4rem;
    display: inline-block;
    background-color: #fff;
  }

  .goods_list > li img {
    width: 100%;
  }
  .goods_list > li p:nth-of-type(1){
    height: 1.1875rem;
    margin: 0 0.2rem;
    text-align: left;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .goods_list > li p:nth-of-type(2){
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
   .goods_list > li p:nth-of-type(2) span:nth-of-type(1){
     margin: 0 0.2rem;
     color: #f23030;
   }
   .goods_list > li p:nth-of-type(2) span:nth-of-type(2){
     margin: 0 0.2rem;
   }
   .goods_list > li p:nth-of-type(2) span:nth-of-type(1) big{
     font-size: 0.5rem;
   }
</style>
