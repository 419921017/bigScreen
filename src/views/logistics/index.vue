<template>
    <div class="logistics">
        <flexbox gutter="0">
            <flexbox-item :span="318/1000" class="fix-item-con h100p" >
                <div class="logistics-left">
                    <div class="h8p"></div>
                    <div class="top">
                        <div class="under-title">
                            <common-Title :title="logisiticsData.storeNow.title"></common-Title>
                        </div>
                        <div class="echarts-con">
                            <pile-Up-Bar :data="logisiticsData.storeNow.data"></pile-Up-Bar>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="under-title">
                            <common-Title :title="logisiticsData.top.title"></common-Title>
                        </div>
                        <div class="echarts-con">
                            <pile-Up-Bar-Top :data="logisiticsData.top.data"></pile-Up-Bar-Top>
                        </div>
                    </div>
                </div>
            </flexbox-item>
            <flexbox-item :span="364/1000" class="fix-item-con">
                <div class="logistics-center">
                    <baozun-Title></baozun-Title>
                    <div class="under-title">
                        <common-Title :title="logisiticsData.platform.title"></common-Title>
                    </div>
                    <div class="filp-con">
                        <flip-Number></flip-Number>
                    </div>
                    <div class="wms-con">
                        <!-- <common-Title :title="'待定'"></common-Title> -->
                        <div class="wms-con-left">
                            <small-Count :data="logisiticsData.wms"></small-Count>
                        </div>
                        <div class="wms-con-right">
                            <small-Count :data="logisiticsData.delivery"></small-Count>
                        </div>
                    </div>
                    <div class="map-con">
                        <!-- <common-Title :title="'地图'"></common-Title> -->
                        <china-Map :data="logisiticsData.chinaMap.data"></china-Map>
                    </div>
                </div>
                <div>
                </div>
            </flexbox-item>
            <flexbox-item :span="318/1000" class="fix-item-con">
                <div class="logistics-right">
                    <div class="h8p"></div>
                    <div class="logistics-right-top">
                        <div class="under-title">
                            <common-Title :title="logisiticsData.storeNow.title"></common-Title>
                        </div>
                        <div class="echarts-con">
                            <twoLine></twoLine>
                        </div>
                    </div>
                    <div class="logistics-right-middle">
                        <div class="under-title">
                            <common-Title :title="logisiticsData.express.title"></common-Title>
                        </div>
                        <div class="echarts-con">
                            <div class="circle-con" v-for="(item, i) in logisiticsData.express.data">
                                <circle-chart :data="item"></circle-chart>
                            </div>
                        </div>
                    </div>
                    <div class="logistics-right-bottom">
                        <div class="under-title">
                            <common-Title :title="logisiticsData.courier.title"></common-Title>
                        </div>
                        <div class="echarts-con">
                            <courier-Content></courier-Content>
                        </div>
                    </div>
                </div>
            </flexbox-item>
        </flexbox>
    </chart>
    </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
import { Flexbox, FlexboxItem } from 'vux'
import baozunTitle from 'src/components/logistics/title'
import lineBar from 'src/components/echarts/lineBar'
import pileUpBar from 'src/components/echarts/pileUpBar'
import pileUpBarTop from 'src/components/echarts/pileUpBarTop'
import commonTitle from 'src/components/common/title'
import twoLine from 'src/components/echarts/twoLine'
import flipNumber from 'src/components/countDown/countDown'
import chinaMap from 'src/components/echarts/chinaMap'
import smallCount from 'src/components/common/smallCount'
import circleChart from 'src/components/echarts/circle'
import courierContent from 'src/components/courier/index'
export default {
    components: {
        Flexbox,
        FlexboxItem,
        baozunTitle,
        lineBar,
        pileUpBar,
        pileUpBarTop,
        commonTitle,
        twoLine,
        flipNumber,
        chinaMap,
        smallCount,
        circleChart,
        courierContent
    },
    data: function() {
        return {
            logisiticsData: {
                storeNow: {
                    title: '仓库实时出库订单量',
                    data: {
                        yLeft: ["吴江南", "外包仓", "永鼎8号库", "欧圣3&4号库", "新地3号库", "永鼎5号库", "新地1号库"],
                        yRight: ["25%", "13%", "28%", "40%", "33%", "41%", "42%"],
                        xTop: [302, 309, 320, 334, 630, 690, 720],
                        xBottom: [820, 832, 901, 934, 1290, 1330, 1320]
                    }
                },
                top: {
                    title: 'TOP10店铺过仓量/出库订单占比',
                    data: {
                        yLeft: ['松下电器旗舰店','esprit官方旗舰店','cachecache旗舰店','converse官方旗舰店','it官方旗舰店','levis官方旗舰店','PUMA官方店','飞利浦官方旗舰店','adidas官方旗舰店','Nike官方旗舰店'],
                        yRight: ["4%", "8%", "13%", "20%", "25%", "29%", "33%","35%", "39%", "41%"],
                        xTop: [5820, 6832, 7901, 8934, 11290, 21330, 21320, 66820, 77832, 79012],
                        xBottom: [6201, 7232, 8031, 9324, 12920, 22130, 33220,82303, 83322, 90121 ]
                    }
                },
                order: {
                    title: '订单出库趋势图'
                },
                express: {
                    title: '快递包裹签收率',
                    data: [
                        {
                            label: 'SF',
                            value: 88
                        },
                        {
                            label: 'STO',
                            value: 8
                        },
                        {
                            label: 'EMS',
                            value: 5
                        },
                        {
                            label: 'YTO',
                            value: 7
                        },
                    ]
                },
                chinaMap: {
                    data: {
                        yLeft: ['松下电器旗舰店','esprit官方旗舰店','cachecache旗舰店','converse官方旗舰店','it官方旗舰店','levis官方旗舰店','PUMA官方店','飞利浦官方旗舰店','adidas官方旗舰店','Nike官方旗舰店'],
                        yRight: ["4%", "8%", "13%", "20%", "25%", "29%", "33%","35%", "39%", "41%"],
                        xTop: [5820, 6832, 7901, 8934, 11290, 21330, 21320, 66820, 77832, 79012],
                        xBottom: [6201, 7232, 8031, 9324, 12920, 22130, 33220,82303, 83322, 90121 ]
                    }
                },
                courier: {
                    title: '快递包裹揽件率'
                },
                platform: {
                    title: '平台订单量'
                },
                wms: {
                    title: 'WMS作业量',
                    con: 3994034
                },
                delivery: {
                    title: '出库单量',
                    con: 1050309
                }
            }
        }
    }
}
</script>

<style lang="less">
.logistics {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url('./../../assets/img/big_screen_bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .vux-flexbox {
        width: 100%;
        height: 100%;
        .fix-item-con {
            width: 100%;
            height: 100%;

        }
    }
    .logistics-left {
        height: 100%;
        .top, .bottom {
            height: 38%;
            .under-title {
                height: 20%;
            }
            .echarts-con {
                height: 80%;
            }
        }
        .top {
            margin-bottom: 10%;
        }
    }
    .logistics-center {
        height: 100%;
        width: 100%;
        .under-title {
            height: 6.8%;
            .title-con {
                padding-top: 1.1%;
            }
        }
        .filp-con {
            height: 10%;
        }
        .wms-con {
            height: 12%;
            padding-top: 1%;
            padding-bottom: 1%;
            // background-color: yellowgreen;
            .wms-con-left, .wms-con-right {
                width: 49%;
                height: 100%;
                float: left;
                margin: 0 0.5%;
            }
        }
        .map-con {
            height: 50.8%;
        }
    }
    .logistics-right {
        height: 100%;
        width: 100%;
        .logistics-right-top {
            height: 25%;
            .under-title {
                height: 20%;
            }
            .echarts-con {
                height: 80%;
            }
        }
        .logistics-right-middle {
            height: 25%;
            overflow: hidden;
            .under-title {
                height: 30%;
            }
            .echarts-con {
                height: 70%;
                .circle-con {
                    height: 100%;
                    width: 25%;
                    float: left;
                }
            }
            // background-color: orange;
        }
        .logistics-right-bottom {
            height: 40%;
            // background-color: skyblue;
            .under-title {
                height: 20%;
            }
            .echarts-con {
                height: 80%;
                .circle-con {
                    height: 100%;
                    width: 25%;
                    float: left;
                }
            }

        }
    }
}
.flex-demo {
  text-align: center;
  color: #fff;
//   background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}

</style>
