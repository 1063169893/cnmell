<template>
    <div class="body-min">
       <div class="body-box-mins">
           <Raobo :bodysDatas='rouboing'></Raobo>
           <div class="nav-fivudi">
               <ul class="nav-ul">
                  <li v-for="img in imgdatatop" :key="img.image">
                      <img :src="img.imageUrl" alt="">
                  </li>
                  <li v-for="img in imgdataboot" :key="img.image">
                      <img :src="img.imageUrl" alt="">
                  </li>
               </ul>
           </div>
           <div class="bannerime-1">
               <img :src="imgdataser" alt="">
           </div>
           <div class="background-imgyitaiop">
               <img :src="imgdatabaer" alt="">
           </div>
           <div class="now-hot-2">
               <div class="hot-top">
                   <img :src="imgdatarout" alt="">
               </div>
               <div class="bottom-2">
                   <div class="bottom-left">
                        <img :src="imgdatatow" alt="">
                   </div>
                   <div class="bottom-right">
                       <div class="sopin">
                           <img src="https://pic1.cnrmall.com/image/34/5b/345b09bd50a1c7a89860aa0900291bc7.jpg" alt="">
                            <p><span>￥</span><span>2999.00</span></p>
                       </div>
                         <div class="sopin">
                           <img src="https://pic1.cnrmall.com/image/34/5b/345b09bd50a1c7a89860aa0900291bc7.jpg" alt="">
                            <p><span>￥</span><span>2999.00</span></p>
                       </div>
                   </div>
               </div>
            </div>
            <div class="background-imgyitaiop">
                <img :src="imgdatabaer" alt="">
            </div>
           <div class="main-img-2">
               <div class="top-main-img">
                   <img :src="imgdatabantop" alt="">
               </div>
               <div class="bottom-img">
                   <img :src="imgdatabanbott" alt="">
               </div>
           </div>
           <div class="panic-buying">
               <div class="panic-tiem">
                   <div class="time-open">
                       <div v-for="itme in timeout" :key="itme.scheduleId" class="li">
                           <p class="itemis">{{ itme.endTime.slice(11,16)}}</p>
                            <p class="textent">{{itme.scheduleStateText}}</p>
                       </div>
                   </div>
               </div>
                <div class="commodity">
                    <Banner 
                    v-for="(ban,index) in goodesdatalist" 
                    :key="index"
                    :goodesimg='ban'
                    ></Banner>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import Raobo from 'components/guangao/Raobo'
import Banner from 'components/guangao/Banner'
import {mapActions,mapGetters}from 'vuex'

import BScroll from 'better-scroll'
let wrapper = document.querySelector('.wrapper')



export default {
    components:{
        Raobo,Banner
    },
    props:{
        'bodysDatas':Object,
        'goods':Object
    },
    data(){
        return{
             imgdatatop:null,
             imgdataboot:null,
             imgdatatow:null,
             imgdataser:null,
             imgdatabaer:null,
             imgdatarout:null,
             imgdatabantop:null,
             imgdatabanbott:null,
             rouboing:null,
             goodesdatalist:null,
             timenow:null,
             timeout:null
        }
    },
    computed:{
        ...mapGetters(['timelist'])
    }, 
    methods:{
        ...mapActions(['getTime'])
    },
    created(){
        this.getTime()
        
    },
    watch:{
        bodysDatas(){
            this.imgdatatop=JSON.parse(this.bodysDatas.datas.itemList[2].itemData)
            this.imgdataboot=JSON.parse(this.bodysDatas.datas.itemList[3].itemData)
            this.imgdatatow=JSON.parse(this.bodysDatas.datas.itemList[7].itemData)[0].imageUrl
            this.imgdataser=JSON.parse(this.bodysDatas.datas.itemList[4].itemData)[0].imageUrl
            this.imgdatabaer=JSON.parse(this.bodysDatas.datas.itemList[5].itemData)[0].imageUrl
            this.imgdatarout=JSON.parse(this.bodysDatas.datas.itemList[6].itemData)[0].imageUrl
            this.imgdatabantop=JSON.parse(this.bodysDatas.datas.itemList[9].itemData)[0].imageUrl
            this.imgdatabanbott=JSON.parse(this.bodysDatas.datas.itemList[10].itemData)[0].imageUrl
            this.rouboing=JSON.parse(this.bodysDatas.datas.itemList[0].itemData) 
            let scroll = new BScroll('.body-min',{
                mouseWheel:true
            })
        },
        goods(){
            this.goodesdatalist=this.goods.datas.seckillGoodsCommonList
        },
        timelist(){
            this.timenow=this.timelist.datas
            this.timeout=this.timelist.datas.seckillScheduleList
        }
    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/_ellipsis.styl'
.body-min
    width 100%
    height 83vh
    overflow hidden
    background #fff
    .body-box-mins
        width 100%
        .nav-fivudi
            height 1.5rem
            width 100%
            .nav-ul
                width 100%
                height 100%
                display flex
                flex-wrap wrap
                background #fff
                li
                    width 20%
                    box-sizing border-box
                    overflow hidden
                    img 
                        width 100%
        .bannerime-1
            width 100%
            height 1.17rem
            overflow hidden
            img 
                width 100%
        .background-imgyitaiop
            width 100%
            height .132rem
            overflow hidden
            background #fff
            img 
                width 100%
        .now-hot-2
            height 1.59rem
            width 100%
            .hot-top
                width 100%
                height .54rem
                overflow hidden
                img 
                    width 100%
            .bottom-2
                display flex
                height 1.05rem
                background #fff
                .bottom-left
                    width 50%
                    height 100%
                    overflow hidden
                    img 
                        width 100%
                .bottom-right
                     width 50%
                     height 100%
                     display flex
                     background #fff
                     .sopin
                        width 50%
                        height 100%
                        overflow hidden
                        text-align center
                        img 
                            width .66rem
                        p
                            margin-top .12rem 
                            color #F34B48
                            font-size .1rem
        .main-img-2
            height 2.59rem
            width 100%
            .top-main-img
                width 100%
                height .94rem
                overflow hidden
                img 
                    width 100%
            .bottom-img
                height 1.65rem
                overflow hidden
                img 
                    width 100%
        .panic-buying
            width 100% 
            overflow hidden
            .panic-tiem
                width 100%
                height .57rem
                overflow hidden
                .time-open
                    height 100%
                    width 100%
                    display flex
                    overflow hidden
                    flex-wrap wrap
                    .li
                        width 20%
                        text-align center
                        height 100%
                        .itemis
                            line-height 0.1rem
                            font-size 0.14rem
                            font-weight 500
                            margin-top 0.10rem
                            font-weight 600
                        .textent
                            margin-top 0.08rem
            .commodity
                padding 0 .1rem
                

                    
</style>

