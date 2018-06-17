<template>
  <div id="app">
    <img src="./images/logo.png" style="cursor:pointer" @click="godetail">
    <hello></hello>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import Hello from 'components/Hello/Hello'
  import appConfigs from 'src/configs'

  export default {
    name: 'app',
    components: {
      Hello
    },
    methods:{
      godetail(){
        window.location.href = this.HTTPLOCAT + "/detail.html"
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
