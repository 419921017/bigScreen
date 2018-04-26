<template>
    <div class="table-swiper">
        <swiper v-model="baseIndex" height="100%" :auto="true" :loop="true" :duration="1200" :interval="4000" :show-dots="false" @on-index-change="onIndexChange">
            <swiper-item v-for="(option, j) in swiperData" :key="option.label">
                <!-- 5个 fl -->
                <div class="fl w25p h100p" v-for="five in option.data">
                    <!-- 上中下 -->
                    <div class="courier-content-right-con">
                        
                        <div class="courier-content-right-item">
                            <div class="courier-content-right-item-label nowrap">{{five.label}}</div>
                        </div>
                        <div v-for="(item, i) in five.data" class="courier-content-right-item">
                            <!-- <div class="courier-content-right-item-label"></div> -->
                            <div class="courier-content-right-item-top">
                                <div class="courier-content-right-item-top-con">
                                    <span class="iconfont green" slot="icon"  v-show="item.value > 90">&#xe644;</span>
                                    <span class="iconfont yellow" slot="icon"  v-show="item.value <= 90 && item.value > 70">&#xe66e;</span>
                                    <span class="iconfont red" slot="icon" v-show="item.value <= 70">&#xe613;</span>
                                </div>
                            </div>
                            <div class="courier-content-right-item-bottom">
                                <div class="courier-content-right-item-bottom-con">
                                    {{item.value + '%'}}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
}, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
}, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
}]
export default {
    components: {
        Swiper,
        SwiperItem,
        GroupTitle,
        XButton,
        Divider
    },
    data() {
        return {
            baseList,
            baseIndex: 0,
            swiperData: [
                {
                    label: 'one',
                    data: [
                        {
                        label: '北京虹迪NIKE',
                        data: [
                            {
                                label: '',
                                value: 70
                            },
                            {
                                label: '',
                                value: 80
                            },
                            {
                                label: '',
                                value: 90
                            },
                            {
                                label: '',
                                value: 100
                            },
                            {
                                label: '',
                                value: 70
                            },
                        ]
                    },
                    {
                        label: '北京虹迪NIKE',
                        data: [

                            {
                                label: '',
                                value: 70
                            },
                        ]
                    },
                    {
                        label: '北京虹迪NIKE',
                        data: [

                            {
                                label: '',
                                value: 70
                            },
                        ]
                    },
                    {
                        label: '北京虹迪NIKE',
                        data: [

                            {
                                label: '',
                                value: 70
                            },
                        ]
                    },
                   ]
                },
                {
                    label: 'two',
                    data: [
                        {
                            label: '北京利丰NIKE',
                            data: [
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 100
                                },
                                {
                                    label: '',
                                    value: 60
                                },
                                {
                                    label: '',
                                    value: 50
                                },
                            ]
                        },
                        {
                            label: '北京利丰NIKE',
                            data: [
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 100
                                },
                                {
                                    label: '',
                                    value: 60
                                },
                                {
                                    label: '',
                                    value: 50
                                },
                            ]
                        },
                        {
                            label: '北京利丰NIKE',
                            data: [
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 100
                                },
                                {
                                    label: '',
                                    value: 60
                                },
                                {
                                    label: '',
                                    value: 50
                                },
                            ]
                        },
                        {
                            label: '北京利丰NIKE',
                            data: [
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 100
                                },
                                {
                                    label: '',
                                    value: 60
                                },
                                {
                                    label: '',
                                    value: 50
                                },
                            ]
                        },
                    ]
                },
                {
                    label: 'three',
                    data: [
                        {
                            label: '北京廊坊',
                            data: [
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 100
                                },
                                {
                                    label: '',
                                    value: 60
                                },
                                {
                                    label: '',
                                    value: 50
                                },
                            ]
                        },
                        {
                            label: '北京廊坊',
                            data: [
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 100
                                },
                                {
                                    label: '',
                                    value: 60
                                },
                                {
                                    label: '',
                                    value: 50
                                },
                            ]
                        },
                        {
                            label: '北京廊坊',
                            data: [
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 100
                                },
                                {
                                    label: '',
                                    value: 60
                                },
                                {
                                    label: '',
                                    value: 50
                                },
                            ]
                        },
                        {
                            label: '北京廊坊',
                            data: [
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 90
                                },
                                {
                                    label: '',
                                    value: 100
                                },
                                {
                                    label: '',
                                    value: 60
                                },
                                {
                                    label: '',
                                    value: 50
                                },
                            ]
                        },
                    ]
                }


            ]
        }
    },
    methods: {
        onIndexChange(index) {
            this.baseIndex = index
        }
    }
}
</script>

<style lang="less">
.table-swiper {
    width: 100%;
    height: 100%;
    .vux-slider {
        height: 100%;
    }
    .courier-content-right-con {
        width: 100%;
        height: 100%;
        float: left;
        .courier-content-right-item {
            height: 16.66666666666666%;
            width: 100%;
            font-size: 25%;
            text-align: right;
            color: #97A8B7;
            font-weight: bold;
            position: relative;
            text-align: center;

            .courier-content-right-item-label {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateY(-50%) translateX(-50%);
            }
            .courier-content-right-item-top{
                position: relative;
                height: 70%;
                font-weight: normal;
                .courier-content-right-item-top-con {

                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-50%) translateX(-50%);
                }
            }
            .courier-content-right-item-bottom {
                position: relative;
                height: 30%;
                font-weight: normal;
                .courier-content-right-item-bottom-con {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-50%) translateX(-50%);
                }
            }
        }
    }
}
</style>
