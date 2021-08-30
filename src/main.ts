//@ts-ignore
import Top from "./Top";

import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import vuetify from './plugins/vuetify';


const routerOption: RouterOptions = {
  routes: [
    { path: "/", component: Top }
  ],
};
const router = new VueRouter(routerOption);

Vue.use(VueRouter);

router.push("/");
new Vue({
  el: `#entry`,
  template: `<router-view></router-view>`,
  router,
  vuetify,
});
