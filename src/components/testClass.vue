<template>
<!-- 练习绑定多个class -->
<!-- 其中 <div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
static类名将始终存在影响
使用
-->
  <div  v-bind:class="classObject">
    redgdfdfg
  </div>
</template>
<script>
export default {
  data(){
    return{  
      classObject:{
        list:false,
        active: false, 
        'text-danger': false
      }
    }
  },
}
</script>
<style scoped>
.list{
  position: absolute;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}
.active{
  position:absolute ;
  left: 100px;
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
}
.text-danger{
  position:absolute ;
  left: 150px;
   width: 70px;
  height: 70px;
  background: palegreen;
}
</style>