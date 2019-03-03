<template>
    <div class="register">
        <div class="herder-box">
            <div class="heide-rout">
                <router-link tag="div" to="/bodyhomebot/Homebody" keep-alive class="icon-classification">
                    <i class="classification"></i>
                </router-link>
                <div class="input-box">
                   会员注册
                </div>
                <router-link tag="div" to="/login/phone" keep-alive data-toggle="dropdown" class="icon-message">
                    登录
                </router-link>
            </div>
        </div>
        <div class="phone-box">
            <div class="phone-top">
                <div class="text-box">
                    手 机 号
                </div>
                <div class="input-box">
                    <input type="text" placeholder="请输入手机号" v-model="name">
                </div>
            </div>
            <div class="phone-top">
                <div class="text-box">
                   密  码
                </div>
                <div class="input-box">
                    <input type="password" placeholder="请输入6~16位密码" v-model="pssw">
                </div>
                <!-- <div class="code-box">
                    <span>
                        <img src="https://api1.cnrmall.com/captcha/makecaptcha?captchaKey=c3b0b31c5c6327d257ce81f170d30543&clientType=wap&t=0.06921884004024625" alt="">
                    </span>
                </div> -->
            </div>
             <div class="phone-top">
                <div class="text-box">
                   确认密码
                </div>
                <div class="input-box">
                    <input type="password" placeholder="确认密码" v-model="queren">
                </div>
                <!-- <div class="code-box">
                    <span>
                        <img src="https://api1.cnrmall.com/captcha/makecaptcha?captchaKey=c3b0b31c5c6327d257ce81f170d30543&clientType=wap&t=0.06921884004024625" alt="">
                    </span>
                </div> -->
            </div>
            <div class="button-box">
                <div class="button" @click="setCookie(name,pssw,1)" :class="queren && pssw && name?'back':''">
                    注  册
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return{
             'name':'',
             'pssw':'',
             'queren':'',
             'from':null

        }
    },
    methods: {
        setCookie(cname, cvalue, exdays) {
            if(!this.name){
                Toast({
                    message: '用户名为空',
                    position: 'bottom',
                    duration: 2000
                }); 
            }else if(!this.pssw){
                Toast({
                    message: '密码为空',
                    position: 'bottom',
                    duration: 2000
                }); 
            }else if(this.pssw!=this.queren){
                Toast({
                    message: '两次密码不一致',
                    position: 'bottom',
                    duration: 2000
                }); 
            }else{
                let d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; " + expires;
                this.$router.go(-1)
            }
        }
    }
}
</script>




<style lang="stylus" scoped>
@import '~styles/_border.styl'
.register
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
            &.back
                background #f23030
                color #fff

</style>
