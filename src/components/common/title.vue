<template>
    <div class="common-title">
        <div class="common-title-con">
            <!-- <span class="iconfont left-icon " slot="icon" >{{'&#xe66d;'}}</span>
                <span class="title-con ">{{title}}</span> -->
            <div class="title-con">
                <span class="iconfont left-icon " slot="icon">{{'&#xe66d;'}}</span>{{title}}</div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="less">
.common-title {
    text-align: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    .common-title-con {
        width: 100%;
        height: 100%;
        font-family: 'MicrosoftYaHei-Bold';
        font-size: 24px;
        color: #E5EAED;
        .title-con{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        }
    }
    .iconfont {
        height: 100%;
        color: #22D7F0;
        margin-right: 0.5%;
    }
}


</style>
