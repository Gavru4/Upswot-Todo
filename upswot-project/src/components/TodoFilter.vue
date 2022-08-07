<template>
    <input v-model.trim="inputValue" @input="filter" class=" todo-filter__input" type="text"
        placeholder="Filter your todo">
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
        ...mapMutations({
            filterAndSortedTodo: "todo/filterAndSortedTodo"
        }),
        filter() {
            this.filterAndSortedTodo(this.inputValue)
        }
    }
    
}
</script>

<style lang="scss" scoped>

$filter-bgc: #00A9E7;

.todo-filter__input {
    display: block;
    height: 45px;
    padding: 10px;

    font-family: 'Roboto';
    font-size: 20px;
    line-height: 25px;

    border-radius: 5px;
    background-color: $filter-bgc;

    @media screen and (min-width: 1280px) {
            display: block;
            width: 600px;
            height: 60px;
            padding: 20px;
             
            font-size: 25px;
            line-height: 29px;
    
}
    
}
</style>