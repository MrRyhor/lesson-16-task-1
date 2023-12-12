<template>
    <div class="item-container">
        <slot name="data-container">
            <div class="title">{{ data.name }}</div>
            <div class="sub-title">{{ data.exp }}</div>
        </slot>
        <div class="icons-container">
            <div class="icon-pencil">
                <font-awesome-icon :icon="['far', 'pen-to-square']" @click = "onEditclick"/>
            </div>
            <div class="icon-trash">
                <font-awesome-icon :icon="['far', 'trash-can']" @click="onTrashClick" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'ItemView',

    props: {
        data: {
            type: Object,
            required: true,
        },
    },

    computed: {
        getURLDrivers() {
            return this.$route.path === '/drivers'
        },
    },

    methods: {
        ...mapActions('drivers', ['deleteDriver']),
        ...mapActions('busses', ['deleteBus']),

        onTrashClick() {
            if (this.getURLDrivers) this.deleteDriver(this.data.id)
            else this.deleteBus(this.data.id)
        },
        onEditclick() {
            if (this.getURLDrivers)
                this.$router.push({
                    name: 'drivers-config',
                    params: {
                        driverId: this.data.id,
                    },
                })
            else
                this.$router.push({
                    name: 'busses-config',
                    params: {
                        busId: this.data.id,
                    },
                })
        },
    },
}
</script>
<style lang="scss" scoped>
.item-container {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .icons-container {
        display: flex;
        align-items: center;
        gap: 20px;

        & .icon-pencil,
        .icon-trash {
            cursor: pointer;
        }
        & .icon-pencil:hover {
            color: rgb(1, 207, 1);
        }

        & .icon-trash:hover {
            color: red;
        }
    }
    & .title {
        flex-grow: 1;
    }
    & .sub-title {
        flex-grow: 1;
    }
}
</style>
