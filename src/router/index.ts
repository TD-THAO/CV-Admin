import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/home/home.vue';
import Login from '@/views/auth/login/login.vue';
import Registration from '@/views/auth/registration.vue';
import Admin from '@/views/admin/index.vue';
import PersonalInfomation from '@/views/admin/manager-account/personal-info.vue';
import ChangePassword from '@/views/admin/manager-account/change-password.vue';
import ManagerApplicationInfo from '@/views/admin/manager-application/infomation/steps.vue';
import ManagerApplicationInfoStep1 from '@/views/admin/manager-application/infomation/step1.vue';
import ManagerApplicationInfoStep2 from '@/views/admin/manager-application/infomation/step2.vue';
import ManagerApplicationInfoStep3 from '@/views/admin/manager-application/infomation/step3.vue';

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
      {
        path: 'complete-profile',
        name: 'CompleteProfile',
        component: ManagerApplicationInfo,
        children: [
          {
            path: 'step1',
            component: ManagerApplicationInfoStep1,
          },
          {
            path: 'step2',
            component: ManagerApplicationInfoStep2,
          },
          {
            path: 'step3',
            component: ManagerApplicationInfoStep3,
          },
        ]
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
