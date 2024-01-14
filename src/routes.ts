import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import ListView from './views/ListView.vue';
import DetailView from './views/DetailView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ListView',
    component: ListView,
    children: [
      {
        path: '/details/:id',
        name: 'DetailView',
        component: DetailView,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
