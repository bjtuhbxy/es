// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Framework7 from 'framework7'

import Framework7 from 'framework7/framework7.esm.bundle.js'
// Import additional components
import Searchbar from 'framework7/components/searchbar/searchbar.js'
import Calendar from 'framework7/components/calendar/calendar.js'
import Popup from 'framework7/components/popup/popup.js'

// Import F7 Styles
import 'framework7/css/framework7.css'

// Install F7 Components using .use() method on class:
Framework7.use([Searchbar, Calendar, Popup]);

// Init app
var app = new Framework7({/*...*/});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
