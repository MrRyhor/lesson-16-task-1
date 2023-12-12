<template>
    <div v-if="isLoading">Loading ....</div>
    <div v-else-if="hasError">Error</div>
    <template v-else>
        <div class="drivers-container">
            <h1>Our drivers:</h1>
            <sub-master-page>
                <item-view v-for="driver in getDriversList" :key="driver.id" :data="driver" />
            </sub-master-page>
        </div>
    </template>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import SubMasterPage from '../../masterpages/SubMasterPage.vue'
import ItemView from '../../components/ItemView.vue'
export default {
    name: 'DriversView',

    components: {
        SubMasterPage,
        ItemView,
    },

    computed: {
        ...mapGetters('drivers', ['getDriversList', 'isLoading', 'hasError']),
    },

    created() {
        this.loadDriversList()
    },

    methods: {
        ...mapActions('drivers', ['loadDriversList']),
    },
}
</script>
<style lang="scss" scoped>
.drivers-container {
    max-width: 1000px;
    padding-left: 100px;
}
</style>
