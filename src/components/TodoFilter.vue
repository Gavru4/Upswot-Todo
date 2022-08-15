<template>
  <my-input
    v-model.trim="inputValue"
    @input="filter"
    inputClass="todo-filter__input"
    type="text"
    placeholder="Filter your todo"
  ></my-input>
  <!-- <input
    v-model.trim="inputValue"
    @input="filter"
    class="todo-filter__input"
    type="text"
    placeholder="Filter your todo"
  /> -->
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      inputValue: "",
    };
  },

  methods: {
    ...mapMutations({
      filterTodo: "todo/filterTodo",
    }),
    filter() {
      this.filterTodo(this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

// .todo-filter__input {
//   display: block;
//   height: 45px;
//   padding: 10px;
//   border-radius: 5px;

//   font-family: $main-font-family;
//   font-size: 20px;
//   line-height: 25px;

//   background-color: $filter-bgc;

//   @media screen and (min-width: 1280px) {
//     display: block;
//     width: 600px;
//     height: 60px;
//     padding: 20px;

//     font-size: 25px;
//     line-height: 29px;
//   }
// }
</style>
