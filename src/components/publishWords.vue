<template>
  <div>
    <div class="pub-head">
      <span>发表文字</span>
    </div>
    <div>
      <!-- <input type="text" placeholder="这一刻你的想法..."> -->
      <form id="formCommit" action @submit.prevent="submit" >
        <textarea
          :ref="message"
          @input="updateValue"
          value="value"
          name="thinkStorm"
          id="editor"
          cols="25"
          rows="7"
          wrap="hard"
          placeholder="这一刻你的想法..."
          v-model="message"
        ></textarea>
        <input type="submit"  value="发表" />
      </form>
    </div>
  </div>
</template>

<script>
import vList from "./vList";
var  pasteStatus = false;
export default {
  name: "publishWords",
  components: {
    vList
  },
  data() {
    return {
      // text:'hello'
      message: "",
      list: [],
    
    };
  },
  mounted : function () {
    this.$nextTick(function(){
        document.querySelector('#editor').addEventListener('paste', pasteFunction=>{
        pasteStatus = true
        console.log(pasteStatus)
      })
    })

  },
  methods: {
    submit: function() { 
      if (this.message === "") {
				window.alert("请输入留言内容")
			  return
      }     
        // console.log(pasteStatus)
      // let test1 = document.querySelector('textarea')
      // test1.onpaste = e =>{
      //    let clipboardData = (e.clipboardData || window.clipboardData); // 兼容处理

      //   console.log('要粘贴的数据', clipboardData.getData('text'));
      // }
      // let pasteEle= document.querySelector('textarea')
      // pasteEle.addEventListener("paste", function (e){
      //   if ( !(e.clipboardData && e.clipboardData.items) ) {
      //     console.log("复制的文字");
      //     return;
      //     }
      //   });


      var comment = {"pasteStatus": pasteStatus, message: this.message };
      var list = JSON.parse(localStorage.getItem("cmts") || "[]");
      list.unshift(comment);
      window.localStorage.setItem("cmts", JSON.stringify(list));
      this.message = "";
      this.pasteStatus = ""
      this.$router.push({path:'/vList'})	
    },
    updateValue: function(event) {
      this.$emit("input", event.target.value);
    },
    focus: function() {
      this.$refs.message.focus();
    }
  },
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pub-head {
  position: relative;
  width: 100%;
  height: 40px;
  /* background: gray; */
}
.pub-head span {
  position: absolute;
  left: 10px;
  height: 40px;
  line-height: 40px;
}
.pub-head button {
  position: absolute;
  right: 5px;
  font-size: 16px;
  top: 50%;

  transform: translateY(-50%);
  background: green;
  color: white;
  border: 0px;
  width: 50px;
  height: 30px;
}
textarea {
  position: relative;
  top: 1px;
  width: 99%;
  height: 100px;
  border: 0;
  padding: 4px 0;
  font-size: 15px;
	background-color:rgba(241,241,241,.98);
}
input {
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 16px;
  background: green;
  color: white;
  border: 0px;
  width: 50px;
  height: 30px;
}
</style>
