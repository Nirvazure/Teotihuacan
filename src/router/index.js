import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/Blogs.vue")
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("../views/Gallery.vue")
  },
  {
    path: "/idoles",
    name: "idoles",
    component: () => import("../views/Idoles.vue")
  },
  {
    path: "/toys",
    name: "Toys",
    component: () => import("../views/Toys.vue")
  },
  {
    path: "/music",
    name: "music",
    component: () => import("../views/Music.vue")
  },
  {
    path: "/rank",
    name: "rank",
    component: () => import("../views/Rank.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
