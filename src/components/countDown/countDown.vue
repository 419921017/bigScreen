<template>
    <div class="count-down">
        <div class="dataStatistics">
            <div class="digit_set" v-for="(item, i) in numberD" :class="{'active': typeof item != 'number'}">
                <div class="digit"v-if="typeof item == 'number'">
                    <div class="digit_top">
                        <span class="digit_wrap">{{item}}</span>
                    </div>
                    <div class="shadow_top"></div>
                    <div class="digit_bottom">
                        <span class="digit_wrap">{{item}}</span>
                    </div>
                    <div class="shadow_bottom"></div>
                   
                </div>
                <div v-else class="str_point"><span>{{item}}</span></div>

            </div>

        </div>
    </div>
</template>

<script>
// import 'src/units/jquery.fliptimer'

export default {
    props: ['number'],
    watch: {
        'number'(val) {

        }
    },
    data () {
        return {
            numberD: [1,2,',',3,4,5,',',6,7,8]
        }
    },
    mounted() {
    }
}
</script>

<style lang="less">
.count-down {
    width: 100%;
    height: 100%;
    /*翻页动画*/
    @-webkit-keyframes flipTop {
        0% {
            -webkit-transform: perspective(400px) rotateX(0deg);
        }

        100% {
            -webkit-transform: perspective(400px) rotateX(-90deg);
        }
    }

    @-webkit-keyframes flipBottom {
        0% {
            -webkit-transform: perspective(400px) rotateX(90deg);
        }

        100% {
            -webkit-transform: perspective(400px) rotateX(0deg);
        }
    }

    @-moz-keyframes flipTop {
        0% {
            -moz-transform: perspective(400px) rotateX(0deg);
        }

        100% {
            -moz-transform: perspective(400px) rotateX(-90deg);
        }
    }

    @-moz-keyframes flipBottom {
        0% {
            -moz-transform: perspective(400px) rotateX(90deg);
        }

        100% {
            -moz-transform: perspective(400px) rotateX(0deg);
        }
    }

    @-ms-keyframes flipTop {
        0% {
            -ms-transform: perspective(400px) rotateX(0deg);
        }

        100% {
            -ms-transform: perspective(400px) rotateX(-90deg);
        }
    }

    @-ms-keyframes flipBottom {
        0% {
            -ms-transform: perspective(400px) rotateX(90deg);
        }

        100% {
            -ms-transform: perspective(400px) rotateX(0deg);
        }
    }

    @-keyframes flipTop {
        0% {
            transform: perspective(400px) rotateX(0deg);
        }

        100% {
            transform: perspective(400px) rotateX(-90deg);
        }
    }

    @-keyframes flipBottom {
        0% {
            transform: perspective(400px) rotateX(90deg);
        }

        100% {
            transform: perspective(400px) rotateX(0deg);
        }
    }

   
    .dataStatistics {
        color: #22D7F0;
        font-family: "HelveticaNeue-CondensedBold", Helvetica, sans-serif;
        font-size: 200%;
        font-weight: bold;
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }
    @media screen and (min-width: 1300px ) and (max-width: 1400px ) {
        .dataStatistics {
            font-size: 145%;
        }
        .str_point {
            width: 100%;
            height: 100%;
            display: inline-block;
            font-family: MicrosoftYaHei-Bold;
            position: relative;
            span {
                position: absolute;
                bottom: 0;
                font-size: 60%;            
            }
        }
    }
    .dataStatistics .seperator {
        vertical-align: top;
        margin: 0 -20px;
        display: inline;
    }
    .dataStatistics .seconds,
    .dataStatistics .minutes,
    .dataStatistics .hours,
    .dataStatistics .days {
        height: 100%;
        display: inline;
    }
    .dataStatistics .digit_set {
        float: left;
        // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        width: 10%;
        margin-left: .6%;
        margin-right: .6%;
        height: 100%;
        display: inline-block;
        position: relative;
    }
    .dataStatistics .digit_set.active {
        width: 4%;
    }
    .str_point {
        width: 100%;
        height: 100%;
        display: inline-block;
        font-family: MicrosoftYaHei-Bold;
        position: relative;
        span {
            position: absolute;
            bottom: 0;
            font-size: 80%;            
        }
    }
    .dataStatistics .digit {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .dataStatistics .digit>div {
        position: absolute;
        left: 0;
        overflow: hidden;
        height: 50%;
        width: 100%;
        // padding: 0 15px;
    }

    .dataStatistics .digit>div.digit_top,
    .dataStatistics .digit>div.shadow_top {
        width: 100%;
        background-color: #000;
        border-bottom: 3px solid #1C242C;
        box-sizing: border-box;
        top: 0;
        z-index: 0;
        // border-radius: 10px 10px 0 0;
    }
    .dataStatistics .digit>div.digit_top .digit_wrap {
        margin-top: -40%;
        text-align: center;
    }
    
  
    @media screen and (min-height: 950px ) and ( max-height: 1080px) {
        .dataStatistics .digit>div.digit_top .digit_wrap {
            margin-top: -36%;
            text-align: center;
        } 
    }
    .dataStatistics .digit>div.digit_top:before,
    .dataStatistics .digit>div.shadow_top:before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .dataStatistics .digit>div.shadow_top {
        width: 100%;
        opacity: 0;
        -webkit-transition: opacity 0.3s ease-in;
    }
    .dataStatistics .digit>div.digit_bottom,
    .dataStatistics .digit>div.shadow_bottom {
        border-top: 3px solid #1C242C;
        background-color: #000;
        bottom: 0;
        width: 100%;
        z-index: 0;
        // border-radius: 0 0 10px 10px;
    }
    .dataStatistics .digit>div.digit_bottom .digit_wrap,
    .dataStatistics .digit>div.shadow_bottom .digit_wrap {
        width: 100%;
        display: block;
        margin-top: -110%;
        text-align: center;
    }
    .dataStatistics .digit>div.digit_bottom:before,
    .dataStatistics .digit>div.shadow_bottom:before {
        content: "";
        // border-radius: 0 0 10px 10px;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .digit_wrap {
        // line-height: 170px;
        display: block;
        overflow: hidden;
    }
    .dataStatistics .digit>div.shadow_bottom {
        opacity: 0;
        -webkit-transition: opacity 0.3s ease-in;
    }
    .dataStatistics .digit.previous .digit_top,
    .dataStatistics .digit.previous .shadow_top {
        opacity: 1;
        z-index: 2;
        -webkit-transform-origin: 50% 100%;
        -webkit-animation: flipTop 0.3s ease-in both;
        -moz-transform-origin: 50% 100%;
        -moz-animation: flipTop 0.3s ease-in both;
        -ms-transform-origin: 50% 100%;
        -ms-animation: flipTop 0.3s ease-in both;
        transform-origin: 50% 100%;
        animation: flipTop 0.3s ease-in both;
    }
    .dataStatistics .digit.previous .digit_bottom,
    .dataStatistics .digit.previous .shadow_bottom {
        z-index: 1;
        opacity: 1;
    }
    .dataStatistics .digit.active .digit_top {
        z-index: 1;
    }
    .dataStatistics .digit.active .digit_bottom {
        z-index: 2;
        -webkit-transform-origin: 50% 0%;
        -webkit-animation: flipBottom 0.3s 0.3s ease-out both;
        -moz-transform-origin: 50% 0%;
        -moz-animation: flipBottom 0.3s 0.3s ease-out both;
        -ms-transform-origin: 50% 0%;
        -ms-animation: flipBottom 0.3s 0.3s ease-out both;
        transform-origin: 50% 0%;
        animation: flipBottom 0.3s 0.3s ease-out both;
    }
}
</style>
