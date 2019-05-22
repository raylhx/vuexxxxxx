<template>
  <div class="tip">
    <h1 v-show="$store.state.btn.show">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Tip',
  props: {
    msg: String
  },
  computed: {
    isShow () {
      return false
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
