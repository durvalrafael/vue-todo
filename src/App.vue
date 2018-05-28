<template>
  <div id="app" class="container-fluid">
    <div class="row d-flex align-items-center justify-content-center app-header">
      <h1>Todo App</h1>
    </div>
    <div class="row d-flex align-items-center justify-content-center app-main">
      <GetTodo></GetTodo>
      <CurrentTodos></CurrentTodos>      
      <CompletedTodos></CompletedTodos>
    </div>
  </div>
</template>

<script>
import GetTodo from './components/GetTodo.vue'
import CurrentTodos from './components/CurrentTodos.vue'
import CompletedTodos from './components/CompletedTodos.vue'
export default {
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
 
}
</script>

<style scoped>
body {
  font-family: Raleway, Helvetica, sans-serif;
}
.app-main{
  padding-top: 20px;
  /* height: 100vh; */
}
</style>

<style lang="scss">
body.app{
  background: rebeccapurple;  
  h1,h2,h3,h4,h5{
    color: white;
  }
  .list-group-item{
      color: white;
      background-color: #330e58;  
  }
  .form-control{
    background-color: #340e57;
    border: 1px solid #340e57;
    color: #FFFFFF;    
    &::-webkit-input-placeholder {
      color:white;
    }
  }
  .app-header {
      color: white;
  }  
}
</style>

