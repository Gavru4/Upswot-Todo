<template>
    <select v-model="selectValue" @change="selectTodo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>

    </select>
</template>

<script>

import { mapMutations } from "vuex";

export default {
    data() {
        return {
         selectValue: "all"
        }
    },

    methods: {
        ...mapMutations({
            // selectedByCondition: "todo/selectedByCondition"
            filterTodo: "todo/filterTodo"
        }),
        selectTodo() {
            this.filterTodo(this.selectValue)
        }
    }
}
    
</script>