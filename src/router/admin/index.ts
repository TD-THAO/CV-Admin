import Admin from '@/views/admin/index.vue';
import Dashboard from '@/views/admin/dashboard.vue';
import Categories from '@/views/admin/category/list.vue';
import Products from '@/views/admin/product/list.vue';

export default [
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'categories',
        name: 'categories',
        component: Categories,
      },
      {
        path: 'products',
        name: 'products',
        component: Products,
      },
    ],
  },
];
