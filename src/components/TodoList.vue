<template>
    <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
</template>
<script>

    import TodoItem from "@/components/TodoItem";
    export default {
        name: 'TodoList',
        components: {
            TodoItem
        }

    }
</script>
<style scoped>
</style>

