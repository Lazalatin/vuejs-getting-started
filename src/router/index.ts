import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductDetailsView from "../views/ProductDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product/:id",
      name: "productRoute",
      component: ProductDetailsView,
    },
  ],
});

export default router;
