import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: () => import('@@/main.vue')
  },
  {
    path: "/category",
    name: "categoryPage",
    meta: {
      title: '游戏分类',
      sub: 1
    },
    component: () => import('@/pages/category.vue')
  },
  {
    path: "/mall",
    name: "mallPage",
    meta: {
      title: '道具商城',
      sub: 1
    },
    component: () => import('@/pages/mall.vue')
  },
  {
    path: "/coupon",
    name: "couponPage",
    meta: {
      title: '礼券中心',
      sub: 1
    },
    component: () => import('@/pages/coupon.vue')
  },
  {
    path: "/user",
    name: "userPage",
    meta: {
      title: '用户中心',
      sub: 1
    },
    component: () => import('@/pages/user.vue')
  },
  {
    path: "/search",
    name: "searchPage",
    meta: {
      title: '~~~',
      sub: 1
    },
    component: () => import('@/pages/search.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
