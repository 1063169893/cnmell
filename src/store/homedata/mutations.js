import * as type from './type'

const mutations = {

    [type.BODYING](state, action) {
        state.bodysData = action.data
    },
    [type.GOODSDATA](state, action) {
        state.goodDats = action.data
    },
    [type.TIMELISTHOME](state, action) {
        state.timeData = action.data
    },
    [type.LISTDATAS](state, action) {
        state.lisyData = action.data
    },
    [type.SEEKTEXT](state, action) {
        state.seekData = action.data
    },
    [type.HAOTAODATASS](state, action) {
        state.haitaoData = action.data
    },
    [type.MZDATASIMG](state, action) {
        state.mzimgData = action.data
    },
    [type.MEISHIDATAS](state,action) {
        state.meishiisData = action.data
    }
}

export default mutations