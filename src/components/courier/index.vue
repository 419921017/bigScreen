<template>
    <div class="courier-content">
        <div class="courier-content-left">
            <div v-for="(item, i) in leftTitle" class="courier-content-left-item">
                <div class="courier-content-left-item-label">{{item.label}}</div>
            </div>
        </div>
        <div class="courier-content-right">
            <table-Swiper></table-Swiper>
        </div>
    </div>
</template>

<script>
import tableSwiper from 'src/components/common/swiper'

export default {
    components: {
        tableSwiper
    },
    data () {
        return {
            leftTitle: [
                {
                    label: '仓库',
                    value: ''
                },
                {
                    label: 'SF',
                    value: ''
                },
                {
                    label: 'STO',
                    value: ''
                },
                {
                    label: 'EMS',
                    value: ''
                },
                {
                    label: 'YTO',
                    value: ''
                },
                {
                    label: 'YAMATO',
                    value: ''
                },
            ]
        }
    }
}
</script>

<style lang="less">
.courier-content {
    width: 100%;
    height: 100%;
    .courier-content-left {
        height: 100%;
        width: 15%;
        float: left;
        .courier-content-left-item {
            height: 16.66666666666666%;
            width: 100%;
            font-size: 30%;
            text-align: right;
            color: #fff;
        font-weight: bold;
            position: relative;
            .courier-content-left-item-label {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%) ;
            }
        }
    }
    .courier-content-right {
        height: 100%;
        width: 85%;
        float: left;
    }
}
</style>


