<template>
    <div class="footer-box" v-if="$route.path!='/seek' && $route.path!='/login/phone' && $route.path!='/login/username' && $route.path!='/register'"> 
        <ul class="footer-list">
            <router-link tag="li" to="/bodyhomebot" keep-alive active-class = 'pcolors backimg' >
                    <i class="home-icon-1"></i>
                    <p>首页</p>
            </router-link>
             <router-link tag="li" to="/discover" keep-alive active-class = 'pcolors backimg'>
                    <i class="home-icon-2"></i>
                    <p>发现</p>
            </router-link>
             <router-link tag="li" to="/streaming" keep-alive active-class = 'pcolors backimg'>
                    <i class="home-icon-3"></i>
                    <p>直播</p>
            </router-link>
             <router-link tag="li" to="/shopping" keep-alive active-class = 'pcolors backimg'>
                    <i class="home-icon-4"></i>
                    <p>购物车</p>
            </router-link>
             <router-link tag="li" to="/mine" keep-alive active-class = 'pcolors backimg'>
                    <i class="home-icon-5"></i>
                    <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>


<style lang="stylus" scoped>
.footer-box
    width 100%
    height .44rem
    position fixed 
    bottom 0
    background #ffffff
    .footer-list
        width 100%
        height 100%
        display flex
        text-align center
        li
            width 25%
            color #232326
            
            i 
                width .175rem
                height .175rem
                display inline-block
                margin .068rem 0 .02rem 0
            .home-icon-1
                background-image url(http://m.cnrmall.com/images/bar_01.png)
                background-size 100%
            .home-icon-2
                background url(http://m.cnrmall.com/images/bar_11.png)
                background-size 100%
            .home-icon-3
                background url(http://m.cnrmall.com/images/zb.png)
                background-size 100%
            .home-icon-4
                background url(http://m.cnrmall.com/images/bar_04.png)
                background-size 100%
            .home-icon-5
                background url(https://m1.cnrmall.com/images/bar_05.png)
                background-size 100%
            &.pcolors
                color #f23030
            &.backimg
                .home-icon-1
                    background-image  url(http://m.cnrmall.com/images/bar_06.png)
                .home-icon-2
                    background url(http://m.cnrmall.com/images/bar_12.png)
                    background-size 100%
                .home-icon-3
                    background url(https://m1.cnrmall.com/images/zb_select.png)
                    background-size 100%
                .home-icon-4
                    background url(https://m1.cnrmall.com/images/bar_09.png)
                    background-size 100%
                .home-icon-5
                    background url(https://m1.cnrmall.com/images/bar_10.png)
                    background-size 100%
</style>

