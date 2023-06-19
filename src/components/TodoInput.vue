<template>
    <div>
        <div class="d-flex">
            <input type="text" class="form-control todoinput" placeholder="Enter todo" v-on:keydown.enter="submitTask" >
            <button  class="btn btn-success rounded-0">ADD</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TodoInput',
    }
</script>
<style scoped>
 
</style>
