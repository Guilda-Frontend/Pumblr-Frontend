const routes =  [
    { path: '/', component: () => import('@/components/HelloWorld') },
    { path: '/login', component: () => import('@/components/Login') },
    { path: '/password-reset', component: () => import('@/components/PasswordReset') }
  ];

module.exports = { routes }