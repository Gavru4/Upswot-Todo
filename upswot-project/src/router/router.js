import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Todo from "@/pages/Todo.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/login",
      component: Login,
      alias: "/",
    },
    {
      path: "/todo",
      component: Todo,
    },
  ],
});
export default router;
