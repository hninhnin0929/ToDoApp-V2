<template>
    <div>
        <div class="row my-3 justify-content-between d-flex">
            <!-- <h5 class="col-1">#1</h5> -->
            <h3 class="col-6">{{ todo.title }}</h3>
            <div class="col-4">
                <button class="btn btn-primary mx-2 ">Edit</button>
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
        methods: {
            ...mapActions(["deleteTodo"]),
        },
    }
</script>
<style scoped>

</style>
