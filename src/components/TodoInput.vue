<template>
    <div>
        <div class="d-flex">
            <input @change="todoTextChange($event)" v-bind:value="todoText" type="text" class="form-control todoinput" placeholder="Enter todo"  >
            <button @click="addTodoI" class="btn btn-success rounded-0">ADD</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { v1 } from 'uuid';

    export default {
        name: 'TodoInput',
        data(){
            return{
                todoText: ""
            }
        },
        methods: {
            ...mapActions(["addTodo"]),
            todoTextChange(e){
                // this.todoText = e.target.value;
                console.log("todoTextChange ", this.todoText);
            },
            addTodoI(){
                this.addTodo({
                    id: v1(),
                    title: this.todoText,
                });
                this.todoText = '';
            }
        }
    }
</script>
<style scoped>
 
</style>
