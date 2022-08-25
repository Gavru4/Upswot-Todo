<template>
  <div>
    <div class="wrapper">
      <div class="container todo-position">
        <img
          class="logo"
          :src="require('@/assets/images/logo.png')"
          alt="my-logo"
        />
        <div class="todo-wrapper">
          <h2 class="todo-header">Thank you {{ userName }}!</h2>
          <TodoForm />
          <div class="additional-features">
            <TodoFilter />
            <SortedTodo class="sorted__todo" />
          </div>
          <TodoList />
        </div>
      </div>
    </div>
    <div class="bottom-wrapper"></div>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoList from "@/components/TodoList.vue";
import SortedTodo from "../components/SortedTodo.vue";

import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      userName: (state) => state.userName,
    }),
    ...mapGetters({
      userLoginInfo: "userLoginInfo",
    }),
  },
  components: { TodoForm, TodoFilter, TodoList, SortedTodo },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.wrapper {
  height: 550px;
  padding-top: 20px;

  background: linear-gradient(
    180deg,
    $todo-gradient-top-bgc,
    $todo-gradient-bottom-bgc
  );

  @media screen and (min-width: 768px) {
    height: 600px;
    padding-top: 25px;
  }

  @media screen and (min-width: 1280px) {
    height: 797px;
    padding-top: 65px;
  }
}

.logo {
  display: block;
  width: 100px;
  height: 70px;
  margin: 0 auto 35px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 100px;
  }

  @media screen and (min-width: 1280px) {
    width: 186px;
    height: 119px;
    margin: 0 auto 65px;
  }
}
.todo-position {
  position: relative;
}
.todo-wrapper {
  min-height: 550px;
  padding: 15px;
  background: $todo-form-btn-hover-bgc;

  @media screen and (min-width: 768px) {
    min-height: 660px;
    padding: 30px;
  }

  @media screen and (min-width: 1280px) {
    min-height: 660px;
    padding: 30px;
  }
}
.bottom-wrapper {
  height: 100vh;
  background-color: #e5e5e5;
}
.todo-header {
  font-family: "Roboto";
  font-size: 30px;
  line-height: 30px;
  text-align: center;

  color: $main-text-color;
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 700;
    font-size: 60px;
    line-height: 94px;
  }
}
.additional-features {
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-around;
  }
}
.sorted__todo {
  width: 150px;
  height: 40px;
  margin: 15px auto 0;
  padding: 5px;

  font-family: "Roboto";
  font-size: 16px;
  line-height: 15px;

  border-radius: 5px;
  background-color: $select-bgc;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 200px;
    height: 60px;
    padding: 15px;

    font-size: 22px;
    line-height: 20px;
  }
}
.redirect__btn {
  display: flex;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40px;
  line-height: 94px;
  justify-content: center;
  text-decoration: none;
}
.redirect__text {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40px;
  line-height: 94px;
  text-align: center;
}
</style>
