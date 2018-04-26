<template>
    <div class="small-count">
        <div class="small-count-title">
            <div class="small-count-title-con">{{data.title}}</div>
        </div>
        <div class="small-count-con">
            <div class="small-count-con-con">
                {{comma}}
            </div>
        </div>
    </div>
</template>

<script>
import { numberComma } from 'vux'
export default {
    data () {
        return {

        }
    },
    computed: {
        comma () {
            console.log('this.data.con', this.data.con)
            return numberComma(this.data.con)
        }
    },
    props: {
        data: {
            type: Object,
            default () {
                return {
                    title: '',
                    con: 'N/A'
                }
            }
        }
    }
}
</script>

<style lang="less">
    .small-count {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #000;
        color: #22D7F0;
        text-align: center;
        font-family: "HelveticaNeue-CondensedBold", Helvetica, sans-serif;
        
        .small-count-title {
            color: #fff;
            font-size: 50%;
            height: 40%;
            position: relative;
            .small-count-title-con {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }
        @media screen and (min-width: 1300px ) and (max-width: 1400px ) {
            .small-count-title {
                font-size: 30%;
                
            }
        }

        .small-count-con {
            font-size: 110%;
            height: 60%;
            vertical-align: center;
            position: relative;
            .small-count-con-con {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }
    }
</style>

