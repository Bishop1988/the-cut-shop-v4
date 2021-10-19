import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/materials/:slug",
    name: "materialsDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "MaterialsDetails" */ "../views/MaterialsDetails.vue"),
  },
  {
    path: "/materials/:slug/:materialTypeSlug/orders",
    name: "materialOrder",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "MaterialOrder" */ "../views/MaterialOrder.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  linkExactActiveClass: "cut-shop-active-class",
  history: createWebHashHistory(),
  routes,
});

export default router;
