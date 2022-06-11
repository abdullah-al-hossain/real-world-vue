import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import TestView from '../views/TestView.vue'
import EventDetails from '../views/EventDetails.vue'

const routes = [
  {
    path: '/',
    name: 'EventListView',
    component: EventListView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
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
