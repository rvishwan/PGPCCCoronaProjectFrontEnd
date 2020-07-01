
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },
  {
    path: '/AssessStatus',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/CoronaAnalysis',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CoronaAnalysis.vue') }]
  },
  {
    path: '/Safe',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Safe.vue') }]
  },

  {
    path: '/Unsafe',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Unsafe.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
