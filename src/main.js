import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import '@/plugins/styles';
import '@/plugins/vueCarousel';

Vue.config.productionTip = false

export default new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
