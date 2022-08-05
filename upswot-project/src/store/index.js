import { createStore } from "vuex";
import { todo } from "@/store/todo";

export default createStore({
  state: {
    isAuth: false,
    // showModal: false,
  },
  //   getters: {
  //     isModalOpen(state) {
  //       return state.showModal;
  //     },
  //   },
  //   mutations: {
  //     update(state, id) {
  //       return (state.showModal = !state.showModal);
  //       //   return (state.showModal = value);
  //     },
  //   },
  modules: {
    todo: todo,
  },
  namespaced: true,
});
