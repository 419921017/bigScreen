<template>
    <div id="app">
        <div v-transfer-dom>
            <loading v-model="isLoading"></loading>
        </div>
        <div v-transfer-dom>
            <alert v-model="show" :title="'请求失败'" @on-show="onShow" @on-hide="onHide"> {{ '貌似请求失败了!'}}</alert>
        </div>
        <!-- body-padding-bottom="55px" -->
        <view-box ref="viewBox" body-padding-top="0px" body-padding-bottom="0px">
            <!-- <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :right-options="rightOptions" :title="title" :transition="headerTransition" @on-click-more="onClickMore"></x-header> -->

            <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
                <router-view class="router-view"></router-view>
            </transition>
            <!-- <tabbar @on-index-change="onIndexChange">
                <tabbar-item :link="{path: item.link }" :selected="tableIndex == index" :key="item.link" v-for="(item, index) in tableItems">
                    <span class="iconfont" slot="icon" v-html="item.src"></span>
                    <span slot="label">{{item.label}}</span>
                </tabbar-item>
            </tabbar> -->
        </view-box>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom, Alert } from 'vux'
import { getWxTicket, getWxToken } from 'src/api/wxApi'
export default {
    name: 'app',
    directives: {
        TransferDom
    },
    components: {
        Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, Alert
    },
    computed: {
        ...mapState({
            route: state => state.route,
            path: state => state.route.path,
            corpsecret: state => state.common.corpsecret,
            corpid: state => state.common.corpid,
            alertShow: state => state.common.alertShow,
            // demoTop: state => state.vux.demoScrollTop,
            isLoading: state => state.common.isLoading,
            direction: state => state.common.direction,
            access_token: state => state.common.access_token,
            jsapi_ticket: state => state.common.jsapi_ticket
        }),
        // ...mapGetters([
        //     'isLoading',
        //     'corpid',
        //     'corpsecret',
        //     'alertShow'
        // ]),
        state1() {
            console.log(this.$state)
        },
        title() {
            let lastIndex = this.route.path.lastIndexOf('/')
            let title = this.route.path.slice(lastIndex)
            console.log('lastIndex', lastIndex)
            // console.log('title', title)
            // if (this.route.path === '/') return 'Home'
            // if (this.route.path === '/project/donate') return 'Donate'
            // if (this.route.path === '/demo') return 'Demo list'
            // return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
            return title
        },
        // isShowBar() {
        //     if (/component/.test(this.path)) {
        //         return true
        //     }
        //     return false
        // },
        // leftOptions() {
        //     return {
        //         showBack: this.route.path !== '/'
        //     }
        // },
        // rightOptions() {
        //     return {
        //         showMore: true
        //     }
        // },
        // headerTransition() {
        //     return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
        // },
        // show () {
        //     return this.alertShow
        // }
    },
    data() {
        return {
            show: false,
            tableItems: [
                {
                    label: 'home',
                    src: '&#xe6d3;',
                    srcActive: './assets/img/store_active.png',
                    link: '/'
                },
                {
                    label: 'data',
                    src: '&#xe6bc;',
                    srcActive: './assets/img/store_active.png',
                    link: 'data'
                },
                {
                    label: 'operation',
                    src: '&#xe6bf;',
                    srcActive: './assets/img/dash_active.png',
                    link: 'operation'
                },
                // {
                //     label: 'manage',
                //     src: '&#xe660;',
                //     srcActive: './assets/img/merch_active.png',
                //     link: 'manage'
                // },
                {
                    label: 'department',
                    src: '&#xe6cd;',
                    srcActive: './assets/img/campaign_active.png',
                    link: 'department'
                },
            ],
            tableIndex: 0
        }
    },
    watch: {
        'show'(val) {
            console.log('show', val)
        },
        'alertShow'(val) {
            this.show = val
            console.log('alertShow', val)
        }
    },
    methods: {
        onHide() {
            console.log('on hide')
        },
        onShow() {
            console.log('on show')
        },
        onClickMore() {
            this.showMenu = true
        },
        onIndexChange(newIndex, oldIndex) {
            console.log(newIndex, oldIndex)
            this.tableIndex = newIndex
        },
        getWxTicket() {
            this.$http.get('', {

            })
        },
        wxInit() {
            let _this = this
            let corpid = this.corpid,
                corpsecret = this.corpsecret,
                jsapi_ticket = this.jsapi_ticket,
                timestamp = (new Date()).valueOf(),
                nonceStr = this.noncestr(false, 16),
                signature = '',
                jsApiList = ['hideOptionMenu'],
                url = 'http://s5sekc.natappfree.cc'

            let requestObj = {
                jsapi_ticket,
                nonceStr,
                timestamp,
                url
            }
            for(let key in requestObj){
                if(requestObj[key] && requestObj[key].length > 0){
                    signature += key + '=' + requestObj[key] + '&'
                }

            }
            signature = signature.slice(0, signature.length - 2)
            signature = this.sha1(signature)
            console.log( 'signature', signature )
            if (corpid && corpsecret && timestamp && nonceStr && signature && jsApiList.length > 0) {
                let params = {
                    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: corpid, // 必填，企业微信的cropID
                    timestamp: timestamp, // 必填，生成签名的时间戳
                    nonceStr: nonceStr, // 必填，生成签名的随机串
                    signature: signature,// 必填，签名，见附录1
                    jsApiList: jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                }
                _this.wxConfig(params)
            }
        

            // this.$wechat.config({
            //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            //     appId: this.groupId, // 必填，企业微信的cropID
            //     timestamp: '', // 必填，生成签名的时间戳
            //     nonceStr: '', // 必填，生成签名的随机串
            //     signature: '',// 必填，签名，见附录1
            //     jsApiList: [
            //         'hideOptionMenu'
            //     ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            // });

            // this.$wechat.ready(function() {
            //     console.log('ready')
            // })

            // this.$wechat.error(function(res) {
            //     console.log('res', res)
            // })
        },
        wxConfig(params) {
            console.log( 'params', params )
            this.$wechat.config(params);

            this.$wechat.ready(function() {
                console.log('ready')
            })

            this.$wechat.error(function(res) {
                console.log('res', res)
            })
        }
    },
    mounted() {
        this.wxInit()
    }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import './assets/css/common.less';
@font-face {
  font-family: 'iconfont';  /* project id 395311 */
  src: url('//at.alicdn.com/t/font_395311_fp64ddkf0qeel8fr.eot');
  src: url('//at.alicdn.com/t/font_395311_fp64ddkf0qeel8fr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_395311_fp64ddkf0qeel8fr.woff') format('woff'),
  url('//at.alicdn.com/t/font_395311_fp64ddkf0qeel8fr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_395311_fp64ddkf0qeel8fr.svg#iconfont') format('svg');
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 24px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

html,
body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}

#app {
    height: 100%;
    width: 100%;
}

.vux-demo-tabbar-component {
    background-color: #F70968;
    color: #fff;
    border-radius: 7px;
    padding: 0 4px;
    line-height: 14px;
}

.router-view {
    width: 100%;
    height: 100%;
    overflow: hidden; //   top: 46px;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%; //   top: 46px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
}

.vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.img-width {
    height: auto !important;
    max-width: 100% !important;
}
</style>
