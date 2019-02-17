import Vue from 'vue';
import App from './App.vue';

import router from './router'
import '@/styles/index.scss' // global css
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import i18n from './lang'

Vue.config.productionTip = false;

Vue.use(Element)

// {
//   size: Cookies.get('size') || 'medium', // set element-ui default size
//   i18n: (key, value) => i18n.t(key, value)
// }

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')