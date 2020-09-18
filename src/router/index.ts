import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import FlagQuiz from "../views/FlagQuiz.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/countries",
    name: "Home",
    component: Home
  },
  {
    path: "/countries/flag-quiz",
    name: "Quiz",
    component: FlagQuiz
  },
  {
    path: "/countries/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
