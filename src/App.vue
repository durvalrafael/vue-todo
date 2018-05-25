<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Todo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Todo from './components/Todo.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Todo,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
