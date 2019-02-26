import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Demo from '@/components/Demo'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Detail from '@/components/home/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/home/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/t',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
