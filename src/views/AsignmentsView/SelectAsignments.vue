<template>
    <div class="selection-container">
        <h2>Selection panel:</h2>
        <div class="drivers-selection">
            Drivers list:
            <v-select
                v-model="selectionObj.driver"
                :items="getDriversList"
                item-title="name"
                item-value="id"
                label="Driver"
            >
            </v-select>           
        </div>
        <div class="busses-selection">
            Busses list:
            <v-select
                v-model="selectionObj.bus"
                :items="getBussesList"
                item-title="licensePlate"
                item-value="id"
                label="Bus"
            >
            </v-select>           
        </div>
        <v-btn density="default" variant="outlined" @click="onAddToAsignments">Add to asignments</v-btn>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'SelectionDriversToBusses',
    data() {
        return {
            selectionObj: {},
        }
    },

    computed: {
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('busses', ['getBussesList']),
        // getItemsForDriversSelect() {
        //     return this.getDriversList.map((driver) => driver.name )
        // },
        // getItemsForBussesSelect(){
        //     return this.getBussesList.map(bus => bus.licensePlate)
        // }
    },

    methods: {
        ...mapActions('asignments', ['addToAsignmentsList']),
        onAddToAsignments() {
            this.addToAsignmentsList(this.selectionObj)
            this.selectionObj = {}
        },
    },
}
</script>
<style lang="scss" scoped>
.selection-container {
    margin-top: 20px;

    & .drivers-selection {
        margin-top: 10px;

        & > select {
            border: 2px solid black;
            border-radius: 5px;
        }
    }

    & .busses-selection {
        margin-top: 10px;
    }

    & > button {
        cursor: pointer;
        margin-top: 20px;        
    }

    & > button:hover {
        background-color: rgb(57, 57, 57);
        color: #fff;
    }
}
</style>
