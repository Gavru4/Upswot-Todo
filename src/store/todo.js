import { initCustomFormatter } from "vue";

export const todo = {
  state: () => ({
    searchQuery: JSON.parse(localStorage.getItem("searchQuery")) || "all",
    showModal: false,
    updatedTodo: null,
    todoList: JSON.parse(localStorage.getItem("todo")) || [],
  }),
  getters: {
    // valueForUpdate(state) {
    //   return state.updatedTodo;
    // },
    todoCompleted(state) {
      return state.todoList;
    },
    isModalOpen(state) {
      return state.showModal;
    },

    todoList(state) {
      if (state.searchQuery === "all") {
        return state.todoList;
      } else if (state.searchQuery === "completed") {
        return state.todoList.filter((el) => el.completed);
      } else if (state.searchQuery === "incomplete") {
        return state.todoList.filter((el) => !el.completed);
      } else {
        return state.todoList.filter((post) =>
          post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
    },
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todoList.push(newTodo);

      localStorage.setItem("todo", JSON.stringify(state.todoList));
    },

    filterAndSortedTodo(state, value) {
      state.searchQuery = value;
      localStorage.setItem("searchQuery", JSON.stringify(state.searchQuery));
    },

    deleteTodoById(state, id) {
      state.todoList = state.todoList.filter((el) => el.id !== id);
      localStorage.setItem("todo", JSON.stringify(state.todoList));
    },

    toggleModal(state) {
      state.showModal = !state.showModal;
      state.updatedTodo = null;
    },

    toggleConditionTodo(state, id) {
      state.todoList.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
      });
      localStorage.setItem("todo", JSON.stringify(state.todoList));
    },

    findTodoForUpdate(state, todoData) {
      state.showModal = !state.showModal;
      state.updatedTodo = todoData;
      // state.updatedTodo = title;
    },
    updateTodo(state, { title, id }) {
      state.showModal = !state.showModal;

      state.todoList.find((el) => {
        if (el.id === id) {
          el.title = title;
        }
      });
      // state.updatedTodo = title;
    },
  },
  namespaced: true,
};
