<template>
  <div class="list">
    <!-- <div  v-if="this.list.length"> -->
        <div v-for="(item, index) in list" :key="index" class="list-item">         
            <div class="list-msg">
              <p class="name">自新</p>
              <p :class="{content:item.isActive,'content-copy':item.hasError,}">{{item.message}}</p>
            </div>
            <div class="list-all" v-if="item.show">
              <a @click="listChange($enent)">{{exchangeButton ? '全文' : '收起'}}</a>
            </div>
        </div>
  </div>
</template>
<script>
export default {

  data(){
    return{
      isActive: true,
      hasError: false
    }
  },
  created(){
    this.getList()
  },
  computed:{
  },
  mounted:function(){
  },
  methods: {
 
    getList:function(){
      var list = JSON.parse(localStorage.getItem("cmts") || '[]') 
      this.list=list 
      console.log(list);
      
      for(var i=0; i < list.length; i++ ){
        if(list[i].pasteStatus === false){
          if(list[i].message.length < 100){
            this.list[i].show = false
            this.list[i].isActive= true
            this.list[i].hasError= false
          }else{
            this.list[i].show = true
            this.list[i].isActive= true
            this.list[i].hasError= false
          }
          
        }else{
          if(list[i].message.length < 100){
            this.list[i].show = false
            this.list[i].isActive= true
            this.list[i].hasError= false
          }else{
            this.list[i].show = false
            this.list[i].isActive= false
            this.list[i].hasError= true
          }
          
          this.list[i].show=false
         }
      }
     },
    listChange:function(e){
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
  /* width: 100%; */
    text-align: left;
    word-break: break-all;
 
}
.content-copy{
  position: relative;
  margin-top: 5px;
  margin-bottom: 20px; 
  width: 98%;
    /* text-align: left; */
    white-space:nowrap;
    /* word-wrap:break-word; */
    /* word-break:break-all; */
    background-color: #999494;
    text-overflow: ellipsis;
    overflow: hidden;

}
.list-all{
  position: relative;
  display:flex ;
  margin-left: 50px;
  top:-13px;
    color: #3d85c6;
    font-size: 13px;
}
</style>