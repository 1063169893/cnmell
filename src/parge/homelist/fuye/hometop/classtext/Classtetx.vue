<template>
    <div class="scrll">
        <div class="classtext-box">
            <div class="routeryi"  
            v-for="listind in next" 
            :key="listind.itemId"
            >
                <div class="top-text">{{listind.itemName}}</div>
                <div class="splict-box">
                    <div class="imgs-bos" 
                    v-for="lis in listind.subitemData"
                    :key="lis.data"
                    >
                        <div class="top-img">
                            <img :src="lis.imageUrl" alt="">
                        </div>
                        <p>{{lis.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import BScroll from 'better-scroll'



export default {
    props:{
        'litext':Object
    },
    data(){
        return{
            next:null
        }
    },
    watch:{
        litext(){
            this.next=this.litext.menuItemList
            new BScroll('.scrll')
        }
    }
}
</script>




<style lang="stylus" scoped>
.scrll
    height 85vh
    overflow hidden
    .classtext-box
        width 100%
        padding .12rem
        overflow hidden
        height max-content
        .routeryi
            width 100%
            .top-text
                height .33rem
                line-height .33rem
                font-size .13rem
            .splict-box
                width 100%
                overflow hidden
                background #ffffff
                padding .08rem
                .imgs-bos
                    display inline-block
                    .top-img
                        width .5rem
                        height .5rem
                        margin .07rem .12rem .08rem .12rem
                        img 
                            width 100%
                    p
                        text-align center
                        font-size .12rem
                        



</style>



