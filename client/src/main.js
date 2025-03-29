import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "./assets/styles.css";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(),
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
