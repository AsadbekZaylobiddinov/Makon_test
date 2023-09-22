import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import { createPinia } from 'pinia';
import  router  from './routing/router'

axios.defaults.baseURL = "http://asadbek1502-001-site1.atempurl.com/api";

var store = createPinia()

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');


app.config.devtools = true;