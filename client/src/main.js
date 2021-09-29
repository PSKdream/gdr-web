import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import "bootstrap-icons/font/bootstrap-icons.css";
import store from "./store";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

createApp(App)
  .use(store)
  .use(router)
  .use(VueChartkick)
  .mount("#app");
