<template>
  <div class="baozun-title">
      <!-- <div class="title-con">
            <flexbox  class="h100p" gutter="0">
                <flexbox-item :span="1/4" class="h100p" >

                </flexbox-item>
                <flexbox-item :span="1/2" class="h100p relative">
                    <div class="h100p inline-father">
                        <div class="logo-sub fl">
                        </div>
                        <div class="title-sub fr">
                            {{title}}
                        </div>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1/4" class="h100p">
                
                </flexbox-item>
            </flexbox>
      </div> -->
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'

export default {
    components: {
        Flexbox,
        FlexboxItem,
    },
    data () {
        return {
            title: '物流数字化监控中心'
        }
    }
}
</script>

<style lang="less">
    .baozun-title {
        width: 100%;
        height: 8.1%;
        background-image: url('./../../assets/img/title_bg.png');
        background-repeat: no-repeat;  
        background-size: 100% 100%;
        overflow: hidden;
        .title-con {
            text-align: center;
            font-family: PingFangSC-Semibold;
            color: #CBD0D7;
            height:100%;
            .inline-father {
                width: 100%;
                    height: 55.4%;
                margin: 0 auto; /*水平居中*/
                position: absolute;
                top: 50%; /*偏移*/
                transform: translateY(-50%);
                .logo-sub{
                    width: 16%;
                    height: 100%;
                    background-image: url('./../../assets/img/baozun_logo.png');
                    background-repeat: no-repeat;  
                    background-size: 100% 100%;
                    margin-right: 0.8%;
                }
                .title-sub {
                    width: 80%;
                    height: 100%;
                    font-family: PingFangSC-Semibold;
                    color: #CBD0D7;
                    font-size: 40%;
                    line-height: 100%;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
