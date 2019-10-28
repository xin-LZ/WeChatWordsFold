import  Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    count:3
  },
  getters:{
    increament:function(state){
      return state.count + 1

    },
  },
  mutations:{
    add(){
      this.state.count = this.state.count +1;
    },
    reduction(state,n){
      this.state.count -= n
    }
  },
  actions:{
  add(context){
    context.commit("add")
  },
    reduction(context,n){
    context.commit("reduction",n);
    }
  },
})



export default store
