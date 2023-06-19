<template>
    <div>
        <div v-for="todo in allTodos" :key="todo.id">
            <TodoItem />
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

