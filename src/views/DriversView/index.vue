<template>
    <main-master-page>
        <drivers-filter />
        <drivers-list />
    </main-master-page>
</template>
<script>
import MainMasterPage from '../../masterpages/MainMasterPage.vue'
import DriversList from './DriversList.vue'
import DriversFilter from './DriversFilter.vue'
export default {
    name: 'DriversView',
    components: {
        MainMasterPage,
        DriversList,
        DriversFilter,
    },
}
</script>
<style lang="scss" scoped></style>
