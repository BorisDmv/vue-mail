import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import sendmail from "../views/sendmail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/sendmail",
    name: "sendmail",
    component: sendmail
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
