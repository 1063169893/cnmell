<template>
    <div class="home-box">
        <main>
            <Bodybox></Bodybox>
        </main>
        <Footerbox></Footerbox>
    </div>
</template>

<script>
import Footerbox from 'components/commonality/Footerbox'
import Bodybox from 'parge/homelist/body/Bodybox'

export default {
    components:{
        Footerbox,Bodybox
    }
}
</script>

<style lang="stylus" scoped>
.home-box
    height 100%
    width 100%
    display flex
    flex-direction column
    main
        flex 1
        width 100%

</style>

