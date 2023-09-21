import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../pages/HomePage.vue";
import AuthPage from "../pages/AuthPage.vue";
import ProductCatalogPage from "../pages/ProductCatalogPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import UsersProducts from "../pages/UsersProducts.vue";
import FavouriteProductsPage from "../pages/FavouriteProductsPage.vue"
import SelectCategoryPage from "../pages/SelectCategoryPage.vue"
import CreateAdPage from "../pages/CreateAdPage.vue"

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path:'/auth',
    component: AuthPage
  },
  {
    path:'/product-catalog',
    component: ProductCatalogPage
  },
  {
    path:'/products/:id',
    component: ProductPage
  },
  {
    path:'/users/:id/ads',
    component: UsersProducts
  },
  {
    path:'/my/favourites',
    component: FavouriteProductsPage 
  },
  {
    path:'/select-categories',
    component: SelectCategoryPage 
  },
  {
    path:'/select-categories/:categoryName/create-ad',
    component: CreateAdPage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;