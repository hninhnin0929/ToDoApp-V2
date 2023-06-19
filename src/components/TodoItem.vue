<template>
    <div>
        <div class="row my-3 justify-content-between d-flex">
            <!-- <h5 class="col-1">#1</h5> -->
            <h3 class="col-6">{{ todo.title }}</h3>
            <div class="col-4">
                <button class="btn btn-primary mx-2 ">Edit</button>
                <button class="btn btn-danger ">Delete</button>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TodoItem',
        props: {
            todo: {},
        },
    }
</script>
<style scoped>

</style>
