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
import ManagerApplicationInfoStep4 from '@/views/admin/manager-application/infomation/step4.vue';
import ManagerApplicationInfoStep5 from '@/views/admin/manager-application/infomation/step5.vue';
import ErrorPage from '@/components/ErrorPage.vue';

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
            name: 'CompleteProfileStep1',
            component: ManagerApplicationInfoStep1,
          },
          {
            path: 'step2',
            name: 'CompleteProfileStep2',
            component: ManagerApplicationInfoStep2,
          },
          {
            path: 'step3',
            name: 'CompleteProfileStep3',
            component: ManagerApplicationInfoStep3,
          },
          {
            path: 'step4',
            name: 'CompleteProfileStep4',
            component: ManagerApplicationInfoStep4,
          },
          {
            path: 'step5',
            name: 'CompleteProfileStep5',
            component: ManagerApplicationInfoStep5,
          },
          {
            path: '',
            redirect: { name: 'CompleteProfileStep1' },
          },
        ],
      },
      {
        path: 'change-password',
        component: ChangePassword,
      },
    ],
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: ErrorPage,
  },
  {
    path: '*',
    redirect: { name: 'PageNotFound' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
