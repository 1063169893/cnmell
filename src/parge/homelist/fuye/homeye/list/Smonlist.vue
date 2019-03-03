<template>
    <div class="shopin">
        <ul class="tesx">
            <li v-for="listd in listingswe" :key="listd.commonId">
                <div class="img-box">
                    <img :src="listd.imageUrl" alt="">
                </div>
                <div class="text-box">{{listd.goodsName}}</div>
                <div class="mony-shopin">
                    <p class="mony"><span>￥</span>{{listd.appPriceMin}}</p>
                    <p class="shopin">购买</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        'listimg':Array
    },
    data(){
        return{
            
            listingswe:null
        }
    },
    watch:{
        listimg(){
            this.listingswe=JSON.parse(this.listimg[0].itemData)
        }
    }
}
</script>



<style lang="stylus" scoped>

.shopin
    width 100%
    height max-content
    overflow hidden
    background #f0f2f5
    box-sizing border-box
    .tesx
        width 100%
        height max-content
        padding .15rem 0 .1rem .1rem
        display flex
        flex-wrap wrap
        box-sizing border-box
        li
            width 47%
            margin 0 .1rem .1rem 0
            box-sizing border-box
            background #ffffff
            .text-box
                width 100%
                height .28rem
                font-size .138rem
                padding 0 .05rem
                color #000
                overflow hidden
                margin .05rem 0 .1rem 0
            .mony-shopin
                width 100%
                display flex
                padding 0 .05rem
                margin .05rem 0 .1rem 0
                justify-content space-between
                .mony
                    color #f23030
                    font-size .13rem
                    text-align center
                    line-height .2rem
                    
                    span
                        font-size .1rem
                .shopin
                    width .38rem
                    height .2rem
                    background #f23030
                    text-align center
                    line-height .2rem
                    color #fff
                    border-radius .05rem
                    font-size .13rem

                

        



</style>
