<template>
    <div class="mine">
        <div class="mine-box">
            <div class="minbox-top">
                <div class="topimg">
                    <div class="ueserimgs">
                        <img src="https://m1.cnrmall.com/images/defaultAvatar.png" alt="">
                    </div>
                    <div class="text">
                        <router-link tag="p" to="/login"> 登录 / 注册</router-link>
                    </div>
                </div>
                <div class="plus-img">
                    <img src="https://m1.cnrmall.com/images/privilege.png" alt="">
                </div>
            </div>
            <div class="xinsie">
                <ul class="text">
                    <li><div><i class="mi-1"></i></div>待收货</li>
                    <li><div><i class="mi-2"></i></div>待收货</li>
                    <li><div><i class="mi-3"></i></div>待收货</li>
                    <li><div><i class="mi-4"></i></div>待收货</li>
                    <li class="lift"><div><i class="mi-5"></i></div>待收货</li>
                    
                </ul>
            </div>
            <div class="xinsie">
                <ul class="text">
                    <li><div><i>sdfsd</i></div>sdf</li>
                    <li><div><i>sdfsd</i></div>sdf</li>
                    <li><div><i>dfsdf</i></div>sdf</li>
                    <li><div><i>sdfsdf</i></div>sdfsd</li>
                    <li class="lift"><div><i class="asd"></i></div>sdfsdf</li>
                    
                </ul>
            </div>
            <div class="xinsie">
                <ul class="text">
                    <li><div><i class="mi-1"></i></div>待收货</li>
                    <li><div><i class="mi-2"></i></div>待收货</li>
                    <li><div><i class="mi-3"></i></div>待收货</li>
                    <li><div><i class="mi-4"></i></div>待收货</li>
                    <li class="lift"><div><i class="mi-5"></i></div>待收货</li>
                    
                </ul>
            </div>
            <div class="xinsie">
                <ul class="text">
                    <li><div><i class="mi-1"></i></div>待收货</li>
                    <li><div><i class="mi-2"></i></div>待收货</li>
                    <li><div><i class="mi-3"></i></div>待收货</li>
                    <li><div><i class="mi-4"></i></div>待收货</li>
                    <li class="lift"><div><i class="mi-5"></i></div>待收货</li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>

.mine
    width 100%
    .mine-box
        width 100%
        .minbox-top
            width 100%
            height 1.23rem
            background url(https://m1.cnrmall.com/images/newMemberbg.png)
            background-size 100%
            position relative
            overflow hidden
            .topimg
                display flex
                padding .28rem 0 0 .15rem
                .ueserimgs
                    width .616rem
                    height .616rem
                    img 
                        width 100%
                .text
                    padding .27rem 0 0 .17rem
                    font-size .15rem
                    color #fff
            .plus-img
                width 1rem
                height .62rem
                overflow hidden
                position absolute
                bottom -.04rem
                right 0
                img 
                    width 100%
        .xinsie
            width 100%
            height .77rem
            padding-bottom .1rem
            background-color #f0f2f5
            .text
                width 100%
                height 100%
                display flex
                justify-content space-between
                background #fff
                li
                    width 20%
                    height 100%
                    text-align center
                    &.lift
                        background url(https://m1.cnrmall.com/images/arrow_right_c.png) no-repeat
                        background-position: 0 50%;
                        background-size contain
                        
                    i 
                        display inline-block
                        width .22rem
                        height .22rem
                        margin .1rem
                        &.mi-1
                            background url(https://m1.cnrmall.com/images/mi_01.png)
                            background-size 100%
                        &.mi-2
                            background url(https://m1.cnrmall.com/images/mi_02.png)
                            background-size 100%
                        &.mi-3
                            background url(https://m1.cnrmall.com/images/mi_03.png)
                            background-size 100%
                        &.mi-4
                            background url(https://m1.cnrmall.com/images/mi_04.png)
                            background-size 100%
                        &.mi-5
                            background url(https://m1.cnrmall.com/images/mr_01.png)
                            background-size 100%
                        &.asd
                            background url(https://m1.cnrmall.com/images/mr_02.png)
                            background-size 100%

                        


</style>

