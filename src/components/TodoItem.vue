<template>
    <div>
        <div class="row my-3 align-items-center d-flex todoitem">
            <h5 class="col-1">#1</h5>
            <h3 class="col-6">Todo Title</h3>
            <button class="btn btn-primary mx-2 col-2">Edit</button>
            <button class="btn btn-danger col-2">Delete</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TodoItem',
    }
</script>
<style scoped>

</style>
