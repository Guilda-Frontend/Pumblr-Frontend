import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);

const { routes } = require('@/router');

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
