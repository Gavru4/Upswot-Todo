import { createStore } from "vuex";
import { todo } from "@/store/todo";

export default createStore({
  state: {
    isAuth: false,
  },
  modules: {
    todo: todo,
  },
});
