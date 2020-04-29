import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../components/NotFound";
import MuralCreate from "../views/MuralCreate";
import MuralList from "../views/MuralList";
import MuralShow from "../views/MuralShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: NotFound
  },
  {
    path: "/",
    name: "mural-list",
    component: MuralList
  },
  {
    path: "/mural/create",
    name: "mural-create",
    component: MuralCreate
  },
  {
    path: "/mural/:id",
    name: "mural-show",
    component: MuralShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
