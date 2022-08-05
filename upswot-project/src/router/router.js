import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import Login from "@/pages/Login.vue";
import Todo from "@/pages/Todo.vue";
import NotFound from "@/pages/NotFound.vue";
// const Todo = defineAsyncComponent(() => import("@/pages/Todo.vue"));
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/login",
      component: Login,
      name: "main",
      alias: "/",
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo,
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});
export default router;
