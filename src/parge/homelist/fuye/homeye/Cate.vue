<template>
    <div class="sea-box">
        <div class="haotao-box">
            <div class="felu-box">
                <div class="img-box-for" v-for="imgs in imgarr" :key="imgs.itemId">
                    <img :src="JSON.parse(imgs.itemData)[0].imageUrl" alt="">
                </div>
            </div> 
            <Smonlist :listimg='listimg'></Smonlist>
            <div class="footimgs" v-for="fot in footimg" :key="fot.itemId">
                <img :src="JSON.parse(fot.itemData)[0].imageUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll' 
import Smonlist from 'parge/homelist/fuye/homeye/list/Smonlist'

import {mapActions,mapGetters} from 'vuex'



export default {
    components:{
        Smonlist
    },
    computed:{
        ...mapGetters(['mzdatsimg'])
    },
    methods:{
        ...mapActions(['getMzdatas'])
    },
    created(){
        this.getMzdatas()
    },
    data(){ 
        return {
            imgdata:null,
            imgarr:[],
            listimg:[],
            footimg:[]
        }
    },
    watch:{
        mzdatsimg(){
            let scroll = new BScroll('.sea-box')
            this.imgdata=this.mzdatsimg.datas.itemList
            console.log(this.imgdata)
            this.imgarr.splice(0,0,this.imgdata[0],this.imgdata[1],this.imgdata[2],this.imgdata[3],this.imgdata[4])
            this.listimg.splice(0,0,this.imgdata[5])
            this.footimg.splice(0,0,this.imgdata[6])

        }
    }
  
}
</script>


<style lang="stylus" scoped>
.sea-box
    height 78vh
    width 100%
    overflow hidden
    margin-bottom .2rem
    .haotao-box
        width 100%
        height max-content
        overflow hidden
        .felu-box
            width 100%
            height max-content
            .img-box-for
                width 100%
                height max-content
                font-size 0
                overflow hidden
                img 
                    width 100%


</style>

