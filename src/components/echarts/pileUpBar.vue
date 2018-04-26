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
            let yLeft = this.data.yLeft || [0]
            let yRight = this.data.yRight || [0]
            let xTop = this.data.xTop || [0]
            let xBottom = this.data.xBottom || [0]
            let option = {
                grid: { left: 150, right: 60 ,top: 10, bottom: 30},
                axis: {

                },
                yAxis: [
                    {
                        type: 'category',
                        data: yLeft,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#899ba9'
                            }
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
                    },
                    {
                        type: 'category',
                        data: yRight,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#899ba9'
                            }
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
                    },
                ],
                xAxis: {
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
                            color: '#92A2B1',
                            fontFamily: 'HelveticaNeue-CondensedBold',
                            shadowColor: '#fff',
                            shadowBlur: 10
                        },
                        // formatter: function(value, index) {
                        //     return value / 100000000 < 0 ? 0 : value / 100000000
                        // }
                    },
                },
                series: [{
                    type: 'bar',
                    zlevel: 1,
                    itemStyle: {
                        normal: { borderColor: '#000', color: '#000', barBorderRadius: [20, 20, 20, 20] }
                    },
                    barWidth: 10,
                    barGap: '-100%',
                    data: xBottom,
                    animation: false
                },
                {
                    type: 'bar',
                    zlevel: 2,
                    itemStyle: {
                        normal: {
                            color: function (params){
                                var colorList = [
                                    {
                                        start: '#0C8FAE',
                                        end: '#0C8FAE'
                                    },
                                    {
                                        start: '#22D7F0',
                                        end: '#22D7F0'
                                    },
                                    {
                                        start: '#22D7F0',
                                        end: '#22D7F0'
                                    },
                                    {
                                        start: '#22D7F0',
                                        end: '#22D7F0'
                                    },
                                    {
                                        start: '#306AEF',
                                        end: '#5ED8F8'
                                    },
                                    {
                                        start: '#306AEF',
                                        end: '#5ED8F8'
                                    },
                                    {
                                        start: '#306AEF',
                                        end: '#5ED8F8'
                                    },
                                ];
                                return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: colorList[params.dataIndex].start || '#0C8FAE'
                                    }, {
                                        offset: 1,
                                        color: colorList[params.dataIndex].end || '#0C8FAE'
                                    }])
                            },
                            
                            
                            // new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            //     offset: 0,
                            //     color: '#5ED8F8'
                            // }, {
                            //     offset: 1,
                            //     color: '#306AEF'
                            // }]), 
                            barBorderRadius: [20, 20, 20, 20]
                        }
                    },
                    barWidth: 10,
                    data: xTop
                }]
            }
            return option
        }
    }
}
</script>

<style>

</style>
