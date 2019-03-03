<template>
    <div class="class-boxtow">
        <div class="herder-box">
            <div class="heide-rout">
                <router-link tag="div" to="/bodyhomebot/Homebody" keep-alive class="icon-classification">
                    <i class="classification"></i>
                </router-link>
                <router-link tag="div" to="/seek" keep-alive class="input-box">
                    <span class="wds">店铺</span>
                    <input class="input-style" placeholder="请输入搜索关键词">
                </router-link>
                <div class="btn-group">
                    <router-link tag="div" to="#" keep-alive  class="icon-message">
                        搜索
                    </router-link>
                </div>
            </div>
        </div>
        <div class="hotseek-box">
            <div class="hot-text">
                热搜
            </div>
            <div class="hottext">
                <ul class="li-box">
                    <li v-for="(hot,index) in seeldae" :key="index">
                        {{hot}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="lisetelu-box">
            <div class="test0bos">
                历史搜索
            </div>
            <div class="nertext-box">
                搜索的内容记录
            </div>
            <div class="buttom-box">
                <span class="botton">清空历史记录</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import BScroll from 'better-scroll'


export default {
    
    computed:{
         ...mapGetters(['seektext'])
    },
    methods:{
        ...mapActions(['getSeek']),
        
    },
    created(){
        this.getSeek()
    },
    data(){
        return {
            seeldae:null,
           
        }
    },
    watch:{
        seektext(){
            this.seeldae=this.seektext.datas.keywordList
            new BScroll('.hottext',{
                scrollX:true,
                startY:false,
                click:true,
                pullUpLoad: {
                threshold: 80
                },
                mouseWheel:true
            })
        }
    }
}
</script>



<style lang="stylus" scoped>
@import '~styles/_border.styl'
.class-boxtow
    width 100%
    height 100%
    display flex
    flex-direction column
    overflow hidden
    .herder-box
        width 100%
        margin: 0 auto
        height: .44rem
        top 0
        border 0 0 1px 0,#F0F2F5
        background #fff
        .heide-rout
            display flex
            text-align center
            color #ffffff
            width 100%
            background #ffffff
            
            i 
                display inline-block
                width .15rem
                height .15rem
                margin-top .14rem
            .icon-classification
                width .44rem
                height .44rem
                .classification
                    background url(https://m1.cnrmall.com/images/arrow_left_b.png)
                    background-size 100%
            .input-box
                flex 1
                background-color #F0F2F5
                height .288rem
                margin-top .075rem
                border-radius .16rem
                text-align left 
                overflow hidden
                .icon
                    background url(https://m1.cnrmall.com/images/search_g.png)
                    background-size 100%
                    margin 0
                    margin-bottom .06rem
                    margin-left .08rem
                .input-style
                    width 2.2rem
                    height 100%
                    display inline-block
                    border 0
                    outline none 
                    border-width 0
                    background-color  transparent
                    font-size .13rem
                .wds
                    color #000
                    display inline-block
                    margin 0 .2rem 0 .1rem
                    font-size .13rem
                    
            .icon-message
                width .44rem
                height .44rem
                color #000
                line-height .4rem
                font-size .13rem
    .hotseek-box
        width 100%
        height .75rem
        overflow hidden
        border 0 0 1px 0,#F0F2F5
        background #fff
        margin-bottom .1rem
        .hot-text
            width 100%
            padding: 0.06rem 0.13rem
            font-size 0.134rem
            font-weight 600
            line-height 0.2rem
            color #232326
        .hottext
            width 100%
            overflow hidden
            margin-top .08rem
            .li-box
                width max-content
                padding: 0 0.13rem
                display flex
                li
                    height .21rem
                    background #F0F2F5
                    text-align center
                    line-height .21rem
                    margin-right .12rem
                    padding 0 .09rem
                    border-radius .05rem
                    font-size .1rem
    .lisetelu-box
        width 100%
        height max-content
        background #fff
        height 80%
        .test0bos
            width 100%
            padding: 0.06rem 0.13rem
            font-size 0.134rem
            font-weight 600
            line-height 0.2rem
            color #232326
            border 0 0 1px 0,#F0F2F5
        .nertext-box
            padding .5rem .13rem
        .buttom-box
            text-align center
            .botton
                width 60%
                height .37rem
                background #ffffff
                border 0.01rem solid #F0F2F5
                border-radius .2rem
                display inline-block
                text-align center
                line-height .37rem
                font-size .16rem


</style>
