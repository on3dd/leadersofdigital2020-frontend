import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home';
import Profile from '../views/profile';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'shops',
      },
      {
        path: 'shops',
        name: 'Shops',
        component: () =>
          import(/* webpackChunkName: "shops" */ '../views/home/shops'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () =>
          import(/* webpackChunkName: "products" */ '../views/home/products'),
      },
    ],
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
