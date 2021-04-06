import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/views/sys/login/Login"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {Loading, Message} from 'element-ui';
import AuthDemo from '@/views/AuthDemo'
import el from "element-ui/src/locale/lang/el";

NProgress.configure({ showSpinner: false,ease: 'ease', speed: 500 })
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/authdemo',
    name: 'authDemo',
    component: AuthDemo,
    meta : {
      requireAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


let loading =Loading.service();
router.beforeEach((to, from, next) => {
  // console.log(to.path,from.path)
  //
  // if (to.path !== from.path) {
  //   loading = Loading.service({
  //     fullscreen: true,
  //     target: '.content-container',
  //     text: '页面跳转中...'
  //   });
  // }
  // else {
  //   loading.close();
  // }
  NProgress.start()

  if (to.meta.requireAuth) {
    document.title = to.meta.title || '';
    const user = JSON.parse(sessionStorage.getItem('lmssessionid'));
    if (!user && to.path !== '/login') {
      next('/login');
    } else if (to.meta.permission) {
      // user.permission === to.meta.permission ? next() : message.alert('没有权限');
      user.permission === to.meta.permission ? next() : this.message('没有权限');
    } else {
      next();
    }
  }
  else next()

})

router.afterEach(transition => {
  NProgress.done()
  setTimeout(() => {
    loading.close();
  }, 0)

})

export default router
