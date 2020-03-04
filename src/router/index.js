import Vue from "vue";
import VueRouter from "vue-router";
import Schedule from "../pages/Schedule";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Schedule",
      component: Schedule
    }
  ]
});
