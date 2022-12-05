import { createRouter, createWebHistory } from "vue-router";
import { useGlobalsStore } from "@/stores/globals";
import MainView from "@/views/MainView.vue";
import PersonView from "@/views/PersonView.vue";

/**
 * Create routes
 */
const routes = createRouter( {
  history       : createWebHistory( import.meta.env.BASE_URL ),
  scrollBehavior: () => ( { top: 0 } ),
  routes        : [
    {
      path     : "/",
      name     : "home",
      component: MainView
    },
    {
      path     : "/person/:id",
      name     : "person",
      component: PersonView
    }
  ]
} );


/**
 * Show preloader on route change
 */
routes.beforeEach( ( to, from, next ) => {

  let store = useGlobalsStore();
  store.setLoading( true );
  next();

} );

/**
 * Show preloader once route is done loading
 */
routes.afterEach( () => {

  let store = useGlobalsStore();
  store.setLoading( false );

} );

export default routes;

