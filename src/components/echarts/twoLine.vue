<template>
    <chart :options="polar" class="w100p h100p" style="width: 100%;height: 100%;">
    </chart>
</template>

<script>
import echarts from 'echarts'
export default {
    props: ['data'],

    computed: {
        polar() {
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: { top: 10, },
                color: ['#5AD0EF', '#584098'],
                calculable: true,
                legend: {
                    data: [
                        {
                            name: '实际出库订单量',
                            icon: 'line',
                        }, {
                            name: '计划出库量',
                            icon: 'line'
                        }],
                    x: 'center', // 'center' | 'left' | {number},
                    y: 'bottom', // 'center' | 'bottom' | {number}
                    itemHeight: 30,
                    itemWidth: 30,
                    textStyle: {
                        color: '#92A2B1',
                        fontFamily: 'MicrosoftYaHei-Bold'
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#899ba9'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#D8D8D8',
                                fontFamily: 'MicrosoftYaHei-Bold',
                                shadowColor: '#fff',
                                shadowBlur: 10
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#899ba9'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#D8D8D8',
                                fontFamily: 'MicrosoftYaHei-Bold',
                                shadowColor: '#fff',
                                shadowBlur: 10
                            }
                        }

                    }
                ],
                series: [
                    {
                        name: '实际出库订单量',
                        type: 'line',
                        data: [11211, 11232, 1553, 13312, 12422, 12343, 1320, 5342, 2341, 5325, 1241, 4234, 1431, 52352, 3521, 5432, 5244, 36452, 3136, 2212, 52321, 53212, 63277, 21112],
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,
                                    
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#2F69ED'
                                    },{
                                        offset: 1,
                                        color: '#5AD0EF'
                                    }]),
                                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    //     offset: 0,
                                    //     color: '#2F69ED'
                                    // },{
                                    //     offset: 1,
                                    //     color: '#5AD0EF'
                                    // }]
                                }
                            }
                        }
                    },
                    {
                        name: '计划出库量',
                        type: 'line',
                        symbol: 'none',
                        data: [14312, 12223, 21212, 55326, 3546, 27243, 2350, 6436, 453, 547, 8685, 67, 65, 8565, 5464, 7845, 8474, 7456, 1337, 5423, 52225, 34152, 43325, 34135],
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,
                                    type: 'dotted',
                                }
                            }
                        }
                    }
                ]
            };

            // let option = {
            //     grid: { left: 150, right: 60 },
            //     axis: {

            //     },
            //     yAxis: [
            //         {
            //             type: 'category',
            //             data: ["吴江南", "外包仓", "永鼎8号库", "欧圣3&4号库", "新地3号库", "永鼎5号库", "新地1号库"],
            //             axisLine: {
            //                 show: false,
            //                 lineStyle: {
            //                     color: '#899ba9'
            //                 }
            //             },
            //             axisTick: {
            //                 show: false
            //             },
            //             axisLabel: {
            //                 textStyle: {
            //                     color: '#D8D8D8',
            //                     fontFamily: 'MicrosoftYaHei-Bold',
            //                     shadowColor: '#fff',
            //                     shadowBlur: 10
            //                 }
            //             }
            //         },
            //         {
            //             type: 'category',
            //             data: ["25%", "13%", "28%", "40%", "33%", "41%", "42%"],
            //             axisLine: {
            //                 show: false,
            //                 lineStyle: {
            //                     color: '#899ba9'
            //                 }
            //             },
            //             axisTick: {
            //                 show: false
            //             },
            //             axisLabel: {
            //                 textStyle: {
            //                     color: '#D8D8D8',
            //                     fontFamily: 'MicrosoftYaHei-Bold',
            //                     shadowColor: '#fff',
            //                     shadowBlur: 10
            //                 }
            //             }
            //         },
            //     ],
            //     xAxis: {
            //         axisLine: {
            //             show: false,
            //             lineStyle: {
            //                 color: '#899ba9'
            //             }
            //         },
            //         splitLine: {
            //             show: false
            //         },
            //         axisTick: {
            //             show: false
            //         },
            //         axisLabel: {
            //             textStyle: {
            //                 color: '#92A2B1',
            //                 fontFamily: 'HelveticaNeue-CondensedBold',
            //                 shadowColor: '#fff',
            //                 shadowBlur: 10
            //             },
            //             // formatter: function(value, index) {
            //             //     return value / 100000000 < 0 ? 0 : value / 100000000
            //             // }
            //         },
            //     },
            //     series: [{
            //         type: 'bar',
            //         zlevel: 1,
            //         itemStyle: {
            //             normal: { borderColor: '#000', color: '#000', barBorderRadius: [20, 20, 20, 20] }
            //         },
            //         barWidth: 10,
            //         barGap: '-100%',
            //         data: [820, 832, 901, 934, 1290, 1330, 1320],
            //         animation: false
            //     },
            //     {
            //         type: 'bar',
            //         zlevel: 2,
            //         itemStyle: {
            //             normal: {
            //                 color: function(params) {
            //                     var colorList = [
            //                         {
            //                             start: '#0C8FAE',
            //                             end: '#0C8FAE'
            //                         },
            //                         {
            //                             start: '#22D7F0',
            //                             end: '#22D7F0'
            //                         },
            //                         {
            //                             start: '#22D7F0',
            //                             end: '#22D7F0'
            //                         },
            //                         {
            //                             start: '#22D7F0',
            //                             end: '#22D7F0'
            //                         },
            //                         {
            //                             start: '#306AEF',
            //                             end: '#5ED8F8'
            //                         },
            //                         {
            //                             start: '#306AEF',
            //                             end: '#5ED8F8'
            //                         },
            //                         {
            //                             start: '#306AEF',
            //                             end: '#5ED8F8'
            //                         },
            //                     ];
            //                     return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                         offset: 0,
            //                         color: colorList[params.dataIndex].start
            //                     }, {
            //                         offset: 1,
            //                         color: colorList[params.dataIndex].end
            //                     }])
            //                 },


            //                 // new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 //     offset: 0,
            //                 //     color: '#5ED8F8'
            //                 // }, {
            //                 //     offset: 1,
            //                 //     color: '#306AEF'
            //                 // }]), 
            //                 barBorderRadius: [20, 20, 20, 20]
            //             }
            //         },
            //         barWidth: 10,
            //         data: [302, 309, 320, 334, 630, 690, 720]
            //     }]
            // }
            return option
        }
    }
}
</script>

<style>

</style>
