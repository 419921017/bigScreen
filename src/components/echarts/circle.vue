<template>
    <chart :options="polar" class="w100p h100p" style="width: 100%;height: 100%;">
    </chart>
</template>

<script>
import echarts from 'echarts'
export default {
    props: {
        data: {
            type: Object,
            default() {
                return {
                    label: '',
                    value: ''
                }
            }
        }
    },
    computed: {
        polar() {
            let targetName = this.data.label
            let targetValue = this.data.value
            let formarrtArr = ['{a|'+ targetValue +'%}', '{b|'+ targetName +'}']
            let option = {
                "tooltip": {
                    "trigger": 'item',
                    "formatter": "{a} : ({d}%)"
                },
                "grid": {
                    x: 10,
                    y:10,
                    x1: 10,
                    y1: 10
                },
                "series": [{
                    "name": "CPU分配率 内圈",
                    "center": [
                        "50%",
                        "50%"
                    ],
                    "radius": [
                        "64%",
                        "65%"
                    ],
                    "clockWise": false,
                    "hoverAnimation": false,
                    "type": "pie",
                    "data": [ {
                        "name": " ",
                        "value": 100 - targetValue,
                        "itemStyle": {
                            "normal": {
                                "label": {
                                    "show": false
                                },
                                "labelLine": {
                                    "show": false
                                },
                                "color": 'rgba(0,0,0,0)',
                                // "borderColor": 'rgba(0,0,0,0)',
                                "borderColor": '#263E57',
                                "borderWidth": 9
                            },
                            // "emphasis": {
                            //     "color": 'rgba(0,0,0,0)',
                            //     // "borderColor": 'rgba(0,0,0,0)',
                            //     "borderColor": '#263E57',
                            //     "borderWidth": 12
                            // }
                        }
                    },{
                        "value": targetValue,
                        "name": "",
                        "label": {
                            "normal": {
                                "show": true,
                                "formatter": formarrtArr.join('\n'),
                                // function(params){
                                //     console.log('params', params)
                                //     // return '<span style="color: #fff;">' + params.value + '</span>' + '%' + '\n' + targetName
                                //     return `{}`
                                   
                                // },
                                "rich": {
                                    a: {
                                        color: '#fff',
                                        fontSize: 24,
                                        fontWeight: 'bold'
                                    },
                                    b: {
                                        color: '#22D7F0',
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }
                                },
                                "textStyle": {
                                    "fontSize": 20,
                                    "fontWeight": "bold"
                                },
                                "position": "center"
                            }
                        },
                        "labelLine": {
                            "show": false
                        },
                        "itemStyle": {
                            "normal": {
                                "color": "#5886f0",
                                "borderRadius": [20,20,20,20],
                                "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#5DD8F9'
                                },
                                 {
                                    offset: 1,
                                    color: '#316FEF'
                                },
                                // {
                                //     offset: 1,
                                //     color: '#5DD8F9'
                                // }
                                ]),
                                "borderWidth": 9
                            },
                            "emphasis": {
                                "color": "#5886f0",
                                "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#5DD8F9'
                                }, {
                                    offset: 1,
                                    color: '#316FEF'
                                }]),
                                "borderWidth": 12
                            }
                        },
                    }]
                }, {
                    "name": "CPU分配率 外圈",
                    "center": [
                        "50%",
                        "50%"
                    ],
                    "radius": [
                        "79%",
                        "80%"
                    ],
                    "clockWise": false,
                    "hoverAnimation": false,
                    "type": "pie",
                    "data": [{
                        "value": targetValue,
                        "name": "",
                        "label": {
                            "normal": {
                                "show": false,
                                "formatter": '{d} %',
                                "textStyle": {
                                    "fontSize": 28,
                                    "fontWeight": "bold"
                                },
                                "position": "center"
                            }
                        },
                        "labelLine": {
                            "show": false
                        },
                        "itemStyle": {
                            "normal": {
                                "color": "#5886f0",
                                // "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                //     offset: 0,
                                //     color: '#00a2ff'
                                // }, {
                                //     offset: 1,
                                //     color: '#70ffac'
                                // }]),
                                "borderColor": '#263E57',
                                "borderWidth": 2
                            },
                            "emphasis": {
                                "color": "#5886f0",
                                "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#85b6b2'
                                }, {
                                    offset: 1,
                                    color: '#6d4f8d'
                                }]),
                                "borderColor": '#263E57',
                                "borderWidth": 2
                            }
                        },
                    }, 
                    // {
                    //     "name": " ",
                    //     "value": 16,
                    //     "itemStyle": {
                    //         "normal": {
                    //             "label": {
                    //                 "show": false
                    //             },
                    //             "labelLine": {
                    //                 "show": false
                    //             },
                    //             "color": 'rgba(0,0,0,0)',
                    //             "borderColor": 'rgba(0,0,0,0)',
                    //             "borderWidth": 0
                    //         },
                    //         "emphasis": {
                    //             "color": 'rgba(0,0,0,0)',
                    //             "borderColor": 'rgba(0,0,0,0)',
                    //             "borderWidth": 0
                    //         }
                    //     }
                    // }
                    ]
                }]
            }
            return option
        }
    }
}
</script>

<style>

</style>
