<template>
    <main-master-page>
        <div class="main">Welcome to our fleet page!</div>
    </main-master-page>
</template>
<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
export default {
    name: 'MainView',

    components: {
        MainMasterPage,
    },
}
</script>
<style lang="scss" scoped>
.main {
    padding-left: 100px;
}
</style>
