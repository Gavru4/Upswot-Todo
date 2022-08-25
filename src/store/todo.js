export const todo = {
  state: () => ({
    searchQuery: JSON.parse(localStorage.getItem("searchQuery")) || "all",
    filterValue: "",
    showModal: false,
    updatedTodo: null,
    todoList: JSON.parse(localStorage.getItem("todo")) || [],
  }),
  getters: {
    todoCompleted(state) {
      return state.todoList;
    },
    isModalOpen(state) {
      return state.showModal; // как это относится к сущности todo?
    },
    todoList(state) {
      if (state.filterValue !== "") {
        return state.todoList.filter((post) =>
          post.title.toLowerCase().includes(state.filterValue.toLowerCase())
        );
      }
      if (state.searchQuery === "all") {
        return state.todoList;
      } else if (state.searchQuery === "completed") {
        return state.todoList.filter((el) => el.completed);
      } else if (state.searchQuery === "incomplete") {
        return state.todoList.filter((el) => !el.completed);
      }
    },
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todoList.push(newTodo);

      localStorage.setItem("todo", JSON.stringify(state.todoList));
    },

    sortedTodo(state, value) {
      state.searchQuery = value;
      localStorage.setItem("searchQuery", JSON.stringify(state.searchQuery));
    },
    filterTodo(state, value) {
      state.filterValue = value;
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
      state.showModal = true;
      state.updatedTodo = todoData;
    },

    updateTodo(state, { title, id }) {
      state.showModal = !state.showModal;

      state.todoList.find((el) => {
        if (el.id === id) {
          el.title = title;
        }
      });
      localStorage.setItem("todo", JSON.stringify(state.todoList));
    },
  },
  namespaced: true,
};

// Опять таки, неправильно используешь мутации
// Пример от меня:

// export const todo = {
//   state: () => ({
//     todoList: JSON.parse(localStorage.getItem("todo")) || [],
//   }),
//   getters: { // => геттеры используем для получения новых state на базе уже существующих, тоже что и computed во vue
//     completedTodo(state) {
//       return state.todoList.filter(todo => todo.completed);
//     },
//   },
//   mutations: { // => только логика мутации, никаких доп эффектов,
//     setTodo(state, newTodoList) {
//       state.todoList = newTodoList
//     },
//   },
//   actions: { // => тут все действия, запросы и т.д
//     addTodo({ commit, state }, newTodo) {
//       const updatedTodoList = [...state.todoList, newTodo]
//       commit('setTodo', updatedTodoList)
//       localStorage.setItem("todo", JSON.stringify(updatedTodoList));
//     },
//     removeTodoById({ commit, state }, id) {
//        const updatedTodoList = state.todoList.filter((el) => el.id !== id)
//        commit('setTodo', updatedTodoList)
//     }
//   },
//   namespaced: true,
// };
