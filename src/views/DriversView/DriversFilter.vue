<template>
    <div class="filters-container">
        <h1>Filter:</h1>
        <div class="filter-name-container">
            <label
                ><h4>Driver name:</h4>
                <v-text-field
                    v-model="searchName"
                    prepend-inner
                    icon="fa:fas fa-search"
                    label="Label"
                    variant="outlined"
                />
            </label>
            <div class="filter-name-btns">
                <v-btn density="default" variant="outlined" @click="onSearchClick">Search</v-btn>
                <v-btn density="default" variant="outlined" @click="onClearClick">Clear</v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'DriversFilter',

    data() {
        return {
            searchName: null,
        }
    },

    methods: {
        ...mapActions('drivers', ['loadFilteredDriversList', 'loadDriversList']),

        onSearchClick() {
            this.loadFilteredDriversList({
                fieldTitle: 'name',
                compareOperator: '==',
                valueToCompare: this.searchName,
            })
        },
        onClearClick() {
            this.loadDriversList()
            this.searchName = null
        },
    },
}
</script>
<style lang="scss" scoped>
.filters-container {
    max-width: 800px;
    padding-left: 100px;

    & .filter-name-btns{
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>
