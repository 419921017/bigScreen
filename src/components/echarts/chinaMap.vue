<template>
    <chart :options="polar" class="w100p h100p" style="width: 100%;height: 100%;">
    </chart>
</template>

<script>
import echarts from 'echarts'
import chinaMap from 'src/units/china.json'
import map from 'src/units/map.js'

export default {
    props: ['data'],
    data() {
        return {
            map
        }
    },
    computed: {
        polar() {
            let yLeft = this.data.yLeft || [0]
            let yRight = this.data.yRight || [0]
            let xTop = this.data.xTop || [0]
            let xBottom = this.data.xBottom || [0]
            var geoCoordMap = {
                '广州': [113.5107, 23.2196],
                '北京': [116.4551, 40.2539],
                '天津': [117.4219, 39.4189],
                '上海': [121.4648, 31.2891],
                '重庆': [106.557165, 29.563206],
                '河北': [114.508958, 38.066606],
                '河南': [113.673367, 34.748062],
                '云南': [102.721896, 25.047632],
                '辽宁': [123.445621, 41.806698],
                '黑龙江': [126.655705, 45.759581],
                '湖南': [112.950888, 28.229114],
                '安徽': [117.300842, 31.887672],
                '山东': [117.029895, 36.677424],
                '新疆': [87.616327, 43.800508],
                '江苏': [118.814345, 32.061445],
                '浙江': [120.16991, 30.272236],
                '江西': [115.904962, 28.674132],
                '湖北': [114.290138, 30.595623],
                '广西': [108.381781, 22.815042],
                '甘肃': [103.851217, 36.061978],
                '山西': [112.57197, 37.879532],
                '内蒙古': [112.57197, 37.879532],
                '陕西': [108.960062, 34.285251],
                '吉林': [126.572746, 43.86785],
                '福建': [119.319713, 26.072564],
                '贵州': [106.557165, 29.563206],
                '广东': [113.238778, 23.161621],
                '青海': [101.787147, 36.621234],
                '西藏': [91.154492, 29.665953],
                '四川': [104.082256, 30.652565],
                '宁夏': [106.234805, 38.487468],
                '海南': [109.910757, 19.108187],
                '台湾': [121.098613, 23.778734],
                '香港': [114.168545, 22.36641],
                '澳门': [113.549978, 22.1943]
            };

            var GZData = [
                [{ name: '北京', value: 96 }, { name: '广州' }],
                [{ name: '黑龙江', value: 90 }, { name: '广州' }],
                [{ name: '内蒙古', value: 66 }, { name: '广州' }],
                [{ name: '西藏', value: 70 }, { name: '广州' }],
                [{ name: '陕西', value: 94 }, { name: '广州' }],
                [{ name: '广西', value: 79 }, { name: '广州' }],
            ];

            var JSData = [
                [{ name: '北京', value: 96 }, { name: '广州' }],
                [{ name: '黑龙江', value: 90 }, { name: '广州' }],
                [{ name: '内蒙古', value: 66 }, { name: '广州' }],
                [{ name: '西藏', value: 70 }, { name: '广州' }],
                [{ name: '陕西', value: 94 }, { name: '广州' }],
                [{ name: '广西', value: 79 }, { name: '广州' }],
            ];

            var BJData = [
                [{ name: '北京', value: 96 }, { name: '广州' }],
                [{ name: '黑龙江', value: 90 }, { name: '广州' }],
                [{ name: '内蒙古', value: 66 }, { name: '广州' }],
                [{ name: '西藏', value: 70 }, { name: '广州' }],
                [{ name: '陕西', value: 94 }, { name: '广州' }],
                [{ name: '广西', value: 79 }, { name: '广州' }],
            ];

            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem[1].name];
                    var toCoord = geoCoordMap[dataItem[0].name];
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[1].name,
                            toName: dataItem[0].name,
                            coords: [fromCoord, toCoord]
                        });
                    }
                }
                return res;
            };

            var forData = [
                ['广州', GZData],
                ['江苏', JSData],
                ['北京', BJData]
            ];

            var series = [];
            forData.forEach(function(item, i) {
                series.push(
                    {//线
                        name: item[2],
                        type: 'lines',
                        zlevel: 2,
                        symbol: ['circle', 'arrow'], //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'线两端的标记类型
                        symbolSize: 8, //箭头大小
                        lineStyle: {
                            normal: {
                                color: '#22D7F0',
                                type: 'dashed',
                                width: 1,
                                opacity: 0.4,
                                curveness: 0.3
                            },
                        },
                        data: convertData(item[1])
                    },
                    {//路径
                        name: item[2],
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true, //是否显示特效
                            period: 8,  //特效动画的时间，单位为 s
                            symbol: 'pin', //特效图形的类型
                            constantSpeed: 100, //固定速度，大于0的值后会忽略 period 配置项
                            symbolSize: 5,
                            color: '#fff',
                            shadowBlur: 8
                        },
                        lineStyle: {
                            normal: {
                                width: 0,
                                curveness: 0.3
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: { //涟漪特效相关配置
                            period: '8', //动画的时间
                            scale: '15', //动画中波纹的最大缩放比例
                            brushType: 'stroke'
                        },
                        label: { //图形上的城市文本标签
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: '{b}',
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontFamily: 'arial',
                                    fontSize: 12,
                                }
                            }
                        },
                        symbolSize: 3,//点大小
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    var tmp = params.data.value[2]
                                    if (tmp < 25) {
                                        return 'aqua';
                                    } else if (tmp < 50) {
                                        return 'lime';
                                    } else if (tmp < 76) {
                                        return 'yellow';
                                    } else if (tmp < 95) {
                                        return 'orange'
                                    } else
                                        return '#ff3333';
                                        
                                }
                            }
                        },
                        data: item[1].map(function(dataItem) {
                            return {
                                name: dataItem[0].name,
                                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                            };
                        })
                    });
            });
            
            let option = {
                // backgroundColor: '#23243a',
                tooltip: {  //提示组件
                    trigger: 'item',
                },
                // dataRange: {
                //     x: 'left',
                //     y: 'bottom',
                //     splitList: [
                //         { start: 1500 },
                //         { start: 900, end: 1500 },
                //         { start: 310, end: 1000 },
                //         { start: 200, end: 300 },
                //         { start: 10, end: 200, label: '10 到 200（自定义label）' },
                //         { start: 5, end: 5, label: '5（自定义特殊颜色）', color: 'black' },
                //         { end: 10 }
                //     ],
                //     color: ['#E0022B', '#E09107', '#A3E00B']
                // },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: true
                        }
                    },
                    roam: true, //开启缩放或者平移
                    zoom: 1.2,  //缩放比例
                    itemStyle: {
                        normal: {
                            areaColor: '#314368',
                            borderColor: 'rgba(100,149,237,1)'
                        },
                        emphasis: {
                            areaColor: '#3C548D'
                        }
                    }
                },
                series: series
            };

            return option
        }
    }
}
</script>

<style>

</style>
