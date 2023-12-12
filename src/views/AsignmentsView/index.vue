<template>
    <div class="asignments-container">
        <main-master-page>
            <h1>Asignments List:</h1>
            <asignments-list />
            <select-asignments />
        </main-master-page>
    </div>
</template>
<script>
import MainMasterPage from '../../masterpages/MainMasterPage.vue'
import AsignmentsList from './AsignmentsList.vue'
import SelectAsignments from './SelectAsignments.vue'
export default {
    name: 'AsignmentsView',

    components: {
        MainMasterPage,
        AsignmentsList,
        SelectAsignments,
    },
}
</script>
<style lang="scss" scoped>
.asignments-container {
    max-width: 700px;
    padding-left: 100px;
}
</style>
