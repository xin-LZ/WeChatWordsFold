<template>
<div>
  <!-- 路由跳转，预处理联系 -->
  <router-link to='/home'>首页</router-link>
  <router-link to='/about'>关于我</router-link>

  </div>
</template>

<script>
import HomeWeb from "./Home"
  export default {
    name: 'index',
    data () {
      return {
       

        }
    },
 components:{
     HomeWeb
 },
    watch:{
     
    },
    created:function(){
  
    },
    computed:{
      
    },
 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
