import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'utils/rem.js';

import 'styles/_reset.styl'

import store from '@/store'

import router from '@/router'



new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')