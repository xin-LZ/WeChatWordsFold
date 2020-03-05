<template>
  <div class="child">
    <!-- 验证$emit，子传父 -->
    <!-- <p>这是一个子组件</p>
    <input @click="sendMsg" type="button" value="给父组件传递信息"/>  -->
    <p>儿子组件</p>
    <p>props:{{childp1}}</p>
    <p>$attrs:{{$attrs}}</p>
    <sun-zi v-bind="$attrs" v-on="$listeners"></sun-zi>
  </div>
</template>
<script>
import sunZi from './sun'
  export default {
    name: "son",
    props:['childp1'],
    components:{
      sunZi,
    },
    data() {
      return {
        //  msg:'我是son组件'
      };
    },
    inheritAttrs:false,
    methods: {
      // sendMsg(){
      //   console.log(this.msg)
      //   this.$emit('func',this.msg)
      // }
    },
    mounted(){
      this.$emit('test1')
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
