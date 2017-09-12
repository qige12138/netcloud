import Vue from 'vue'
import Router from 'vue-router'

import Volume from '@/components/volume/volume'
import Netmusic from '@/components/netmusic/netmusic'
import Circle from '@/components/circle/circle'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/volume'
    },
    {
      path: '/volume',
      component: Volume
    },
    {
      path: '/netmusic',
      component: Netmusic
    },
    {
      path: '/circle',
      component: Circle
    }

  ]
})
