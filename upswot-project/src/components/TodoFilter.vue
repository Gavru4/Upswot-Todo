<template>
    <!-- :model-value="searchQuery" -->
    <!-- @oninput="filter()" -->
    <input v-model="inputValue" @input="filter" class=" todo-filter__input" type="text" placeholder="Filter your todo">
</template>

<script>
import { mapMutations,mapState } from "vuex";
export default {

    data() {
        return {
        inputValue: ""
        }
    },
    

    methods: {
        // ...mapState({
        //     searchQuery: state => state.post.searchQuery,
        // }),
        ...mapMutations({
            filterAndSortedTodo: "todo/filterAndSortedTodo"
        }),
        filter() {
            this.filterAndSortedTodo(this.inputValue)
        }
    }
    
}
</script>

<style>

.todo-filter__input {
    display: block;
    width: 600px;
    height: 60px;
    padding: 20px;
    /* margin: 0 auto; */
    
    font-family: 'Roboto';
    font-size: 25px;
    line-height: 29px;
    
    border-radius: 5px;
    /* color: #fff; */
    background-color: #00A9E7;
}
</style>