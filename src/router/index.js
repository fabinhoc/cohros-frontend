import Vue from "vue";
import VueRouter from "vue-router";
import Schedule from "../pages/Schedule";
import Phone from "../pages/Phone";
import SaveClient from "../pages/SaveClient";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Schedule",
      component: Schedule
    },
    {
      path: "/phone/:client_id",
      name: "Phone",
      component: Phone
    },
    {
      path: "/client",
      name: "Save",
      component: SaveClient
    },
    {
      path: "/client/:id",
      name: "Edit",
      component: SaveClient
    }
  ]
});
