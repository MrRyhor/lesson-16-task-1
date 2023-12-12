<template>
    <main-master-page>
        <div class="contacts">Our contacts</div>
    </main-master-page>
</template>
<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
export default {
    name: 'ContactsView',

    components: {
        MainMasterPage,
    },
}
</script>
<style lang="scss" scoped>
.contacts {
    padding-left: 100px;
}
</style>