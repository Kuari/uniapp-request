import Vue from "vue";
import App from "./App";
import request from "./utils/request";

Vue.config.productionTip = false;

App.mpType = "app";

Vue.use(request);

const app = new Vue({
  ...App
});
app.$mount();
