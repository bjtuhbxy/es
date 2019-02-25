<template>
  <div class="">
    <span v-html="food" @click="test"></span>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'Find',
  data () {
    return {
      timer: null,
      food: '你想吃啥，点我开始吧',
      foodList: [
        // '南城香', '老家肉饼','沙县小吃','肯德基','麦当劳'
      ],
      elm:{}
    }
  },
  mounted() {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom:4,
      center: [116.397428, 39.90923],
      mapStyle:'amap://styles/a92c23c68ca519ec235825c3be99462b'
      //前往创建自定义地图样式：https://lbs.amap.com/dev/mapstyle/index
    });
    this.elmAction()
  },
  methods: {
    getElmData() {
      let tmp = this.elm.items;
      for (let i = 0; i <tmp.length ; i++) {
        this.foodList.push(tmp[i].restaurant.name)
      }
      console.log(this.foodList);
    },
    test:function () {
      if (this.timer == null){
        let i=0;
        this.timer= setInterval(()=>{
          if (i<this.foodList.length){
            i++;
          } else{
            i=0;
          }
          this.food = this.foodList[i];
        },30)
      } else{
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    elmAction: function () {
      // let longitude=116.41465
      // let latitude = 39.86394
      let longitude=116.397699
      let latitude = 39.855714
      let count = 20
      let url = '/elm/restapi/shopping/v3/restaurants?latitude='+latitude+'&longitude='+longitude+'&keyword=&offset=0&limit='+count+'&extras[]=activities&extras[]=tags&terminal=h5&brand_ids[]=&restaurant_category_ids[]=209&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=219&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=263&restaurant_category_ids[]=218&restaurant_category_ids[]=234&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=211&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=264'
      this.$http.get(url).then((response)=>{
        console.log(response);
        this.elm = response.data
        this.getElmData()
      }).catch((response)=>{
        console.log(response);
      })
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {width:100%; height: 380px; background: aquamarine;}
</style>
