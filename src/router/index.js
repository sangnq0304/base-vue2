import Vue from 'vue';
import VueRouter from 'vue-router';
import demo from '@/modules/demo/router';

Vue.use(VueRouter);

const routes = [{ path: '*', redirect: '/' }, ...demo];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
