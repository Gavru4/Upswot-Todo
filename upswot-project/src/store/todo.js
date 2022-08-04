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
  }),
  getters: {
    todoList(state) {
      return state.todoList;
    },
  },
  mutations: {
    addTodo(state, newTodo) {
      const addNewTodo = state.todoList.push(newTodo);
      return addNewTodo;
    },
    deleteTodo(state, id) {
      const allTodo = state.todoList.find(el !== id);
      return allTodo;
    },
  },
  actions: {
    // addNewTodo(ctx, newTodo) {
    //   ctx.commit("addTodo", newTodo);
    // },
  },
  //   namespaced: true,
};
