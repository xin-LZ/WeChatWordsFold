import Vue from 'vue'
import Router from 'vue-router'
import publishWords from '@/components/publishWords'
import vList from '@/components/vList'
import publishWordsVuex from '@/weChatVuex/publishWordsVuex'
import vListVuex from '@/weChatVuex/vListVuex'
import hello from '@/components/HelloWorld'

Vue.use(Router)


export default new Router({
  routes: [
    /*
      *使用本地缓存存储数据，
      *二级界面进行获取数据
    */
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
    /*
      *使用vuex状态管理存储数据，
      *二级界面使用vuex获取数据
    */
   {
    path: '/publishWordsVuex',
    name: 'publishWordsVuex',
    component: publishWordsVuex
  },
  {
    path: '/vListVuex',
    name: 'vListVuex',
    component: vListVuex
  },
  {
    path: '/hello',
    name: 'hello',
    component: hello
  },
  ]
})
