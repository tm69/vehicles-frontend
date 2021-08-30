import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import './index.css'

const API_BASE_URL = 'http://localhost:8000';
const VUE_APP_URL = 'http://localhost:8080';

Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: API_BASE_URL,
      withCredentials: true,
    });
    Vue.prototype.$api.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        if (error.response.status === 401 || error.response.status === 419) {
          Vue.prototype.$api.get("/sanctum/csrf-cookie").then(() => {
            window.location = `${VUE_APP_URL}/login`;
          });
        }
        if (error.response.status === 403) {
          window.location = process.env.VUE_APP_URL;
        }
        return Promise.reject(error);
      }
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
