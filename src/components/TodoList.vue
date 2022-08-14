<template>
  <h2 v-if="todoList?.length === 0" class="item-heading">
    Todo list is empty 😔
  </h2>
  <ul v-else class="todo-list">
    <transition-group name="todo-list">
      <li class="todo-item" v-for="todo in todoList" :key="todo.id">
        <label class="checkbox-wrapper" v-bind:class="{ done: todo.completed }">
          <input class="todo-checkbox" type="checkbox" v-bind:checked="todo.completed"
            v-on:change="toggleCheckBox(todo.id)" />
          <p class="checkbox-text">{{ todo.title }}</p>

        </label>
        <div class="btn-wrapper">

          <my-button @click="updateTodo({ id: todo.id, title: todo.title })" class="update__btn" text="Update todo" />
          <my-button @click="removeTodo(todo.id)" class="del__btn" text="Delete todo" />


          <!-- <button @click="updateTodo({ id: todo.id, title: todo.title })" class="update__btn">
            Update todo
          </button> -->
          <!-- <button @click="removeTodo(todo.id)" class="del__btn">
            Delete todo
          </button> -->
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
  computed: mapGetters({
    todoList: "todo/todoList",
    filteredTodo: "todo/filteredTodo",
    isModalOpen: "todo/isModalOpen",
  }),
  methods: {
    ...mapMutations({
      deleteTodoById: "todo/deleteTodoById",
      findTodoForUpdate: "todo/findTodoForUpdate",
      toggleConditionTodo: "todo/toggleConditionTodo"
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
  components: { TodoForm, UpdateTodoForm },
};
</script>


<style lang="scss"  scoped>












$btn-update-hover-color: #FFFFFF;
$btn-update-hover-bgc: #0565a0;
$btn-delete-hover-color: #FFFFFF;
$btn-delete-hover-bgc: rgb(184, 3, 3);
$update-btn-bgc: #00a9e7;
$update-btn-color:#fff;
$del-btn-bgc: red;


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

$main-text0color: #333333;
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
  font-family: "Roboto";
  font-size: 30px;
  line-height: 29px;
  text-align: center;

  color: #333333;
} 

 .todo-item {
    display: flex;
    align-items: stretch;
    flex-direction: column;

    font-family: "Roboto";
    font-size: 20px;
    line-height: 20px;

    color: $main-text0color;
    padding: 10px 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;

    font-size: 25px;
    line-height: 29px;

    padding: 15px 19px;
    margin-bottom: 20px;
}
} 
.checkbox-wrapper{
    display: flex;
    align-items: center;
}

.update__btn {
  padding: 10px;
  border-radius: 10px;

  font-family: "Roboto";
  font-size: 15px;
  line-height: 15px;


  border: none;
  background:$update-btn-bgc;
  color:$update-btn-color;
  
    @media screen and (min-width: 768px) {
      
    }
    
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

  font-family: "Roboto";
  font-size: 15px;
  line-height: 15px;
  box-sizing: border-box;

  border: none;
  background:$del-btn-bgc;
  color: #fff;
    @media screen and (min-width: 768px) {
        
      }
    
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
.btn-wrapper{
 margin:15px  auto 0;
  @media screen and (min-width: 1280px) {

  margin: 0;
}
}

.done {
  text-decoration: line-through;
} 
</style>
