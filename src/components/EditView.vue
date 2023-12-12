<template>
    <div class="editor-container">
        <label
            >{{ labelFirst }}
            <input v-if="getURLDrivers || getParamsDriverId" v-model="driverData.name" type="text" />
            <input v-else v-model="busData.licensePlate" type="text" />
        </label>
        <label
            >{{ labelSecond }}
            <input v-if="getURLDrivers || getParamsDriverId" v-model="driverData.exp" type="number" />
            <input v-else v-model="busData.seats" type="text" />
        </label>
        <v-btn density="default" variant="outlined" @click="onBtnClick">{{ btnText }}</v-btn>
        <v-btn density="default" variant="outlined" @click="onCancelClick">Cancel</v-btn>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'EditorView',

    data() {
        return {
            driverData: {},
            busData: {},
        }
    },

    computed: {
        ...mapGetters('drivers', ['getDriverById']),
        ...mapGetters('busses', ['getBusById']),
        getURLDrivers() {
            return this.$route.path === '/drivers/config'
        },
        getParamsDriverId() {
            return this.$route.params.driverId
        },
        getParamsBusId() {
            return this.$route.params.busId
        },
        labelFirst() {
            return this.getURLDrivers || this.getParamsDriverId ? 'Name:' : 'License plates:'
        },
        labelSecond() {
            return this.getURLDrivers || this.getParamsDriverId ? 'Exp:' : 'Seats:'
        },
        btnText() {
            return !(this.getParamsDriverId || this.getParamsBusId) ? 'Create' : 'Save'
        },
    },

    created() {
        if (this.getParamsDriverId) this.driverData = { ...this.getDriverById(this.$route.params.driverId) }
        else this.busData = { ...this.getBusById(this.$route.params.busId) }
    },

    methods: {
        ...mapActions('drivers', ['addDriver', 'updateDriver']),
        ...mapActions('busses', ['addBus', 'updateBus']),
        getRouter() {
            if (this.getURLDrivers || this.getParamsDriverId)
                this.$router.push({
                    name: 'drivers',
                })
            else
                this.$router.push({
                    name: 'busses',
                })
        },
        onBtnClick() {
            if (this.getParamsDriverId) this.updateDriver({ itemId: this.driverData.id, data: this.driverData })
            else if (this.getParamsBusId) this.updateBus({ itemId: this.busData.id, data: this.busData })
            else if (this.getURLDrivers) this.addDriver(this.driverData)
            else this.addBus(this.busData)

            this.getRouter()
        },
        onCancelClick() {
            this.getRouter()
        },
    },
}
</script>
<style lang="scss" scoped>
.editor-container {
    max-width: 300px;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    & > button {
        margin-top: 20px;
        cursor: pointer;
    }
    & > button:hover {
        background-color: rgb(57, 57, 57);
        color: #fff;
    }

    & input {
        border: 2px solid black;
        border-radius: 7px;
        padding-left: 5px;
    }
}
</style>
