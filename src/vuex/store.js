
import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        common
    },
    getters
}) // 这里你可能已经有其他 module




export default store