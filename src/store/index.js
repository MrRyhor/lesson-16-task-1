import { createStore } from 'vuex'
import drivers from './modules/drivers'
import busses from './modules/busses'
import asignments from './modules/asignments'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        drivers,
        busses,
        asignments,
    },
})
