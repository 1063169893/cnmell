<template>
    <div class="body-top">
       <ul class="nav-topbox">
          <router-link tag="li" to="/bodyhomebot/Homebody" keep-alive active-class = 'actions' >
                今日特卖
           </router-link>
           <router-link v-for="lis in bodysDatas" tag="li" :to="'/bodyhomebot/'+lis.url" :key="lis.data" keep-alive active-class = 'actions'>
               {{lis.text}}
           </router-link>
       </ul>
    </div>
</template>

<script>
export default {
    props:{
        'bodysDatas':Array
    },
    watch:{
        bodysDatas(){
            this.bodysDatas[0].url='tedaysea'
            this.bodysDatas[1].url='appliances'
            this.bodysDatas[2].url='cate'
            this.bodysDatas[3].url='makeup'

        }
    }
}
</script>



<style lang="stylus" scoped>
.body-top
    width 100%
    height .418rem
    background #fff
    .nav-topbox
        width 100%
        height 100%
        display flex
        li
            flex .2
            color #333
            font-size .12rem
            text-align center
            height 100%
            line-height .4rem
            margin 0 .09rem
            box-sizing border-box
            word-wrap break-word
            &.actions
                color #F34B48
                border-bottom .04rem solid #F34B48



</style>
