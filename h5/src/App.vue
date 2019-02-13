<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view class="center"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName:'right'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'right' : 'left'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  height: 100%;
}

.left-enter{
  transform:translateX(100%);
}
.left-enter-to{
  transform:translateX(0);
}

.left-enter-active{
  transition: .3s;
}
.left-leave{
  transform:translateX(0);
}
.left-leave-to{
  transform:translateX(-100%);
}
.left-leave-active{
  transition: .3s;
}

.right-enter{
    transform:translateX(-100%);
  }
  .right-enter-active{
    transition: .3s;
  }
  .right-leave-to{
    transform:translateX(100%);
  }
  .right-leave-active{
    transition: .3s;
  }
</style>
