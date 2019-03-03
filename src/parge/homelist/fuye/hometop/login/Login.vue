<template>
    <div class="class-boxtow">
        <div class="herder-box">
            <div class="heide-rout">
                <router-link tag="div" to="/bodyhomebot/Homebody" keep-alive class="icon-classification">
                    <i class="classification"></i>
                </router-link>
                <div class="input-box">
                    登录
                </div>
                <router-link tag="div" to="/register" keep-alive data-toggle="dropdown" class="icon-message">
                    注册
                </router-link>
            </div>
        </div>
        <div class="neiter">
            <router-link tag="div" to="/login/phone"  keep-alive active-class ="box">
                <i></i>
                手机动态码登录
            </router-link>
            <router-link tag="div" to="/login/username"  keep-alive active-class ="box">
                <i></i>
                用户登录
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="stylus" scoped>
@import '~styles/_border.styl'
.class-boxtow
    width 100%
    height 100%
    display flex
    flex-direction column
    .herder-box
        width 100%
        margin: 0 auto
        height: .44rem
        background #fff
        top 0
        border 0 0 1px 0,#F0F2F5
        .heide-rout
            display flex
            text-align center
            color #ffffff
            width 100%
            background #ffffff
            i 
                display inline-block
                width .17rem
                height .17rem
                margin-top .14rem
            .icon-classification
                width .44rem
                height .44rem
                .classification
                    background url(https://m1.cnrmall.com/images/bar_01.png)
                    background-size 100%
            .input-box
                flex 1
                height .288rem
                margin-top .075rem
                text-align center
                color #000000
                line-height .288rem
                font-size .14rem
            .icon-message
                width .44rem
                height .44rem
                color #000
                text-align center
                line-height .44rem
                font-size .14rem
                color #F23030
    .neiter
        width 100%
        margin: 0 auto
        height: .44rem
        background #fff
        top 0
        border 0 0 1px 0,#F0F2F5
        display flex
        justify-content space-around
        div
            text-align center
            line-height .44rem
            padding 0 .05rem
            font-size .14rem
            &.box
                color #F23030
                border-bottom solid .02rem #F23030
                box-sizing border-box

</style>
