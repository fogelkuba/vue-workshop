import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/vote",
      name: "vote",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Vote.vue")
    },
    {
      path: "/score",
      name: "score",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Score.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Settings.vue")
    }
  ]
});
