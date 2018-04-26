<template>
    <chart :options="polar">
    </chart>
</template>

<script>
export default {
    props: ['data'],
    computed: {
        polar() {
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                color: [ '#22D7F0', '#4D79DF'],
                axis: {
                    axisLine: {
                    },
                    axisTick: {

                    },
                    axisLabel: {
                        textStyle: {
                            color: '#92A2B1'
                        }
                    }
                },
                xAxis: [
                    {
                        splitLine: { show: false },//去除网格线
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [
                    {
                        splitLine: { show: false },//去除网格线
                        type: 'value',
                        name: '水量',
                        axisLabel: {
                            formatter: '{value} ml'
                        }
                    },
                    {
                        splitLine: { show: false },//去除网格线
                        type: 'value',
                        name: '温度',
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series: [
                    {
                        name: '蒸发量',
                        type: 'bar',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        barWidth : 20,
                        itemStyle: {
                            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                            emphasis: {
                                barBorderRadius: 30
                            },
                            normal: {
                                //柱形图圆角，初始化效果
                                barBorderRadius: [30, 30, 30, 30],
                            }
                        },
                    },
                    {
                        name: '平均温度',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }
                ]
            }
            return option
        }
    }
}
</script>

<style>

</style>
