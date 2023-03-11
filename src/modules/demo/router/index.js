export default [
  {
    path: '/',
    redirect: '/',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/layouts/MainLayout'),
    children: [
      {
        path: '',
        name: 'demo',
        meta: { title: 'demo', auth: false },
        component: () =>
          import(/* webpackChunkName: "demo" */ '@/modules/demo'),
      },
    ],
  },
];
