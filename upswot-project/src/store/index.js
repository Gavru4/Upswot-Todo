import { createStore } from "vuex";
import { todo } from "@/store/todo";

export default createStore({
  state: {
    isAuth: JSON.parse(localStorage.getItem("isUserLogin")) || false,
    // showModal: false,
  },
  getters: {
    userLoginInfo(state) {
      return state.isAuth;
    },
  },
  mutations: {
    loginUser(state, { login, password }) {
      if (
        login === process.env.VUE_APP_USER_LOGIN &&
        password === process.env.VUE_APP_USER_PASSWORD
      ) {
        state.isAuth = true;
        localStorage.setItem("isUserLogin", JSON.stringify(state.isAuth));
      } else {
        return state.isAuth;
      }

      //   return (state.showModal = value);
    },
  },
  modules: {
    todo: todo,
  },
  namespaced: true,
});
