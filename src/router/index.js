import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import(/* webpackChunkName: "p-home" */ '../pages/user/Home.vue');
const DetailProduct = () => import(/* webpackChunkName: "p-detailProduct" */ '../pages/user/DetailProduct.vue');
const Assessment = () => import(/* webpackChunkName: "p-assessment" */ '../pages/user/Assessment.vue');
const ProductSearch = () => import(/* webpackChunkName: "p-productSearch" */ '../pages/user/ProductSearch.vue');
const Login = () => import(/* webpackChunkName: "p-login" */ '../pages/user/Login.vue');
const Register = () => import(/* webpackChunkName: "p-register" */ '../pages/user/Register.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'DetailProduct',
    component: DetailProduct,
  },
  {
    path: '/product/assessment/:id',
    name: 'Assessment',
    component: Assessment,
  },
  {
    path: '/product/:type/:value',
    name: 'ProductSearch',
    component: ProductSearch,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
