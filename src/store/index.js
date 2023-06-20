import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexPersistedState } from "vue-persistedstate";

Vue.use(Vuex)

const STORAGE_KEY = 'vue-todo-appv2';

export default new Vuex.Store({
    plugins: [
        createVuexPersistedState({
          key: STORAGE_KEY,
          storage: window.localStorage,
          whiteList: [],
          blackList: [],
        }),
      ],
    state: {
        todos: []        
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
    },
    mutations: {
        add_todo(state, todo){
            state.todos.push(todo);
        },
        delete_todo(state, id){
            state.todos = state.todos.filter(todo=> todo.id != id);
        },
        update_todo(state, todo){
            let index = state.todos.findIndex(t=> t.id == todo.id);
            console.log(index);
            if(index != -1){
                state.todos[index] = todo;            
            }
            
        },
    },
    modules: {

    }
})