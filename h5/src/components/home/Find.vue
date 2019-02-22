<template>
  <div class="">
    <span v-html="food" @click="test"></span>
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
        '南城香', '老家肉饼','沙县小吃','肯德基','麦当劳'
      ]
    }
  },
  methods: {
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
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
