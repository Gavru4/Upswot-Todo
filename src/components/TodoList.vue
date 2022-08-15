<template>
  <h2 v-if="todoList?.length === 0" class="item-heading">
    Todo list is empty 😔
  </h2>
  <ul v-else class="todo-list">
    <transition-group name="todo-list">
      <li class="todo-item" v-for="todo in todoList" :key="todo.id">
        <!-- <my-input
          labelClass="checkbox-wrapper"
          inputClass="todo-checkbox"
          type="checkbox"
          v-bind:labelClass="{ done: todo.completed }"
          v-bind:checked="todo.completed"
          v-on:change="toggleCheckBox(todo.id)"
        >
          <p class="checkbox-text">{{ todo.title }}</p></my-input
        > -->
        <label class="checkbox-wrapper" v-bind:class="{ done: todo.completed }">
          <input
            class="todo-checkbox"
            type="checkbox"
            v-bind:checked="todo.completed"
            v-on:change="toggleCheckBox(todo.id)"
          />
          <p class="checkbox-text">{{ todo.title }}</p>
        </label>
        <div class="btn-wrapper">
          <my-button
            @click="updateTodo({ id: todo.id, title: todo.title })"
            class="update__btn"
            text="Update todo"
          />
          <my-button
            @click="removeTodo(todo.id)"
            class="del__btn"
            text="Delete todo"
          />
        </div>
      </li>
    </transition-group>
  </ul>
  <my-modal>
    <UpdateTodoForm />
  </my-modal>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TodoForm from "@/components/TodoForm.vue";
import UpdateTodoForm from "./UpdateTodoForm.vue";

export default {
  components: { TodoForm, UpdateTodoForm },
  computed: mapGetters({
    todoList: "todo/todoList",
    filteredTodo: "todo/filteredTodo",
    isModalOpen: "todo/isModalOpen",
  }),
  methods: {
    ...mapMutations({
      deleteTodoById: "todo/deleteTodoById",
      findTodoForUpdate: "todo/findTodoForUpdate",
      toggleConditionTodo: "todo/toggleConditionTodo",
    }),
    removeTodo(id) {
      this.deleteTodoById(id);
    },
    toggleCheckBox(id) {
      this.toggleConditionTodo(id);
    },
    updateTodo(todoData) {
      this.findTodoForUpdate(todoData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

//list animation

.todo-list-item {
  display: inline-block;
  margin-right: 10px;
}

.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.4s ease;
}

.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.todo-list-move {
  transition: transform 0.4s ease;
}

.todo-list {
  margin-top: 25px;
  list-style: none;

  @media screen and (min-width: 1280px) {
    margin-top: 50px;
    list-style: none;
  }
}

.item-heading {
  margin-top: 80px;

  font-family: $main-font-family;
  font-size: 30px;
  line-height: 29px;
  text-align: center;

  color: $main-text-color;
}

.todo-item {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding: 10px 10px;
  margin-bottom: 15px;

  font-family: $main-font-family;
  font-size: 20px;
  line-height: 20px;

  color: $main-text-color;
  border: 1px solid #ccc;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 19px;
    margin-bottom: 20px;

    font-size: 25px;
    line-height: 29px;
  }
}
.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.update__btn {
  padding: 10px;
  border-radius: 10px;
  border: none;

  font-family: $main-font-family;
  font-size: 15px;
  line-height: 15px;

  background: $update-btn-form-bgc;
  color: $update-btn-color;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 20px;
  }
  &:hover {
    color: $btn-update-hover-color;
    background: $btn-update-hover-bgc;
    cursor: pointer;
  }
}

.del__btn {
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;
  border: none;

  font-family: $main-font-family;
  font-size: 15px;
  line-height: 15px;
  box-sizing: border-box;

  background: $del-btn-bgc;
  color: #fff;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 20px;
  }
  &:hover {
    color: $btn-delete-hover-color;
    background: $btn-delete-hover-bgc;
    cursor: pointer;
  }
}

.todo-checkbox {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}

.btn-wrapper {
  margin: 15px auto 0;

  @media screen and (min-width: 1280px) {
    margin: 0;
  }
}

.done {
  text-decoration: line-through;
}
</style>
