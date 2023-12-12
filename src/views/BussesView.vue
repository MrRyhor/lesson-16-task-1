<template>
    <div v-if="isLoading">Loading ....</div>
    <div v-else-if="hasError">Error</div>
    <template v-else>
        <main-master-page>
            <div class="busses-container">
                <h1>Our busses:</h1>
                <sub-master-page>
                    <item-view v-for="bus in getBussesList" :key="bus.id" :data="bus">
                        <template #data-container>
                            <div class="title">{{ bus.licensePlate }}</div>
                            <div class="sub-title">{{ bus.seats }}</div>
                        </template>
                    </item-view>
                </sub-master-page>
            </div>
        </main-master-page>
    </template>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import MainMasterPage from '../masterpages/MainMasterPage.vue'
import SubMasterPage from '../masterpages/SubMasterPage.vue'
import ItemView from '../components/ItemView.vue'
export default {
    name: 'BussesView',

    components: {
        MainMasterPage,
        SubMasterPage,
        ItemView,
    },

    computed: {
        ...mapGetters('busses', ['getBussesList', 'isLoading', 'hasError']),
    },

    created() {
        this.loadBussesList()
    },

    methods: {
        ...mapActions('busses', ['loadBussesList']),
    },
}
</script>
<style lang="scss" scoped>
.busses-container {
    max-width: 1000px;
    padding-left: 100px;
}
</style>
