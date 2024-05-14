import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // component: () => import("@/views/button.vue"),
    component: () => import("@/views/flexDemo.vue"),
    // component: () => require("@/docs/button.md"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
