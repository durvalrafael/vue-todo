<template>
    
    <div id="get-todo" class="container">
        <div class="input-group mb-3">
            <input class="form-control"
               :value="newTodo"
               @change="getTodo"
               placeholder="Adicionar uma tarefa" required>
            <div class="input-group-prepend">
                <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
                <button class="btn btn-primary" @click="addTodo">Adicionar</button>
            </div>
        </div>        
    </div>
</template>
<script>
    export default{
        methods: {
            getTodo(e){
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo(){
                this.$store.dispatch('addTodo')
                this.$store.dispatch('clearTodo')
            }
        },
        computed: {
            newTodo(){
                return this.$store.getters.newTodo
            }
        }

    }
</script>