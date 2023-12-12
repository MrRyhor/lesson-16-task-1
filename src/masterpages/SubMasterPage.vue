<template>
    <div>
        <slot></slot>
        <div class="btn-container">
            <v-btn density="default" variant="outlined" @click="onAddBtnClick">{{ btnText }}</v-btn>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SubMasterPage',

    computed: {
        getPath() {
            return this.$route.path === '/drivers'
        },
        btnText() {
            return this.getPath ? 'Add driver' : 'Add bus'
        },
    },

    methods: {
        onAddBtnClick() {
            if (this.getPath)
                this.$router.push({
                    name: 'drivers-config',
                })
            else
                this.$router.push({
                    name: 'busses-config',
                })
        },
    },
}
</script>
<style lang="scss" scoped>
.btn-container {
    margin-top: 20px;
     & > button:hover {
        background-color: rgb(57, 57, 57);
        color: #fff;
    }
}
</style>
