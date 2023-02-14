import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(fas, fab)

const app = createApp(App);

app.use(router);
// eslint-disable-next-line vue/multi-word-component-names
app.component('fa', FontAwesomeIcon)
app.mount("#app");
import 'bootstrap/dist/js/bootstrap.js';
