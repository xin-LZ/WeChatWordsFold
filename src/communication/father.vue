<template>
  <!-- <div class="father">
    <p>{{msg}}</p>
    <son-msg @func="childHandler"></son-msg>
  </div> -->
  <div class="father">
    <son-msg 
    :childp1="chiled1"
    :childp2="chiled2"
    @test1="onTest1"
    @test2="onTest2">
    </son-msg>  
  </div>
</template>

<script>
import sonMsg from "./son";
  export default {
    name: "father",
    components: {
      sonMsg,
    },
    data() {
      return {
        // msg:'ga',
        'chiled1':'haha1',
        'chiled2':'gege2'
      };
    },
    provide:{
      for:'他爹'
    },
    methods: {
      // childHandler(val){
      //   console.log(val)
      //   this.msg= val
      // }
      onTest1(){
        console.log('test1 running...')
      },
      onTest2(){
        console.log('test2 running...')
      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
