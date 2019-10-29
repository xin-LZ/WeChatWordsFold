<template>
  <div class="list">
    <!-- <div  v-if="this.list.length"> -->
        <div v-for="(item, index) in list" :key="index" class="list-item">         
            <div class="list-msg">
              <p class="name">自新</p>
              <p :class="{content:isActive,'content-copy':hasError}">{{item.message}}</p>
            </div>
            <div class="list-all" v-if="buttonShow">
              <a @click="listChange(index)">全文</a>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  // props: {
  //   list: {
  //     type: Array,
  //     default: function () {
  //       return []
  //     }
  //   }
  // },
  data(){
    return{
      // list:[],
      buttonShow: true,
      isActive: true,
      hasError: false

    }
  },
  created(){
    this.getList()
  },
  computed:{
    
  },
  methods: {
    getList:function(){
      var list = JSON.parse(localStorage.getItem("cmts") || '[]') 
      this.list=list 
      // console.log(this.list);
      // var arr = Object.values(list)
      // console.log(arr.length);
      // console.log(arr)    
      console.log(this.list[1].pasteStatus)
      let newArr = list.map(val => val.message)
      console.log(newArr[0].length);
      for(var i=0; i < list.length; i++ ){
        if(list[i].pasteStatus === false){
          // if(newArr[i].length < 100){
          //   return this.buttonShow = false
          //   return this.isActive = true
          //   return this.hasError = false
          // }else{
          //   return this.buttonShow = true
          //   return this.isActive = true
          //   return this.hasError = false
          // }
            this.buttonShow = true
        }else{
           this.buttonShow = false
          }
          return 
        }
      //  var messageLength= newArr[1].length
      // for(let i=0 ; len = newArr.length, i < len; i++){
        
      //   var messageLength= newArr[i].length
      //   console.log(messageLength);
      // }
     
      
    
     }
  },
}
</script>
<style scoped>
/* .list{
  position: relative;
  width: 98%;

} */
.list-item{
  position: relative;
  border-bottom: 1px solid #e3e8ee;
  
}

.list-msg{
  position: relative;
  margin-top: 5px;
  margin-left: 50px;
    display:flex ;
    flex-direction: column;
    align-items: flex-start;
}
.name{
  color: #3d85c6;
}
.content{
  position: relative;
  margin-top: 5px;
  margin-bottom: 20px; 
    text-align: left;
}
.content-copy{
  position: relative;
  margin-top: 5px;
  margin-bottom: 20px; 
    text-align: left;
    white-space:nowrap;
    word-wrap:break-word;
    word-break:break-all;
    background-color: #999494;
}
.list-all{
  position: relative;
  display:flex ;
  left: 50px;
  top:-13px;
    color: #3d85c6;
    font-size: 13px;
}
</style>