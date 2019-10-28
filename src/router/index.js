import Vue from 'vue'
import Router from 'vue-router'
import publishWords from '@/components/publishWords'
import vList from '@/components/vList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'publishWords',
      component: publishWords
    },
    {
      path: '/vList',
      name: 'vList',
      component: vList
    },
    
  ]
})
