// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import router from './router/index'
import App from './App'
import Home from './components/HelloFromVux'
import Tools from './units/function'
import { WechatPlugin } from 'vux'
import { AjaxPlugin } from 'vux'
import store from './vuex/store'
import './units/rem'
import ECharts from 'vue-echarts/components/ECharts.vue'
    // import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// built-in theme
import 'echarts/theme/dark'
// custom theme
import theme from './units/walden.project.json'
// Map of China
import map from './units/china.json'



// registering map data
ECharts.registerMap('china', map)
console.log( 'ECharts', ECharts )
// registering custom theme
ECharts.registerTheme('blue-normal', theme)

Vue.component('chart', ECharts)

Vue.use(WechatPlugin)

Vue.use(AjaxPlugin)

Vue.use(VueRouter)

Tools(Vue)

sync(store, router)
// 全局loading
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0

history.setItem('/', 0)
router.beforeEach(function (to, from, next) {
    console.log(store)
    store.commit('UpdateLoadingStatus', { isLoading: true })
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)

    if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            store.commit('updateDirection', { direction: 'forward' })
        } else {
            store.commit('updateDirection', { direction: 'reverse' })
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        store.commit('updateDirection', { direction: 'forward' })
    }

    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        next()
    }
})

router.afterEach(function (to) {
    store.commit('UpdateLoadingStatus', { isLoading: false })
})


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')
