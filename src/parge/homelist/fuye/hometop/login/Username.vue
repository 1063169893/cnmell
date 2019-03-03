<template>
    <div class="username-box">
        <div class="username-top">
            <div class="text-box">
                账  户
            </div>
            <div class="input-box">
                <input type="text" placeholder="手机号/用户名/邮箱" v-model="names">
            </div>
        </div>
        <div class="username-top">
            <div class="text-box">
               密  码
            </div>
            <div class="input-box">
                <input type='password' placeholder="请输入登录密码" v-model="passd">
            </div>
        </div>
        <div class="username-top">
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
            <div class="cahth-box">
                <div class="checkbox-box">
                    <input type="checkbox">
                    <span>七天自动登录</span>
                </div>
                <div class="passno">
                    <a href="">
                        忘记密码
                    </a>
                </div>
            </div>
            <div class="button" @click='login(names)'>
               登录
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'


export default {
     //获取cookie
     data(){
         return {
             'names':'',
             'passd':''
         }
     },
     methods:{
         get_cookie(Name) {
            var search = Name + "="//查询检索的值
            var returnvalue = "";//返回值
            if (document.cookie.length > 0) {
               let sd = document.cookie.indexOf(search);
                if (sd!= -1) {
                    sd += search.length;
                    end = document.cookie.indexOf(";", sd);
                    if (end == -1)
                   var end = document.cookie.length;
                    //unescape() 函数可对通过 escape() 编码的字符串进行解码。
                    returnvalue=unescape(document.cookie.substring(sd, end))
                }
            } 
            return returnvalue;
        },
        login(names){
          
            var pose=this.get_cookie(names)

            if(names == ''){
                Toast({
                    message: '用户民不能为空',
                    position: 'bottom',
                    duration: 2000
                }); 
            }else if(pose == ''){
                Toast({
                    message: '用户名不存在',
                    position: 'bottom',
                    duration: 2000
                }); 
            }else if(pose != this.passd){
               Toast({
                    message: '密码错误',
                    position: 'bottom',
                    duration: 2000
                }); 
            }else{
                 Toast({
                    message: '登录成功',
                    position: 'bottom',
                    duration: 2000
                });
                this.$router.push('/bodyhomebot/Homebody')
            }
        }
     }
}
</script>

<style lang="stylus" scoped>
@import '~styles/_border.styl'

.username-box
    margin-top .1rem
    .username-top
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
        box-sizing border-box
        .button
            width 100%
            height 100%
            background #E4E6E9
            border-radius .05rem
            text-align center
            line-height .4rem
            font-size .16rem
        .cahth-box
            height .3rem
            display flex
            line-height .3rem
            justify-content space-between
            width 100%
            margin .3rem 0
            font-size .13rem    
            padding 0 .2rem
            box-sizing border-box





</style>

