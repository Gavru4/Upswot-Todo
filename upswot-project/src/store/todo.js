export const todo = {
  state: () => ({
    // todoList: [
    //   {
    //     id: 1,
    //     title: "Do the dishes",
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     title: "Take out the trash",
    //     completed: false,
    //   },
    //   {
    //     id: 3,
    //     title: "Mow the lawn",
    //     completed: false,
    //   },
    //   {
    //     id: 4,
    //     title: "Do the dishes",
    //     completed: false,
    //   },
    //   {
    //     id: 5,
    //     title: "Take out the trash",
    //     completed: false,
    //   },
    //   {
    //     id: 6,
    //     title: "Mow the lawn",
    //     completed: false,
    //   },
    // ],
    searchQuery: "",
    showModal: false,
    updatedTodo: null,
    // todoList: [],
    todoList: JSON.parse(localStorage.getItem("todo")) || [],
  }),
  getters: {
    valueForUpdate(state) {
      return state.updatedTodo;
    },
    isModalOpen(state) {
      return state.showModal;
    },
    // checkTodoInLS(state) {
    //   const getTodo = JSON.parse(localStorage.getItem("todo"));
    //   console.log("getTodo :>> ", getTodo);
    //   if (getTodo) state.todoList = getTodo;
    // },
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
      //   return (state.showModal = value);
    },
    findForUpdate(state, todoData) {
      state.showModal = !state.showModal;
      state.updatedTodo = todoData;
    },
  },

  actions: {
    // addNewTodo(ctx, newTodo) {
    //   ctx.commit("addTodo", newTodo);
    // },
  },
  namespaced: true,
};
