import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Room from '@/components/Room'

Vue.use(Router)
export const router = new Router({
//  mode: 'history',
 routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/room',
    name: 'room',
    component: Room
  },
 ]
})