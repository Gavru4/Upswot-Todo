import { createStore } from "vuex";
import { todo } from "@/store/todo";

export default createStore({
  state: {
    userName: JSON.parse(localStorage.getItem("userName")) || "",
    isAuth: JSON.parse(localStorage.getItem("isUserLogin")) || false,
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
        state.userName = login;
        localStorage.setItem("userName", JSON.stringify(state.userName));
        state.isAuth = true;
        localStorage.setItem("isUserLogin", JSON.stringify(state.isAuth));
      } else {
        alert("Please enter correct data or register");
        return state.isAuth;
      }
    },
  },
  modules: {
    todo: todo,
  },
  namespaced: true,
});

// Смотри, мутации должны только изменять логику, у них не должно быть дополнительно влияния
// Идеальная функция мутация выглядит так - state.currState = newState;
// Для каких либо операций нужно использовать actions, а уже внутри него дергать мутации по необходимости

// Пример из доки:
// const store = createStore({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   },
//   actions: {
//     increment (context) {
//       context.commit('increment')
//     }
//   }
