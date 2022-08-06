<template>

    <select v-model="searchQuery" @change="selectTodo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>

    </select>
</template>

<script>

import { mapMutations, mapState } from "vuex";

export default {
    computed: {
         ...mapState({
             searchQuery: state => state.todo.searchQuery,
         }),
    },
    methods: {
        ...mapMutations({
            filterAndSortedTodo: "todo/filterAndSortedTodo"
        }),
        selectTodo(e) {
          
            this.filterAndSortedTodo(e.target.value)
        }
    },
    
}
    
</script>