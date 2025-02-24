import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './tailwindcss.css';
import * as EmementPlusIconsVue from '@element-plus/icons-vue';

const pinia = createPinia();

const app = createApp(App);

Object.keys(EmementPlusIconsVue).forEach((key) => {
  app.component(key, EmementPlusIconsVue[key]);
});

app.use(router).use(pinia).use(ElementPlus);
app.mount('#app');
