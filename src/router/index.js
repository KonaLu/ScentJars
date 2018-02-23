import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddJar from '@/components/Pages/AddJar'
import AgeSort from '@/components/Pages/AgeSort'
import NameSort from '@/components/Pages/NameSort'
import List from '@/components/Pages/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/NameSort',
      name: 'NameSort',
      component: NameSort
    },
    {
      path: '/AgeSort',
      name: 'AgeSort',
      component: AgeSort
    },
    {
      path: '/AddJar',
      name: 'AddJar',
      component: AddJar
    }
  ],
  mode: 'history'
})
