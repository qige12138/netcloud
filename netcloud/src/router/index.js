import Vue from 'vue'
import Router from 'vue-router'

import Volume from '@/components/volume/volume'
import Netmusic from '@/components/netmusic/netmusic'
import Circle from '@/components/circle/circle'
import Music from '@/components/netmusic/music'
import Video from '@/components/netmusic/video'
import Station from '@/components/netmusic/station'
import List from '@/components/common/list'
import Sing from '@/components/common/sing'

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
      component: Netmusic,
      children:[
        {
          path: '/',
          redirect: '/music'
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
    },
    {
      path: '/circle',
      component: Circle
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/sing',
      component:Sing
    }
    

  ]
})
