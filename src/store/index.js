import Vue from 'vue'

import Vuex from 'vuex'
import homedataModule from '@/store/homedata/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        homedataStore: homedataModule
    }
});

export default store;