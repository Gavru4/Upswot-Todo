<template>
  <select v-model.trim="searchQuery" @change="selectTodo">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="incomplete">Incomplete</option>
  </select>
</template>

<!-- По сути select  - это тоже базовый компонент, но в твоем случае он используется только раз, поэтому все окей -->

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      searchQuery: (state) => state.todo.searchQuery,
    }),
  },
  methods: {
    ...mapMutations({
      sortedTodo: "todo/sortedTodo",
    }),
    selectTodo(e) {
      this.sortedTodo(e.target.value);
    },
  },
};
</script>
