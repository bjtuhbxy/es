<template>
  <div class="page">
    <div class="navbar">
        首页
    </div>
    <!-- Additional "tabbar-labels" class -->
    <div class="toolbar tabbar-labels">
      <div class="toolbar-inner">
        <a href="#tab-1" class="tab-link tab-link-active">
          <!-- Different icons for iOS and MD themes -->
          <i class="icon f7-icons ios-only">icon</i>
          <i class="icon material-icons md-only">email</i>
          <!-- Label text -->
          <span class="tabbar-label">首页</span>
        </a>
        <a href="#tab-2" class="tab-link">
          <i class="icon f7-icons ios-only">icon<span class="badge color-red">5</span></i>
          <i class="icon material-icons md-only">today<span class="badge color-red">5</span></i>
          <span class="tabbar-label">订单</span>
        </a>
        <a href="#tab-3" class="tab-link">
          <i class="icon f7-icons ios-only">icon</i>
          <i class="icon material-icons md-only">file_upload</i>
          <span class="tabbar-label">我的</span>
        </a>
      </div>
    </div>
    <!-- Tabs -->
    <div class="tabs">
      <!-- First tab, active -->
      <div class="page-content tab tab-active" id="tab-1">
        <div class="block">
          <p><b>Tab 1 content</b></p>
          ...
        </div>
      </div>
      <!-- Second tab -->
      <div class="page-content tab" id="tab-2">
        <div class="block">
          <p><b>Tab 2 content</b></p>
          ...
        </div>
      </div>
      <!-- Third tab -->
      <div class="page-content tab" id="tab-3">
        <div class="block">
          <p><b>Tab 3 content</b></p>
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  line-height: 44px;
}
</style>
