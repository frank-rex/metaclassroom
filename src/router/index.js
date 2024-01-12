import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {//'../views/home.vue'
      path:"/",
      name:'home',
      component:()=>import('../views/home.vue')
    },
    {
      path:"/",
      name:'lobby',
      component:()=>import('../views/lobby.vue')
    },
    {
      path:"/",
      name:'signupform',
      component:()=>import('../views/signupform.vue')
    },
    {
      path:"/test",
      name:'test',
      component:()=>import('../views/test.vue')
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: ()=>import('../views/classroom.vue')
    },
    {
      path:"/restaurant",
      name:'restaurant',
      component:()=>import('../views/restaurant.vue')
    },
    {
      path:"/MRT",
      name:'MRT',
      component:()=>import('../views/MRT.vue')
    },
    {
      path:"/supermarket",
      name:'supermarket',
      component:()=>import('../views/supermarket.vue')
    },
    {
      path:"/SupermarketLevel2",
      name:'SupermarketLevel2',
      component:()=>import('../views/Level2/SupermarketLevel2.vue')
    },
    {
      path:"/RestaurantLevel2",
      name:'RestaurantLevel2',
      component:()=>import('../views/Level2/RestaurantLevel2.vue')
    },
    {
      path:"/MRTLevel2",
      name:'MRTLevel2',
      component:()=>import('../views/Level2/MRTLevel2.vue')
    },
    {
      path:"/SupermarketLevel3",
      name:'SupermarketLevel3',
      component:()=>import('../views/Level3/SupermarketLevel3.vue')
    },
    {
      path:"/RestaurantLevel3",
      name:'RestaurantLevel3',
      component:()=>import('../views/Level3/RestaurantLevel3.vue')
    },
    {
      path:"/MRTLevel3",
      name:'MRTLevel3',
      component:()=>import('../views/Level3/MRTLevel3.vue')
    }
  ]
})

export default router
