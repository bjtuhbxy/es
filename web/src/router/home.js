import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/mine'

Vue.use(Router)

export default {
  routes: [
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
}
