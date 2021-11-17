
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path:'',
        component: () => import ('components/Main-Page.vue')
      },
    ]
  },
    {
      path:'/registration',
      component: () => import ('components/Registration.vue')
    },
    {
      path:'/view-page',
      component: () => import ('components/View-Page.vue')
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
