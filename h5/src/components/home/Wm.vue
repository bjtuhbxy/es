<template>
  <div class="">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <ul class="swiper-slide">
          <li class="swiper-main" v-for="item in foodTypes">
            <img
              :src="item.img">
            <div class="swiper-title">{{item.title}}</div>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul class="swiper-slide">
          <li class="swiper-main" v-for="item in foodTypes">
            <img
              :src="item.img">
            <div class="swiper-title">{{item.title}}</div>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
    <div class="recommend">推荐商家</div>
    <div id="shopSort" :class="sort?'mountting' : '' ">
      <span class="shop-option">综合排序</span>
      <span class="shop-option">距离最近</span>
      <span class="shop-option">品质联盟</span>
      <span class="shop-option">筛选</span>
    </div>
    <div>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
      123<br/>
    </div>
    <button @click="toDemo">demo</button>
  </div>
</template>

<script>
  export default {
    name: 'Wm',
    data() {
      return {
        sort:false,
        selected: '外卖',
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
    methods: {
      toDemo: function () {
        this.$router.push({//你需要接受路由的参数再跳转
          path: '/home/demo'
        });
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#shopSort').offsetTop
        scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false;
      },
    },
    watch: {

    },
    mounted() {
      window.addEventListener('scroll',()=>{
        let top = document.documentElement.scrollTop
        if (top >= 200){
          this.sort = true
        }else {
          this.sort = false
        }
      },false)
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
    width: 0.8rem;
    height: 0.8rem;
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
  #shopSort{
    background: aquamarine;
    display: flex;
    flex-wrap: wrap;
  }
  .shop-option{
    flex: 1;
    font-size: 0.35rem;
  }
  .mountting{
    position: fixed;
    top: 0;
    width: 10rem;
  }
  .nomountting{
    position: relative;
  }
</style>
