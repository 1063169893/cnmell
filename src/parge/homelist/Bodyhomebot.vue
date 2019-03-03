<template>
    <div class="bodyhomebot"> 
        <Harderbox></Harderbox>
        <Hometop :bodysDatas='tdata'></Hometop>
        <keep-alive>
            <router-view :bodysDatas="bodysDatas" :goods="goodnum"></router-view>
        </keep-alive>
    </div>
</template>
<script>
import Hometop from 'parge/homelist/Hometop'
import Harderbox from 'components/commonality/Hraderbox'

import {mapActions,mapGetters}from 'vuex'

export default {
    components:{
        Hometop,Harderbox
    },
    props:{
        'bodysDatas':Object
    },
    data(){
        return{
            tdata:null
        }
        
    },
    computed:{
      ...mapGetters(['goodnum'])
    }, 
    methods:{
        ...mapActions(['getGoods'])
    },
    created(){
        this.getGoods()
    },
    watch:{
    bodysDatas(){
        this.tdata=JSON.parse(this.bodysDatas.datas.itemList[1].itemData)
    }
}
}
</script>

<style lang="stylus" scoped>
.bodyhomebot
    width 100%
    overflow hidden
    margin .44rem 0

</style>
