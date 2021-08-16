import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Hello from '../views/heeloWolrd.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/helloWolrd',
    name: 'hello',
    component: Hello,
    // children: cria uma rota filha dentro de um rota
    children:[
      {
        path: "victor",
        name: "victor",
        component: About
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
