<template>
    <header class="herder-box">
      <div class="heide-rout">
          <router-link tag="div" to="/classlist" keep-alive class="icon-classification">
              <i class="classification"></i>
              <p>分类</p>
          </router-link>
          <router-link tag="div" to="/seek" keep-alive class="input-box">
              <i class="icon"></i>
              <span class="input-style"></span>
          </router-link>
          <router-link tag="div" to="/message" keep-alive class="icon-message">
              <i class="message"></i>
              <p>消息</p>
          </router-link>
      </div>
    </header>
</template>

<style lang="stylus" scoped>
.herder-box
    width 100%
    margin: 0 auto
    height: .44rem
    background-image -webkit-linear-gradient(top, rgba(0,0,0,0.35), rgba(0,0,0,0.15))
    position fixed
    top 0
    .heide-rout
        background-color transparent
        height 100%
        display flex
        text-align center
        color #ffffff
        i 
            display inline-block
            width .15rem
            height .15rem
            margin-top .079rem
        p
            font-size .09rem
            margin-top .03rem
        .icon-classification
            width .44rem
            height .44rem
            .classification
                background url(https://m1.cnrmall.com/images/category_w.png)
                background-size 100%
        .input-box
            flex 1
            background #ffffff
            height .288rem
            margin-top .075rem
            border-radius .15rem
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
                background url(https://m1.cnrmall.com/images/message_w.png)
                background-size 100%
</style>
