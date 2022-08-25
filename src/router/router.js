import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Todo from "@/pages/Todo.vue";
import NotFound from "@/pages/NotFound.vue";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
      name: "Login",
      alias: "/",
    },
    {
      path: "/todo",
      name: "Todo",
      component: Todo,
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !store.state.isAuth)
    next({
      path: "/login",
      replace: true,
    });
  else next();
});

export default router;
