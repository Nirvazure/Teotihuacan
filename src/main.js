import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import vuetify from "./plugins/vuetify";
import VueParticles from 'vue-particles'

import Bars from 'vuebars'
Vue.use(Bars)

import animate from "animate.css";
Vue.use(animate);
Vue.use(VueParticles)

import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  ak: "0Sh2kkt8N8DVyCI4pxzWg7HxQGGQ1l0S",
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");