<template>
  <div class="sun">
      <p>孙子C组件</p>
      <p>props:{{childp2}}</p>
      <p>$attrs:{{$attrs}}</p>
  </div>
</template>
<script>
  export default {
    name: "sun",
    props:['childp2'],
    data() {
      return {
        
      };
    },
    inheritAttrs:false,
    methods: {
     
    },
    mounted(){
        this.$emit('test2')
    }
  };
</script>
