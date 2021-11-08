import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Education from '../pages/Education.vue'
import NotFound from '../pages/NotFound.vue'
import WorkExperience from '../pages/WorkExperience.vue'
import PersonalLife from '../pages/PersonalLife.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
	  name: 'Home',
      path: '/', 
      component: Home,
      //beforeEnter: requireAuth
    },
	{ 
      path: '/education', 
      component: Education,
      //beforeEnter: requireAuth
    },
	{ 
      path: '/work_experience', 
      component: WorkExperience,
      //beforeEnter: requireAuth
    },
	{ 
      path: '/personal_life', 
      component: PersonalLife,
      //beforeEnter: requireAuth
    },  
    { 
      path: '*', 
      component: NotFound 
    }
  ]
})

export default router

