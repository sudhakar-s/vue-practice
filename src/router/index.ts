import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'service-catalog' },
    },
    {
      path: '/service-catalog',
      name: 'service-catalog',
      component: () => import(/* webpackPreload: true */ '@/views/ServiceCatalogs/ServiceCatalogs.vue'),
    },
    {
      path: '/service-catalog/:id',
      name: 'service-catalog-by-id',
      component: () => import(/* webpackPrefetch: true */ '@/views/ServiceCatalogsById.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
