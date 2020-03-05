import Vue from 'vue'
import Router from 'vue-router'
import publishWords from '@/components/publishWords'
import vList from '@/components/vList'
import publishWordsVuex from '@/weChatVuex/publishWordsVuex'
import vListVuex from '@/weChatVuex/vListVuex'
import hello from '@/components/HelloWorld'
import test from '@/components/test'
import vListClick from '@/components/vListClick'
import swiperBaner from '@/components/swiperBaner'
import testClass from '@/components/testClass'
import index from '@/prerender/index'
import Home from '@/prerender/Home'
import About from '@/prerender/About'
import TestPrerender from '@/prerender/TestPrerender'
import father from '@/communication/ifTest'
import son from '@/communication/son'

Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    /*
      *使用本地缓存存储数据，
      *二级界面进行获取数据
    */
    {
      path: '/publishWords',
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
   /*
      *折叠展开测试，
      *
    */
   {
    path: '/test',
    name: 'test',
    component: test
  },
   /*
      *折叠展开文件，
      *
    */
  {
    path: '/vListClick',
    name: 'vListClick',
    component: vListClick
  },
  /*
  *swiper轮播，实现中间图片放大效果
  */
  {
    path:'/swiperBaner',
    name:'swiperBaner',
    component:swiperBaner
  },
  /*
  *绑定class练习
  */
  {
    path:'/testClass',
    name:'testClass',
    component:testClass
  },
  /*
  *router跳转，和预处理练习
  */
  {
    path:'/index',    //当作入口文件/router跳转，和预处理练习
    name:'index',
    component:index
  },
  {
    path:'/Home',    //主页/router跳转，和预处理练习
    name:'Home',
    component:Home
  },
  {
    path:'/About',    //关于我/router跳转，和预处理练习
    name:'About',
    component:About
  },
  {
    path:'/TestPrerender',    //测试页/router跳转，和预处理练习
    name:'TestPrerender',
    component:TestPrerender
  },
   /*
  *组件之间通信联系
  */
 {
  path:'/',   
  name:'father',
  component:father
},
{
  path:'/son',   
  name:'son',
  component:son
},
  ]
})
