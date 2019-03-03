<template>
    <div class="class-boxtow">
        <div class="herder-box">
            <div class="heide-rout">
                <router-link tag="div" to="/bodyhomebot/Homebody" keep-alive class="icon-classification">
                    <i class="classification"></i>
                </router-link>
                <router-link tag="div" to="/seek" keep-alive class="input-box">
                    <i class="icon"></i>
                    <span class="input-style"></span>
                </router-link>
                <div class="btn-group">
                    <router-link tag="div" to="#" keep-alive data-toggle="dropdown" class="icon-message">
                        <i class="message"></i>
                    </router-link>
                    <ul class="dropdown-menu pull-right" role="menu">
                        <li><a href="bodyhomebot/Homebody"><i class="home"></i>首页</a></li>
                        <li><a href="/shopping"><i class="cart"></i>购物车</a></li>
                        <li><a href="/mine"><i class="member"></i>我的商城</a></li>
                        <li><a href="/message"><i class="message"></i>消息</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="next-text">
            <div class="rightlist-box">
                <ul class="listtext">
                    <li v-for="lists in listdataen"
                     :key="lists.menuId"
                     @click="gengailist(lists.menuId-1)"
                     >{{lists.menuName}}</li>
                </ul>
            </div>
            <div class="shouping-box">
                <Classtetx :litext="linoe"></Classtetx>
            </div>
        </div>
    </div>
</template>

<script>
import Classtetx from 'parge/homelist/fuye/hometop/classtext/Classtetx'
import {mapActions,mapGetters} from 'vuex'
import BScroll from 'better-scroll'


export default {
    components:{
        Classtetx
    },
    computed:{
         ...mapGetters(['list'])
    },
    methods:{
        ...mapActions(['getList']),
        gengailist(id){
            this.linoe=this.listdataen
            this.linoe=this.linoe[id]
        }
    },
    created(){
        this.getList()
    },
    data(){
        return {
            listdataen:null,
            linoe:null
        }
    },
    watch:{
        list(){
            this.listdataen=this.list.datas.menuList
            this.linoe=this.listdataen[0]
           new BScroll('.rightlist-box',{
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
    .herder-box
        width 100%
        margin: 0 auto
        height: .44rem
        background #fff
        top 0
        border 0 0 1px 0,#F0F2F5
        .heide-rout
            display flex
            text-align center
            color #ffffff
            width 100%
            background #ffffff
            .btn-group
                .dropdown-menu
                    border-radius .05rem
                    background rgba(0.0.0.0.8)
                    min-width 1.4rem !important
                    margin .1rem .1rem 0 0 
                    padding 0 .1rem
                    li
                        text-align left 
                        width 100%
                        border 0 0 1px 0,#F0F2F5
                        a
                            padding .12rem .02rem
                            color #ffffff
                            font-size .16rem
                            i
                                width .18rem
                                height .18rem
                                display inline-block
                                margin 0
                                padding 0
                                vertical-align middle
                                margin-right .15rem
                            .home
                                background url(https://m1.cnrmall.com/images/home_w.png)
                                background-size 100%
                            .cart
                                background url(https://m1.cnrmall.com/images/cart_w.png)
                                background-size 100%
                            .member
                                background url(https://m1.cnrmall.com/images/member_w.png)
                                background-size 100%
                            .message
                                background url(https://m1.cnrmall.com/images/message_w.png)
                                background-size 100%
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
                    
            .icon-message
                width .44rem
                height .44rem
                .message
                    background url(https://m1.cnrmall.com/images/more_b.png)
                    background-size 100%
    .next-text
        width 100%
        background #F0F2F5
        display flex
        overflow hidden
        .rightlist-box
            width 22%
            background #ffffff
            overflow hidden
            height 85vh
            .listtext
                width 100%
                height max-content
                li
                    width 100%
                    height .44rem
                    text-align center
                    line-height .44rem
                    color #212121
                    font-size .12rem
                    border 0 0 1px 0,#F0F2F5
        .shouping-box
            flex 1


</style>
