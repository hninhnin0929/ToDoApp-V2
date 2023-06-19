<template>
    <div>
        <div class="row my-3 justify-content-between d-flex">
            <!-- <h5 class="col-1">#1</h5> -->
            <h3 v-if="!editing" class="col-6">{{ todo.title }}</h3>
            <input v-else v-bind:value="todoText" @change="todoTextChange" type="text" class="col form-control" />
            <div class="col-4">
                <button @click="updateTodoI(todo)" class="btn btn-primary mx-2 ">{{ editing ? 'Update' : 'Edit'}}</button>
                <button @click="deleteTodo(todo.id)" class="btn btn-danger ">Delete</button>
            </div>
            
        </div>
    </div>
</template>
<script>
    import { mapActions } from "vuex";
    export default {
        name: 'TodoItem',
        props: {
            todo: {},
        },
        data(){
            return{
                todoText: "",
                editing: false
            }
        },
        methods: {
            ...mapActions(["deleteTodo", "updateTodo"]),
            todoTextChange(e){
                this.todoText = e.target.value;
            },
            updateTodoI(todo){
                this.editing = !this.editing; 
                console.log(this.editing);
                if(this.editing){
                    this.todoText = todo.title;
                    this.updateTodo(todo);
                }else{
                    todo.title = this.todoText;
                }
            }
        },
    }
</script>
<style scoped>

</style>
