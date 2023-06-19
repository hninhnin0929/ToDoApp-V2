import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const STORAGE_KEY = 'vue-todo-appv2';
export default new Vuex.Store({
    state: {
        // todos: [
            
         
        // ]
        todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        
    },
    
    getters: {
        allTodos: (state) => state.todos,
    },
    actions: {
        addTodo({commit}, todo){
            commit('add_todo', todo);
        },
        deleteTodo({commit}, id){
            commit('delete_todo', id);
        },
        updateTodo({commit}, todo){
            commit("update_todo", todo);
        },
        updateStatus({commit}, todo){
            commit("update_status", todo);
        }
    },
    mutations: {
        add_todo(state, todo){
            state.todos.push(todo);
            
            console.log(todo);
            console.log(state.todos);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));

        },
        delete_todo(state, id){
            state.todos = state.todos.filter(todo=> todo.id != id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos)); 
        },
        update_todo(state, todo){
            let index = state.todos.findIndex(t=> t.id == todo.id);
            console.log(index);
            if(index != -1){
                state.todos[index] = todo; 
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));             
            }
            
        },
    },
    modules: {

    }
})