const getters = {
    bodysDatanum(state) {
        return state.bodysData
    },
    goodnum(state){
        return state.goodDats
    },
    timelist(state){
        return state.timeData
    },
    list(state){
        return state.lisyData
    },
    seektext(state){
        return state.seekData
    },
    haitaodatas(state){
       return state.haitaoData
    },
    mzdatsimg(state){
       return state.mzimgData
    },
    meishi(state){
        return state.meishiisData
    }
}

export default getters