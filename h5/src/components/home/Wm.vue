<template>
  <div class="">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <ul class="swiper-slide">
          <li class="swiper-main" v-for="(item,index) in foodTypes" :key="index">
            <img
              :src="item.img">
            <div class="swiper-title">{{item.title}}</div>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul class="swiper-slide">
          <li class="swiper-main" v-for="(item,index) in foodTypes" :key="index">
            <img
              :src="item.img">
            <div class="swiper-title">{{item.title}}</div>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
    <div class="recommend">推荐商家</div>
    <div id="shopSort" :class="sort?'mountting' : '' " ref="sort">
      <span class="shop-option" @click="zhpx" :class="sortCard ? 'shop-option_s' : ''">
        {{sortValue[0]}}
        <i class="down"></i>
      </span>
      <span class="shop-option">{{sortValue[1]}}</span>
      <span class="shop-option">{{sortValue[2]}}</span>
      <span class="shop-option icon-shaixuan1">{{sortValue[3]}}</span>
      <div class="sort_card" v-if="sortCard" @click="sortCard = false">
        <ul class="sort_list">
          <li @click="sypx(item)" v-for="(item,index) in sortList" :key="index">
            <span v-if="item == sortValue[0]" class="active">{{item}}</span>
            <span v-else>{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <seller v-for="(item,index) in 10" :key="index"></seller>
    </div>
    <button @click="toDemo">demo</button>
  </div>
</template>

<script>
  import seller from './seller'
  export default {
    name: 'Wm',
    data() {
      return {
        sort: false,//排序吸顶样式
        sortCard: false,//排序面板
        selected: 'wm',// 默认选中的页签
        sortValue: [
          '综合排序', '距离最近', '品质联盟', '筛选'
        ],
        sortList: [
          '综合排序', '好评优先', '销量优先', '起送价最低', '配送最快'
        ],
        foodTypes: [{
          img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '美食'
        },
          {
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          },
          {
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          },
          {
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          },
          {
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          },
          {
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          },
          {
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          },
          {
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            title: '美食'
          },
        ]
      }
    },
    components: {
      seller,
    },
    methods: {
      toDemo: function () {
        this.$router.push({//你需要接受路由的参数再跳转
          path: '/home/demo'
        });
      },
      zhpx: function () {
        document.documentElement.scrollTop = 200
        this.sortCard = !this.sortCard
      },
      sypx: function (item) {
        this.sortValue[0] = item
      }
    },
    watch: {
      sortCard: function (n, o) {
        if (n) {
          //滚动冒泡
        }
      },

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
  ul, li {
    padding: 0;
    margin: 0;
    list-style: none
  }

  .swiper-slide {
    display: flex;
    flex-wrap: wrap;
    margin: 0.2rem 0;
  }

  .swiper-main {
    width: 25%;
  }

  .swiper-main img {
    margin-bottom: 0.1rem;
    width: 2rem;
    height: 2rem;
  }

  .swiper-title {
    text-align: center;
    font-size: 0.2rem;
  }

  .mint-swipe {
    height: 140px;
  }

  .mint-swipe-indicator {
    width: 12px !important;
    height: 4px !important;
    border-radius: 14%;
  }

  #shopSort {
    text-align: center;
    color: black;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    z-index: 10000;
  }
  .shop-option {
    flex: 1;
    font-size: 1rem;
    border-bottom: 1px solid #ddd;
  }
  .shop-option_s {
    color: #3190e8;
    font-weight: 700;
  }
  .mountting {
    position: fixed;
    top: 0;
    width: 10rem;
    background: white;
  }

  .nomountting {
    position: relative;
  }

  .sort_card {
    position: fixed;
    top: 31px;
    bottom: 0rem;
    background-color: rgba(0, 0, 0, .3);
    width: 100%;
    line-height: 2rem;
  }

  .sort_list {
    text-align: left;
    padding: 0 .53rem;
    background: white;
  }
  .sort_list .active{
    color: #3190e8;
  }
  .down{
    width: 0;
    height: 0;
    border:.1rem solid transparent;
    position: absolute;
    top:50%;
    border-top-color:#666;
    margin-top:-1.1rem;
    margin-left: 0.05rem;
  }
  .icon-shaixuan1 {


  }
</style>
