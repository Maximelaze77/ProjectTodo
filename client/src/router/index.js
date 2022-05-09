import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('../components/homepage15.vue')
  },
  {
  path: '/todo',
  name: 'todo',
  component: () => import('../components/todo.vue')
},

{
  name: 'Login2053289',
  path: '/login2053289',
  component: () => import('../components/login2053289.vue')
},

{
  name: 'Register2053447',
  path: '/register2053447',
  component: () => import('../components/register2053447.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
