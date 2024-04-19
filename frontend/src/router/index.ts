import { createRouter, createWebHistory } from 'vue-router'
import AdminSignIn from '../components/AdminSignIn.vue'
import UserSignIn from '../components/user/UserSignIn.vue'
import LogInAs from '../components/LogInAs.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import AdminPriority from '../views/AdminPriority.vue'
import AdminStatus from '../views/AdminStatus.vue'
import AdminDepartment from '../views/AdminDepartment.vue'
import AdminAddUser from '../views/AdminAddUser.vue'
import AdminRole from '../views/AdminRole.vue'
// import SignUp from '../components/SignUp.vue'

import CreateTicket from '../views/user/UserCreateTicket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LogInAs',
      component: LogInAs
    },
    {
      path: '/admin/signin',
      name: 'adminSignIn',
      component: AdminSignIn
    },
    {
      path: '/user/signin',
      name: 'userSignIn',
      component: UserSignIn
    },
    {
      path: '/admin/dashboard',
      name: 'adminDashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/priority',
      name: 'adminPriority',
      component: AdminPriority
    },
    {
      path: '/admin/status',
      name: 'adminStatus',
      component: AdminStatus
    },
    {
      path: '/admin/roles',
      name: 'adminRole',
      component: AdminRole
    },
    {
      path: '/admin/department',
      name: 'adminDepartment',
      component: AdminDepartment
    },
    {
      path: '/admin/add/user',
      name: 'adminAddUser',
      component: AdminAddUser
    },
    {
      path: '/user/create/ticket',
      name: 'createTicket',
      component: CreateTicket
    },
  ]
})

export default router
