import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
const app = createApp(App).use(router);

const api = axios.create({
  baseURL: "http://localhost:3000",
});
app.config.globalProperties.axios = api;
app.mount("#app");
