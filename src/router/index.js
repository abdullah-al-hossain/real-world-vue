import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import TestView from '../views/TestView.vue'
import EventLayout from '../views/event/Layout.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'EventListView',
    component: EventListView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        props: true,
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'EventRegister',
        props: true,
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        props: true,
        component: EventEdit,
      },
    ],
  },
  {
    path: '/test-route',
    name: 'TestView',
    component: TestView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
