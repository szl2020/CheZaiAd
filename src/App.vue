<!--
 * @Author: your name
 * @Date: 2021-03-15 16:40:05
 * @LastEditTime: 2021-03-16 15:00:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CheZaiAd\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
   
  },
  methods:{
  }
};
</script>

<style>
*{
  list-style: none;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main{
  height: 400px;
  width: 500px;
}
#content{
  margin-top: 40px;
  margin-left: 40px;
  width: 100%;
}
</style>
