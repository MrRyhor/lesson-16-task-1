import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue"


const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: () => import('../views/DriversView'),
    },
    {
        path: '/drivers/config/:driverId?',
        name: 'drivers-config',
        component: () => import('../components/EditView.vue'),
    },
    {
        path: '/busses',
        name: 'busses',
        component: () => import('../views/BussesView.vue'),
    },
    {
        path: '/busses/config/:busId?',
        name: 'busses-config',
        component: () => import('../components/EditView.vue'),
    },
    {
        path: '/asignments',
        name: 'asignments',
        component: () => import('../views/AsignmentsView'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/ContactsView.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
