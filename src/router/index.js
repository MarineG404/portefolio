import { createRouter, createWebHistory } from "vue-router";
import Home from "../layouts/MainPage.vue";
import Music from "../layouts/Music.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/music", name: "Music", component: Music },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // try to find the element and compute offset to account for fixed nav
      if (typeof document !== "undefined") {
        const el = document.querySelector(to.hash);
        if (el) {
          const nav = document.querySelector("nav");
          const navHeight = nav ? nav.offsetHeight : 0;
          const extraGap = 12;
          const top =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            navHeight -
            extraGap;
          return { left: 0, top, behavior: "smooth" };
        }
      }
      return { el: to.hash, behavior: "smooth" };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});
