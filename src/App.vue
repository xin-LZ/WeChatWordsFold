<template>
  <div id="app">
  <!-- <router-link to='/'>首页</router-link>
  <router-link to='/about'>关于我</router-link> -->
  <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body  {   
  padding: 0;
  margin: 0px;
}
p{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/

}
</style>
