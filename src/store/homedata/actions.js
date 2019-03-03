import * as type from './type'
import http from 'utils/http'


const actions = {
    getbBody({ commit }) {
        http({
            method: 'get',
            url: '/data/body.json'
               
        }).then((res) => {
            let action = {
                type: type.BODYING,
                data: res
            }
            commit(action)
        }).catch((error) => {
            console.log(error)
        })
    },
    getGoods({commit}){
        http({
            method: 'get',
            url: '/data/goods1.json'
               
        }).then((res) => {
            let action = {
                type: type.GOODSDATA,
                data: res
            }
            commit(action)
        }).catch((error) => {
            console.log(error)
        })

    },
    getTime({commit}){
        http({
            method: 'get',
            url: '/data/seckill.json'
               
        }).then((res) => {
            let action = {
                type: type.TIMELISTHOME,
                data: res
            }
            commit(action)
        }).catch((error) => {
            console.log(error)
        })

    },
    getList({commit}){
        http({
            method: 'get',
            url: '/data/list.json'
               
        }).then((res) => {
            let action = {
                type: type.LISTDATAS,
                data: res
            }
            commit(action)
        }).catch((error) => {
            console.log(error)
        })

    },
    getSeek({commit}){
        http({
            method: 'get',
            url: '/data/seek.json'
               
        }).then((res) => {
            let action = {
                type: type.SEEKTEXT,
                data: res
            }
            commit(action)
        }).catch((error) => {
            console.log(error)
        })

    },
    getHaotaodata({commit}){
        http({
            method: 'get',
            url: '/data/haitou.json'
               
        }).then((res) => {
            let action = {
                type: type.HAOTAODATASS,
                data: res
            }
            commit(action)
        }).catch((error) => {
            console.log(error)
        })

    },
    getMzdatas({commit}){
        http({
            method: 'get',
            url: '/data/mzdata.json'
               
        }).then((res) => {
            let action = {
                type: type.MZDATASIMG,
                data: res
            }
            commit(action)
        }).catch((error) => {
            console.log(error)
        })

    },
    getMeishi({commit}){
        http({
            method: 'get',
            url: '/data/jddata.json'
               
        }).then((res) => {
            let action = {
                type: type.MEISHIDATAS,
                data: res
            }
            commit(action)
        }).catch((error) => {
            console.log(error)
        })

    }
}
export default actions