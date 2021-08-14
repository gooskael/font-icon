<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld ref="HelloWorld" msg="Welcome to Your Vue.js App"/>
    <button @click="getSon">get son</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import EventBus from '../utils/bus'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  provide() {
    return {
      parentData: 'parent data',
    }
  },
  data() {
    return {
      parentTitle: 'this is parent title',
    }
  },
  mounted() {
    EventBus.$on('emitBus', value => {
      console.log(value);
    })
  },
  methods: {
    getSon() {
      // console.log(this.$children[0]);
      // console.log(this.$refs['HelloWorld'].sonTitle);
    }
  }
}
</script>
