import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import EditView from '@/views/EditView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/create', component: CreateView, },
    { path: '/edit/:id', component: EditView, },
    { path: '/detail/:id', component: DetailView, },
    
  ],
})

export default router
