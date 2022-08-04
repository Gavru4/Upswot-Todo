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
      },
      {
        id: 2,
        title: "Take out the trash",
      },
      {
        id: 3,
        title: "Mow the lawn",
      },
    ],
  }),
  getters: {
    getTodoList() {
      return state.todoList;
    },
  },
  mutations: {},
  actions: {},
  namespaced: true,
};
