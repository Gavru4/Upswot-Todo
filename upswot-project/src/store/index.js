// import { createStore } from "vuex";
// import { postModule } from "@/store/todo";

// export default createStore({
//   modules: {
//     post: postModule,
//   },
// });

import { createStore } from "vuex";
import { todo } from "@/store/todo";

export default createStore({
  state: {
    isAuth: false,
  },
  modules: {
    todo: todo,
  },
});
