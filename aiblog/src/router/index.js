import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
Vue.use(Router)


const router = new Router({
    mode:"history",
    routes:[
        { path: '/',
          component: Main,
          name:"Main"
        },
        { path: '/Login',
        component: () => import("@/components/Login"),
        name:"Login"
      }
    
    ]
})

export default router;