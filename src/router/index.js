import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddJar from '@/components/Pages/AddJar'
import AgeSort from '@/components/Pages/AgeSort'
import NameSort from '@/components/Pages/NameSort'
import List from '@/components/Pages/List'
import Profile from '@/components/Users/Profile'
import SignIn from '@/components/Users/SignIn'
import SignUp from '@/components/Users/SignUp'

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
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }

  ],
  mode: 'history'
})
