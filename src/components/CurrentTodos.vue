<template>
    <div id="current-todos" class="container">
        <h3 v-if="todos.length > 0">A fazer ({{todos.length}})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos">
                {{todo.body}}
            <div class="btn-group">
                <button type="button" @click="edit(todo)" class="btn btn-default btn-sm btn-outline-primary">
                <i class="fas fa-edit"></i>    
                </button>
                <button type="button" @click="complete(todo)" class="btn btn-default btn-sm btn-outline-success">
                <i class="fas fa-check-circle"></i>    
                </button>
                <button type="button" @click="remove(todo)" class="btn btn-default btn-sm btn-outline-danger">
                <i class="fas fa-minus-circle"></i>    
                </button>
            </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    methods: {
        edit(todo){
            this.$store.dispatch('editTodo', todo)
        },
        complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    }
}
</script>
<style>
    .btn-group{
        float: right;
    }
</style>