<template>
  <div class="hello">
    <div>
      <h2>a{{ this.$store.state.count }}</h2>
      <h2>b{{this.$store.getters.increament}}</h2>

      <p>count值：c{{this.$store.state.count}}</p>
      <button @click="addFun">+</button>
      <button @click="reductionFun">-</button>
      <p>d{{count1}}</p>
      <p>{{list}}</p>
    </div>
    <!-- <p>sfjdk</p> -->
    <first-compute></first-compute>
  </div>
</template>

<script>
import FirstCompute from "./FirstCompute";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  components: {
    FirstCompute
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      count1: state => state.count,
      // list:state => state.list,
      
    }),

  },
  methods: {
    addFun() {
      this.$store.dispatch("add");
    },
    reductionFun() {
      this.$store.dispatch("reduction", 5);  
        
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
