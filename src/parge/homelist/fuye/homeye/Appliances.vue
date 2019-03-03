<template>
    <div class="appliances-box">
        <div class="csroll">
            <Raobo :bodysDatas="rouborimg"></Raobo>
            <div class="ul-ing">
                <ul class="liis-box">
                    <li v-for="list in listing" :key="list.data">
                        <img :src="list.imageUrl" alt="">
                    </li>
                    <li v-for="lists in listsimg" :key="lists.data">
                        <img :src="lists.imageUrl" alt="">
                    </li>
                </ul>
            </div>
            <div class="selist">
                <Banner v-for="(img,index) in bannerimg" :key="index" :goodesimg='img'></Banner>
                <div class="banerimg">
                    <img src="https://pic1.cnrmall.com/image/bc/f2/bcf261bee266cd7dc352e9637910a427.jpg" alt="">    
                </div> 
            </div>
            <Smonlist :listimg='smonlistimgtop'></Smonlist>
            <div class="imgsle">
                <img src="https://pic1.cnrmall.com/image/5b/a1/5ba175b424261dd89cd5ab73323fc196.jpg" alt="">
            </div>
            <Smonlist :listimg='smonlistimgbott'></Smonlist>
        </div>
    </div>
</template>


<script>
import Raobo from 'components/guangao/Raobo'
import Banner from 'components/guangao/Banner'
import Smonlist from 'parge/homelist/fuye/homeye/list/Smonlist'

import {mapActions,mapGetters} from 'vuex'
import BScroll from 'better-scroll'
export default {
    components:{
        Raobo,Banner,Smonlist
    },
    computed:{
        ...mapGetters(['meishi'])
    },
    methods:{
        ...mapActions(['getMeishi'])
    },
    created(){
        this.getMeishi()
    },
    data(){
        return {
            rouborimg:null,
            bannerimg:null,
            smonlistimgtop:[],
            smonlistimgbott:[],
            listing:null,
            listsimg:null
        }
    },
    watch:{
        meishi(){
            this.rouborimg=JSON.parse(this.meishi.datas.itemList[0].itemData)
            this.bannerimg=JSON.parse(this.meishi.datas.itemList[3].itemData)
            this.smonlistimgtop.push(this.meishi.datas.itemList[5])
            this.smonlistimgbott.push(this.meishi.datas.itemList[7])

            this.listing=JSON.parse(this.meishi.datas.itemList[1].itemData)
            this.listsimg=JSON.parse(this.meishi.datas.itemList[2].itemData)

            let scroll = new BScroll('.appliances-box')
        }
    }

}
</script>

<style lang="stylus" scoped>
.appliances-box
    height 80vh
    overflow hidden
    .csroll
        .ul-ing
            .liis-box
                width 100%
                display flex
                flex-wrap wrap
                li
                    width 25%
                    img 
                        width 100%
    .selist
        padding .1rem .1rem
        background #fff

</style>
