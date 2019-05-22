<template>
  <div id="app">
    <Tip msg="123"/>
    <button @click="change">{{$store.state.btn.show}}</button>
  </div>
</template>

<script>
import Tip from './components/Tip.vue'

export default {
  name: 'app',
  components: {
    Tip
  },
  methods: {
    change () {
      $store.commit('switchTipShow')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
