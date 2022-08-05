<template>
  <h2 v-if="todoList.length === 0" class="item-heading">
    Todo list is empty 😔
  </h2>
  <!-- v-on:change="todo.completed = !todo.completed" -->
  <!-- <h2 v-else-if="filteredTodo.length===0" class="item-heading">Todo list is empty 😔</h2> -->
  <ul v-else class="todo-list">
    <li class="todo-item" v-for="todo in todoList" :key="todo.id">
      <div v-bind:class="{ done: todo.completed }">
        <input class="todo-checkbox" type="checkbox" v-bind:checked="todo.completed"
          v-on:change="toggleCheckBox(todo.id)" />
        {{ todo.title }}
      </div>
      <div>
        <button @click="updateTodo({ id: todo.id, title: todo.title })" class="update__btn">
          Update todo
        </button>
        <button @click="removeTodo(todo.id)" class="del__btn">
          Delete todo
        </button>
      </div>
    </li>
  </ul>
  <my-modal>
    <TodoForm />
  </my-modal>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TodoForm from "@/components/TodoForm.vue";

export default {
  computed: mapGetters({
    todoList: "todo/todoList",
    filteredTodo: "todo/filteredTodo",
    isModalOpen: "todo/isModalOpen",
  }),
  methods: {
    ...mapMutations({
      deleteTodoById: "todo/deleteTodoById",
      findForUpdate: "todo/findForUpdate",
      toggleTodo: "todo/toggleTodo"
    }),
    removeTodo(id) {
      this.deleteTodoById(id);
    },
    toggleCheckBox(id) {
      console.log('id :>> ', id);
      // todo.completed = !todo.completed
      this.toggleTodo(id);
    },
    updateTodo(todoData) {
      this.findForUpdate(todoData);
    },
  },
  components: { TodoForm },
};
</script>


<style  scoped>
 .todo-list {
  margin-top: 50px;
  list-style: none;
} 

 .item-heading {
  margin-top: 80px;
  font-family: "Roboto";
  font-size: 30px;
  line-height: 29px;
  text-align: center;

  color: #333333;
} 

 .todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Roboto";
  font-size: 25px;
  line-height: 29px;
  color: #333333;

  padding: 15px 19px;
  margin-bottom: 20px;

  border: 1px solid #ccc;

} 

.update__btn {
  padding: 10px;
  border-radius: 10px;

  font-family: "Roboto";
  font-size: 20px;
  line-height: 20px;

  border: none;
  background: #00a9e7;
  color: #fff;
}

.del__btn {
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;

  font-family: "Roboto";
  font-size: 20px;
  line-height: 20px;

  border: none;
  background: red;
  color: #fff;
}

.todo-checkbox {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}

.done {
  text-decoration: line-through;
} 
</style>
