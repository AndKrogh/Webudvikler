import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import AllProductsView from "@/views/AllproductsView.vue";
import CartView from "@/views/CartView.vue";
import AdminView from "@/views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ProductView",
      name: "ProductView",
      component: ProductView,
    },
    {
      path: "/AllProductsView",
      name: "AllProductsView",
      component: AllProductsView,
    },
    {
      path: "/CartView",
      name: "CartView",
      component: CartView,
    },
    {
      path: "/AdminView",
      name: "AdminView",
      component: AdminView,
    },
  ],
});

export default router;
