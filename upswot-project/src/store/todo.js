// export const todo = {
//   state: () => ({
//     todoList: [],
//     test: 1,
//   }),
//   getters: {
//     // getTodoList() {
//     //   return state.todoList;
//     // },
//   },
//   mutations: {},
//   actions: {},
//   namespaced: true,
// };

export const todo = {
  state: () => ({
    todoList: [
      {
        id: 1,
        title: "Do the dishes",
        completed: false,
      },
      {
        id: 2,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 3,
        title: "Mow the lawn",
        completed: false,
      },
      {
        id: 4,
        title: "Do the dishes",
        completed: false,
      },
      {
        id: 5,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 6,
        title: "Mow the lawn",
        completed: false,
      },
    ],
    searchQuery: "",
  }),
  getters: {
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
      const addNewTodo = state.todoList.push(newTodo);
      return addNewTodo;
    },
    // addTodo(state, newTodo) {
    //   return (state.todoList = state.todoList.push(newTodo));
    // },
    deleteTodoById(state, id) {
      return (state.todoList = state.todoList.filter((el) => el.id !== id));
    },
    filteredValue(state, value) {
      state.searchQuery = value;
    },
  },

  actions: {
    // addNewTodo(ctx, newTodo) {
    //   ctx.commit("addTodo", newTodo);
    // },
  },
  namespaced: true,
};
