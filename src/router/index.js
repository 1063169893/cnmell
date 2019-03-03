import Vue from 'vue'
import VueRouter from 'vue-router'
import Discover from 'parge/homelist/fuye/Discover'
import Streaming from 'parge/homelist/fuye/Streaming'
import Shopping from 'parge/homelist/fuye/Shopping'
import Mine from 'parge/homelist/fuye/Mine'
import Err from 'parge/homelist/fuye/Err'
import Bodyhomebot from 'parge/homelist/Bodyhomebot'


import Homebody from 'parge/homelist/Homebody'
import Tedaysea from 'parge/homelist/fuye/homeye/Tedaysea'
import Appliances from 'parge/homelist/fuye/homeye/Appliances'
import Cate from 'parge/homelist/fuye/homeye/Cate'
import Makeup from 'parge/homelist/fuye/homeye/Makeup'

import Classlist from 'parge/homelist/fuye/hometop/Classlist'
import Seek from 'parge/homelist/fuye/hometop/Seek'
import Message from 'parge/homelist/fuye/hometop/Message'

import Login from 'parge/homelist/fuye/hometop/login/Login'
import Phone from 'parge/homelist/fuye/hometop/login/Phone'
import Username from 'parge/homelist/fuye/hometop/login/Username'

import Register from 'parge/homelist/fuye/hometop/login/Register'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: "/bodyhomebot"
    },
    {
        path: '/bodyhomebot',
        component: Bodyhomebot,
        redirect: '/bodyhomebot/Homebody',
        children: [{
                    path: '/bodyhomebot/Homebody',
                    component: Homebody
                },
                {
                    path: '/bodyhomebot/tedaysea',
                    component: Tedaysea
                },
                {
                    path: '/bodyhomebot/appliances',
                    component: Appliances
                },
                {
                    path: '/bodyhomebot/cate',
                    component: Cate
                },
                {
                    path: '/bodyhomebot/makeup',
                    component: Makeup
                }]

    }    
    ,
    {
        path: '/classlist',
        component: Classlist
    },
    {
        path:'/seek',
        component:Seek
    },
    {
        path:'/message',
        component:Message
    }
    ,
    {
        path: '/discover',
        component: Discover
    },
    {
        path: '/streaming',
        component: Streaming
    },
    {
        path: '/shopping',
        component: Shopping
    }, {
        path: '/mine',
        component: Mine
    },
    {
        path: '/login',
        component: Login,
        redirect:'/login/phone',
        children:[{
            path: '/login/phone',
            component: Phone
        },{
            path: '/login/username',
            component: Username
        }]
    },
    {
        path:'/register',
        component:Register
    },
    {
        path: '/err',
        component: Err
    },
    {
        path: '*',
        redirect: '/err'
    }


]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router