import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/layouts/PublicLayout.vue'),
    children: [
      {
        path: '', 
        component: () => import('../views/HomeView.vue'),
      },
      // 其他前台頁面的路由
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/admin/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/admin/AdminPage.vue'),
      },
      // 其他後台頁面的路由
    ],
  },
  // 其他可能的路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
