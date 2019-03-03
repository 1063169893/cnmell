<template>
    <div class="banner-box">
        <mt-swipe :auto="3500">
            <mt-swipe-item v-for="bor in bodysDatas" :key='bor.image'>
                <img :src="bor.imageUrl" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    props:{
        'bodysDatas':Array
    }
}
</script>

<style lang="stylus" scoped>
.banner-box
    height 1.75rem
    width 100%
    img 
        width 100%
</style>
