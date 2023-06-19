<template>
    <div>
        <div class="d-flex mt-5">
            <input  v-model="todoData.title" type="text" class="form-control add-task-field" placeholder="Enter todo" v-on:keydown.enter="addTodoI"/>
            <button @click="addTodoI" class="btn btn-success rounded-0">ADD</button>
        </div>
        <TodoList :getTodo="getTodo"/>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { v1 } from 'uuid';
import TodoList from "./TodoList.vue";

    export default {
        name: 'TodoInput',
        components: {
            TodoList
        },
        data(){
            return{
                todoText: "",
                todoData:  this.getObj(),
                
            }
        },
        created(){
            console.log("this is created func");    
            
        },
        methods: {
            ...mapActions(["addTodo", "updateTodo"]),
           
            addTodoI(){
                
                if(this.todoData.title.length === 0) return;

                if(this.todoData.id === 0){
                    console.log("new save");
                    this.todoData.id = v1();
                    console.log(JSON.stringify(this.todoData));
                    this.addTodo(
                        this.todoData
                    );
                }else{
                    console.log("update");
                    this.updateTodo(this.todoData);
                }
                this.todoData = this.getObj();
            },
            getTodo(todo){
                this.todoData = todo;
                console.log("this.getTodo= ", JSON.stringify(todo)); 
            },
            getObj() {
                return {
                  id: 0,
                  title: "",
                  status: "to-do",
                }
            },

        }
    }
</script>
<style scoped>
.add-task-field{
  border-radius: 0;
  /* border: none; */
  background: transparent;
  border: 1px solid #11cdef;
}
 
</style>
