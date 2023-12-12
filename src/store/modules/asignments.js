import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('asignments')
export default {
    namespaced: true,
    state: {
        asignmentsList: [],
        loading: false,
        error: null,
    },
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
        getAsignmentsList: ({ asignmentsList }) => asignmentsList,
        getAsignmentsListToView: (state, getters, rootState, rootGetters) => {
            return state.asignmentsList.map((obj) => ({
                id: obj.id,
                driver: rootGetters['drivers/getDriverById'](obj.driver)?.name,
                bus: rootGetters['busses/getBusById'](obj.bus)?.licensePlate,
            }))
        },
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.asignmentsList = itemsList
        },
        removeFromAsignmentsList(state, id) {
            state.asignmentsList = state.asignmentsList.filter((asignment) => asignment.id !== id)
        },
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadAsignmentsList({ commit }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        addToAsignmentsList({ commit, dispatch }, item) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItem(item)
                .then(() => {
                    dispatch('loadAsignmentsList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        removeFromAsignmentsList({ commit }, itemId) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .deleteItem(itemId)
                .then(() => {
                    commit('removeFromAsignmentsList', itemId)
                    // dispatch('loadAsignmentsList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
    },

    modules: {},
}
