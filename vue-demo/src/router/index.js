import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import About from '../views/About.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Teacher from '../views/Teacher.vue'
import Login from '../components/Login.vue'
import MyCenter from "../views/MyCenter.vue"
import MyWork from "../components/MyWork.vue"
import TeacherMy from "../views/TeacherMy.vue"
import TeacherWork from "../components/TeacherWork.vue"
import Video from "../components/Video.vue"
import TeaCenter from "../views/TeaCenter.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path: '/teachermy',
    name: 'teachermy',
    component:TeacherMy
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mycenter',
    name: 'mycenter',
    component: MyCenter
  },
  {
    path: '/teacenter',
    name: 'teacenter',
    component: TeaCenter
  },
  {
    path: '/video',
    name: 'video',
    component: Video 
  },
  {
    path: '/teacherwork',
    name: 'teacherwork',
    component: TeacherWork
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: Teacher
  },
  {
    path: '/mywork',
    name: 'mywork',
    component:MyWork
  },
]

const router = new VueRouter({
  routes
})

export default router
