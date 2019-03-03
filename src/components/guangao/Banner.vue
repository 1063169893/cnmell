<template>
     <div class="commodity-ids">
        <div class="commodity-img">
            <img :src="goodesimg.specImageName || goodesimg.specGoodsImage" alt="">
        </div>
        <div class="describe">
            <p class="text-name">{{goodesimg.goodsName}}</p>
            <p class="class-list">{{goodesimg.jingle}}</p>
            <div class="zc-describe">
                <div class="zc-describe-left">
                    <span class="num-mouny">￥<span>{{goodesimg.seckillGoodsPrice ||goodesimg.wechatPriceMin}}</span></span>
                    <span class="shouto-text">{{goodesimg.discountTitleList[0]}}</span>
                </div>
                <div class="zc-describe-right">
                    <span class="bk-red">立即抢购</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        'goodesimg':Object
    },
    data(){
        return {
            goodesdatas:null
        }
    },
    watch:{
        goodesimg(){
            console.log('bannersdasdsafsd',this.goodesimg)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/_ellipsis.styl'

.commodity-ids
    border-radius 0.08rem
    height 2.4rem
    overflow hidden
    box-shadow 0px 2px 5px #bbbbbb
    margin .2rem 0
    padding-bottom .13rem
    background #fff
    .commodity-img
        height 1.53rem
        width 100%
        overflow hidden
        img 
            width 100%
    .describe
        padding .1rem .1rem 0 .1rem
        .text-name
            font-size 0.15rem
            color #232326
            font-weight 500
            ellipsis()
        .class-list
            color #888888
            font-size .12rem
            margin .05rem 0
            ellipsis()
        .zc-describe
            display flex
            justify-content space-between
            margin-top .13rem
            .zc-describe-left
                color rgba(243,75,72,1)
                .shouto-text
                    margin-left .13rem
                    background rgba(255,232,232,1)
                    padding .03rem
                    text-align center
                    line-height .27rem
            .zc-describe-right
                .bk-red
                    color #fff
                    display block
                    width .66rem
                    height .27rem
                    background #F34B48
                    border .01rem  solid #f23030
                    border-radius .02rem
                    text-align center
                    line-height .27rem
</style>

