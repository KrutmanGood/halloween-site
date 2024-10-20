import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/AboutSupercell.vue'),
    },

    {
      path: '/action=voucher&code=3001dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gord1ck_1',
      component: () => import('@/pages/Gord1ck_1.vue'),
    },

    {
      path: '/action=voucher&code=3002dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gord1ck_2',
      component: () => import('@/pages/Gord1ck_2.vue'),
    },

    {
      path: '/action=voucher&code=3003dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_1',
      component: () => import('@/pages/Pablo_1.vue'),
    },

    {
      path: '/action=voucher&code=3004dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_2',
      component: () => import('@/pages/Pablo_2.vue'),
    },

    {
      path: '/action=voucher&code=3005dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'bogdan_1',
      component: () => import('@/pages/Bogdan_1.vue'),
    },

    {
      path: '/action=voucher&code=3006dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'quist_1',
      component: () => import('@/pages/Quist_1.vue'),
    },

    {
      path: '/action=voucher&code=3007dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'aksela_1',
      component: () => import('@/pages/Aksela_1.vue'),
    },

    {
      path: '/action=voucher&code=3008dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'harmless_1',
      component: () => import('@/pages/Harmless_1.vue'),
    },

    {
      path: '/action=voucher&code=3009dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'fronzes_1',
      component: () => import('@/pages/Fronzes_1.vue'),
    },

    {
      path: '/action=voucher&code=3010dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gord1ck_3',
      component: () => import('@/pages/Gord1ck_3.vue'),
    },

    {
      path: '/action=voucher&code=3011dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_3',
      component: () => import('@/pages/Pablo_3.vue'),
    },

    {
      path: '/action=voucher&code=3012dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_1',
      component: () => import('@/pages/Overfast_1.vue'),
    },

    {
      path: '/action=voucher&code=3013dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sheesh_1',
      component: () => import('@/pages/Sheesh_1.vue'),
    },

    {
      path: '/action=voucher&code=3014dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gass_1',
      component: () => import('@/pages/Gass_1.vue'),
    },

    {
      path: '/action=voucher&code=3015dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_4',
      component: () => import('@/pages/Pablo_4.vue'),
    },

    {
      path: '/action=voucher&code=3016dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_2',
      component: () => import('@/pages/Overfast_2.vue'),
    },

    {
      path: '/action=voucher&code=3017dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'bety_1',
      component: () => import('@/pages/Bety_1.vue'),
    },

    {
      path: '/action=voucher&code=3018dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'quist_2',
      component: () => import('@/pages/Quist_2.vue'),
    },
    
    {
      path: '/action=voucher&code=3019dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'quist_3',
      component: () => import('@/pages/Quist_3.vue'),
    },

    {
      path: '/action=voucher&code=3020dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_1',
      component: () => import('@/pages/Sua_1.vue'),
    },

    {
      path: '/action=voucher&code=3021dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_2',
      component: () => import('@/pages/Sua_2.vue'),
    },

    {
      path: '/action=voucher&code=3022dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_3',
      component: () => import('@/pages/Sua_3.vue'),
    },

    {
      path: '/action=voucher&code=3023dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_4',
      component: () => import('@/pages/Sua_4.vue'),
    },

    {
      path: '/action=voucher&code=3024dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'fronzes_2',
      component: () => import('@/pages/Fronzes_2.vue'),
    },

    {
      path: '/action=voucher&code=3025dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_5',
      component: () => import('@/pages/Sua_4.vue'),
    },

    {
      path: '/action=voucher&code=3026dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_6',
      component: () => import('@/pages/Sua_4.vue'),
    },

    {
      path: '/action=voucher&code=3027dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_7',
      component: () => import('@/pages/Sua_5.vue'),
    },

    {
      path: '/action=voucher&code=3028dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sua_8',
      component: () => import('@/pages/Sua_6.vue'),
    },

    {
      path: '/action=voucher&code=3029dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sandy_1',
      component: () => import('@/pages/Sandy_1.vue'),
    },

    {
      path: '/action=voucher&code=3030dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'flek_1',
      component: () => import('@/pages/Flek_1.vue'),
    },

    {
      path: '/action=voucher&code=3031dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'gass_2',
      component: () => import('@/pages/Gass_2.vue'),
    },

    {
      path: '/action=voucher&code=3032dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'lemme_1',
      component: () => import('@/pages/Lemme_1.vue'),
    },

    {
      path: '/action=voucher&code=3033dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_3',
      component: () => import('@/pages/Overfast_3.vue'),
    },

    {
      path: '/action=voucher&code=3034dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sandy_2',
      component: () => import('@/pages/Sandy_2.vue'),
    },

    {
      path: '/action=voucher&code=3035dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'overfast_4',
      component: () => import('@/pages/Overfast_4.vue'),
    },

    {
      path: '/action=voucher&code=9201a9df-5440-4d8e-9e44-84a84504ea63',
      name: 'treyzi_1',
      component: () => import('@/pages/Treyzi_1.vue'),
    },

    {
      path: '/action=voucher&code=3036dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'pablo_5',
      component: () => import('@/pages/Pablo_5.vue'),
    },

    {
      path: '/action=voucher&code=3037dcf5-b25d-467e-a4d3-cf597a5f6a23',
      name: 'sheesh_2',
      component: () => import('@/pages/Sheesh_2.vue'),
    },
  ]
})

export default router
