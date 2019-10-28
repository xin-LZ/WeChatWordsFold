<template>
  <div class="haha">
<!--计算属性初步尝试-->
  <!-- <p>{{message}}</p>
    <p>{{reversedMessage}}</p> -->


<!--计算属性和侦听属性-->
<!--    <div>{{ firstName}}</div>-->
<!--    <div>{{ lastName}}</div>-->
<!--  <div>{{ fullName}}</div>-->

    <!--侦听器-->
    <p>
      问一个问题：
      <input  v-model="question"/>
    </p>
    <p>{{answer}}</p>
  </div>
</template>
<script>
    export default {
        name: 'FirstCompute',
        data () {

         return {
            //  message:'hello'

          // firstName:'',
          // lastName: 'Bar',
          // fullName:'Foo Bar',

             question:'',
             answer:'我现在不能给你答案，直到你问出一个问题'
            }
        },
        watch:{
            // firstName:function(val){
            //   this.firstName = this.fullName - this.lastName
            // },
            // lastName:function(val){
            //   this.lastName = this.firstName + ' '+ val
            // }
          question:function (newQuestion,oldQuestion) {
              this.answer = '等你...'
              this.debouncedGetAnswer()
          }


        },
        created(){
            this.debouncedGetAnswer = _debounce(this.getAnswer,500)
        },
        computed:{
            // reversedMessage:function () {
            //     return this.message.split('').reverse().join('')

            // }
        },
      methods:{
            getAnswer: function () {
                if (this.question.indexOf('?') === -1){
                    this.answer = '问题经常包含一个问题标记'
                    return
                }
                this.answer='想一想'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = '出错. ' + error
                    })
            }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.haha{
  position: relative;
  top: 50px;
  display: block;
   width: 100%;
  height: 100px;
  /*background: red;*/
}
</style>
