<template>
    <div class="phone-box">
        <div class="phone-top">
            <div class="text-box">
                手 机 号
            </div>
            <div class="input-box">
                <input type="text" placeholder="请输入手机号">
            </div>
        </div>
        <div class="phone-top">
            <div class="text-box">
                验 证 码
            </div>
            <div class="input-box">
                <input type="text" placeholder="请输入4位验证码">
            </div>
            <div class="code-box">
                <span>
                    <img src="https://api1.cnrmall.com/captcha/makecaptcha?captchaKey=c3b0b31c5c6327d257ce81f170d30543&clientType=wap&t=0.06921884004024625" alt="">
                </span>
            </div>
        </div>
        <div class="button-box">
            <div class="button">
                获取动态码
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
@import '~styles/_border.styl'

.phone-box
    margin-top .1rem
    .phone-top
        width 100%
        height 0.44rem
        border 0 0 1px 0,#f0f2f5
        display flex 
        background #fff
        .text-box
            width 23%
            text-align right 
            height 100%
            line-height .44rem
            font-size .14rem
            margin-right .1rem
        .input-box
            width 40%
            overflow hidden
            height 100%
            input 
                width 100%
                height 100%
                display block
                font-size .14rem
                outline none 
                border-width 0
                background-color  transparent
        .code-box
            span
                width .8rem
                height 0.3rem
                display inline-block
                margin-top .06rem
                img 
                    width 100%
    .button-box
        width 100%
        height 0.4rem
        padding 0 .2rem
        margin-top .2rem
        .button
            width 100%
            height 100%
            background #E4E6E9
            border-radius .05rem
            text-align center
            line-height .4rem
            font-size .16rem






</style>

