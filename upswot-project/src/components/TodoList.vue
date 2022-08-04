<template>
    <ul class="todo-list">
        <TodoItem />
    </ul>
</template>

<script>

import TodoItem from '@/components/TodoItem.vue';
export default {
    components: { TodoItem }
}
</script>

<style>


.todo-list {
    margin-top: 50px;
    list-style: none;
}

</style>