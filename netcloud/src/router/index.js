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
import Slide from '@/components/netmusic/slide'
import Tab from '@/components/netmusic/tab'
import Songtype from '@/components/netmusic/songtype'
import Songlist6 from '@/components/netmusic/songlist6'
import Songex from '@/components/netmusic/songex'

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
        },
        {
          path:'/slide',
          component:Slide
        },
        {
          path:'/tab',
          component:Tab
        },
        {
          path:'/songtype',
          component:Songtype
        },
        {
          path:'/songlist6',
          component:Songlist6
        },
        {
          path:'/songex',
          component:Songex
        }
      ]
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
    }
    

  ]
})
