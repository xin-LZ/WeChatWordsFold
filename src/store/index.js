import  Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex);

   /*第一次学习用vuex*/
const state={
  count:3,

  list:[
    // pasteStatus: '',
    // message: ''
  ]

};
const getters={
  increament:function(state){
    return state.count + 1
  },

  sendMessage:function(state){
    return state.list
  }

};

 const  mutations={
    add(){
      this.state.count = this.state.count +1
    },
    reduction(state,n){
      this.state.count -= n
    },

    inputMessage(state,comment){
      // this.state.list = this.state.list+comment
      this.state.list.unshift(comment);
    }

  };

  const actions={
    add(context){
      context.commit("add")
    },
    reduction(context,n){
      context.commit("reduction",n);
    },

    inputMessage(context,comment){
      context.commit("inputMessage",comment)
    }
  };

const store = {
 
}

/*第二次学习用vuex*/

export default new Vuex.Store ({
  store,
  state,
  getters,
  mutations,
  actions
})
