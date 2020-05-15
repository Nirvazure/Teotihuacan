import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/Blogs.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("../views/Gallery.vue"),
  },
  {
    path: "/idoles",
    name: "idoles",
    component: () => import("../views/Idoles.vue"),
  },
  {
    path: "/toys",
    name: "Toys",
    component: () => import("../views/Toys.vue"),
  },
  {
    path: "/music",
    name: "music",
    component: () => import("../views/Music.vue"),
  },
  {
    path: "/rank",
    name: "rank",
    component: () => import("../views/Rank.vue"),
  },
  {
    path: "/dreammap",
    name: "map",
    component: () => import("../views/Map.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("../views/Game.vue"),
  },
  {
    path: "/logs",
    name: "logs",
    component: () => import("../views/Logs.vue"),
  },
  {
    path: "/love",
    name: "love",
    component: () => import("../views/Love"),
  },
  {
    path: "/year",
    name: "year",
    component: () => import("../views/Year"),
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
