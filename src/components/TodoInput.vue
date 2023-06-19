<template>
    <div>
        <div class="d-flex">
            <input v-model="todoText" type="text" class="form-control todoinput" placeholder="Enter todo" v-on:keydown.enter="submitTask" >
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
            addTodoI(){
                this.addTodo({
                    id: v1(),
                    title: this.todoText,
                })
            }
        }
    }
</script>
<style scoped>
 
</style>
