import { createRouter, createWebHistory } from 'vue-router';
import MainView from './views/MainView.vue';

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/:personId',
      name: 'detail',
      component: () => import('./views/DetailView.vue'),
    },
  ],
});

export default routes;
