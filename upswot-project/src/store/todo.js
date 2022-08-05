export const todo = {
  state: () => ({
    searchQuery: "",
    showModal: false,
    updatedTodo: null,
    todoList: JSON.parse(localStorage.getItem("todo")) || [],
  }),
  getters: {
    valueForUpdate(state) {
      return state.updatedTodo;
    },
    isModalOpen(state) {
      return state.showModal;
    },
    todoList(state) {
      if (state.searchQuery === "") {
        return state.todoList;
      } else {
        return state.todoList.filter((post) =>
          post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
    },
    // filteredTodo(state, getters) {
    //   return getters.todoList.filter((post) =>
    //     post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    //   );
    // },
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todoList.push(newTodo);

      localStorage.setItem("todo", JSON.stringify(state.todoList));
    },
    deleteTodoById(state, id) {
      state.todoList = state.todoList.filter((el) => el.id !== id);
      localStorage.setItem("todo", JSON.stringify(state.todoList));
    },
    filteredValue(state, value) {
      state.searchQuery = value;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
      state.updatedTodo = null;
    },
    findForUpdate(state, todoData) {
      state.showModal = !state.showModal;
      state.updatedTodo = todoData;
    },
  },
  namespaced: true,
};
