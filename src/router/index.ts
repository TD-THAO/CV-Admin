import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home/home.vue';
import Login from '../views/auth/login/login.vue';
import Registration from '../views/auth/registration.vue';
import Admin from '../views/admin/index.vue';
import PersonalInfomation from '../views/admin/manager-account/personal-info.vue';
import ChangePassword from '../views/admin/manager-account/change-password.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '',
        component: PersonalInfomation,
      },
      {
        path: 'change-password',
        component: ChangePassword,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
