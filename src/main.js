import Vue from 'vue';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';
import App from './App.vue';
import axios from './plugins/axios';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuetify, {
  iconfont: 'md',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
