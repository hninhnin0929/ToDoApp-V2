<template>
    <div>
        <div class="d-flex">
            <input type="text" class="form-control todoinput" placeholder="Enter todo" v-on:keydown.enter="submitTask" >
            <button @click="addTodo('23')" class="btn btn-success rounded-0">ADD</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
    export default {
        name: 'TodoInput',
        methods: {
            ...mapActions(["addTodo"])
        }
    }
</script>
<style scoped>
 
</style>
