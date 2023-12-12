<template>
    <div v-if="isLoading">Loading ....</div>
    <div v-else-if="hasError">Error</div>
    <template v-else>
        <div v-if="getAsignmentsListToView.length">
            <div v-for="asignment in getAsignmentsListToView" :key="asignment.id" class="asignment-container">
                <div>
                    <h3>{{ asignment.driver }}</h3>
                </div>
                <div>--</div>
                <div>
                    <h3>{{ asignment.bus }}</h3>
                </div>
                <v-btn density="default" variant="outlined" @click="removeFromAsignmentsList(asignment.id)"
                    >Delete</v-btn
                >
            </div>
        </div>
        <div v-else class="no-results"><h1>No Results</h1></div>
    </template>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AsignmentsView',

    computed: {
        ...mapGetters('asignments', ['getAsignmentsListToView', 'isLoading', 'hasError']),
    },

    created() {
        this.loadAsignmentsList()
        this.loadDriversList()
        this.loadBussesList()
    },

    methods: {
        ...mapActions('asignments', ['loadAsignmentsList', 'removeFromAsignmentsList']),
        ...mapActions('drivers', ['loadDriversList']),
        ...mapActions('busses', ['loadBussesList']),
    },
}
</script>
<style lang="scss" scoped>
.asignment-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;

    & > button {
        cursor: pointer;
    }

    & > button:hover {
        background-color: rgb(57, 57, 57);
        color: #fff;
    }
}
.no-results {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding-left: 100px;
    font-weight: 700;
}
</style>
