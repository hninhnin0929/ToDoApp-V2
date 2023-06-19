<!-- <template>
    <div>
        <div v-for="todo in allTodos" :key="todo.id">
            <TodoItem :todo="todo"/>
    </div>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import TodoItem from "@/components/TodoItem";
    export default {
        name: 'TodoList',
        components: {
            TodoItem
        },
        computed: {
            ...mapGetters(['allTodos'])
        },
    }
</script>
<style scoped>
</style>
 -->

 <template>
   <table class="table table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">#</th>
            <th scope="col" class="text-center">#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in allTodos" :key="index">
            <td>
              <span :class="{'finished': todo.status === 'finished'}">
                {{ todo.title }}
              </span>
            </td>
            <td style="width: 120px;">
              <span @click="changeStatus(todo, index)" class="pointer"
                :class="{'text-danger': todo.status === 'to-do', 
                'text-warning': todo.status === 'in-progress',
                'text-success': todo.status === 'finished'
              }">
                {{ todo.status }}
              </span>
            </td>
            <td>
              <div class="text-center pointer" @click="getTodo(todo)">
                <span class="fa fa-pen"></span>
              </div>
            </td>
            <td>
              <div class="text-center pointer" @click="deleteTodo(todo.id)">
                <span class="fa fa-trash"></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</template>
<script>

    import { mapGetters } from "vuex";
    import { mapActions } from "vuex";
    
    export default {
        name: 'TodoList',
        components: {
            
        },
        computed: {
            ...mapGetters(['allTodos'])
        },
        props: {
            getTodo: Function,
        },
        data(){
            return{
                todoText: "",
                availableStatuses: ['to-do', 'in-progress', 'finished'],
            }
        },
        methods: {
            ...mapActions(["deleteTodo", "updateTodo"]),
            changeStatus(todo, index){
                let nextIndex = this.availableStatuses.indexOf(this.allTodos[index].status);      
                if(++nextIndex > 2) nextIndex = 0;      
                todo.status = this.availableStatuses[nextIndex];
                //this.update_status(todo);
                this.updateTodo(todo);
            },
        }
    }
</script>
<style scoped>

    .pointer {
        cursor: pointer;
    }
    .finished {
    text-decoration: line-through;
    }
    th {
        background-color: #c2e2c6;
    }
    .fa-pen {
        color: #4da8b4;
    }
    .fa-trash {
        color: orangered;  
    }
</style>


