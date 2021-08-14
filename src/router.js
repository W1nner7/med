import { createRouter, createWebHistory } from "vue-router";
import Intro from "@/views/Intro.vue";
import Main from "@/views/Main.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Intro,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
