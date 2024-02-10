import { createRouter, createWebHistory } from 'vue-router';
import ListView from './views/ListView.vue';
import DetailView from './views/DetailView.vue';

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView,
    },
    {
      path: '/detail/:id',
      name: 'detailview',
      component: DetailView,
    },
  ],
});

export default routes;
