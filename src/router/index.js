import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Liked from '@/views/Liked'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/liked',
      name: 'Liked',
      component: Liked
    },
  ]
})
