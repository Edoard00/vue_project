import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MapView from '../views/MapView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mapView',
    name: 'MapView',
    component: MapView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;