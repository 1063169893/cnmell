<template>
    <div class="body-box">
        <div class="scrllo-wai">
            <keep-alive>
                <router-view :bodysDatas="bodysDatanum"></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>

import {mapActions,mapGetters}from 'vuex'


export default {
    data(){
        return{
             boxdata:null
        }
       
    },
    computed:{
      ...mapGetters(['bodysDatanum'])
    },
    components:{
    }, 
    methods:{
        ...mapActions(['getbBody'])
    },
    created(){
        this.getbBody()
    },
    watch:{
        bodysDatanum(){
            
        }
    }
}
</script>
<style lang="stylus" scoped>
.body-box
    width 100%
    height 100%
    overflow hidden
    
    .scrllo-wai
       height 100%
       overflow hidden
</style>


