<template>
  <div class="list">
    <!-- <div  v-if="this.list.length"> -->
        <div v-for="(item, index) in list" :key="index" class="list-item">         
            <div class="list-msg">
              <p class="name">自新</p>
              <p :class="{content:item.isActive,'content-copy':item.hasError}">{{item.message}}</p>
            </div>
            <div class="list-all" v-if="item.show">
              <a @click="listChange(index)">全文</a>
            </div>
        </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name:"vListVuex",
  data(){
    return{
      // list:[],
      // buttonShow:[],
      isActive: true,
      hasError: false
    }
  },
  created(){
    this.getList()
  },
  computed:{
     ...mapGetters({
      list: 'sendMessage'
    })
  },
  mounted:function(){

  },
  methods: {
  
    getList:function(){

      // console.log(this.list[1].pasteStatus)
      // let newArr = list.map(val => val.message)
      // console.log(newArr[0].length);
      console.log(this.list);
      console.log(this.list.length);
      // console.log(this.list[0].message);

      for(var i=0; i < this.list.length; i++ ){
        if(this.list[i].pasteStatus === false){
          if(this.list[i].message.length < 100){
            this.list[i].show = false
            this.list[i].isActive= true
            this.list[i].hasError= false
          }else{
            this.list[i].show = true
            this.list[i].isActive= true
            this.list[i].hasError= false
          }
          
        }else{
          if(this.list[i].message.length < 100){
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
  },
  
}
</script>
<style scoped>
.list{
  position: relative;
  width: 98%;

}
.list-item{
  position: relative;
  border-bottom: 1px solid #e3e8ee;
  
}

.list-msg{
  position: relative;
  margin-top: 5px;
  padding-left: 50px;
 
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
  width: 100%;
    text-align: left;
 
}
.content-copy{
  position: relative;
  margin-top: 5px;
  margin-bottom: 20px; 
 width: 100%;
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
  left: 50px;
  top:-13px;
    color: #3d85c6;
    font-size: 13px;
}
</style>