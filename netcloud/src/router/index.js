import Vue from 'vue'
import Router from 'vue-router'

import Volume from '@/components/volume/volume'
import Netmusic from '@/components/netmusic/netmusic'
import Circle from '@/components/circle/circle'
import Collectsing from '@/components/volume/collectsing'
import Netheader from '@/components/netmusic/netheader'
import Music from '@/components/netmusic/music'
import Video from '@/components/netmusic/video'
import Station from '@/components/netmusic/station'

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
      path: '/collectsing',
      component: Collectsing
    },
    {
      path: '/circle',
      component: Circle
    },
    {
      path:'/netheader',
      component:Netheader
    },
    {
      path:'/music',
      component:Music
    },
    {
      path:'/video',
      component:Video
    },
    {
      path:'/station',
      component:Station
    }

  ]
})
