<template>
    <div>
         <nav>
            <router-link to="/">Main</router-link> | <router-link to="/drivers">Drivers</router-link> |
            <router-link to="/busses">Busses</router-link> | <router-link to="/asignments">Asignments</router-link> |
            <router-link to="/contacts">Contacts</router-link>
        </nav>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "MainMasterPage",
}
</script>
<style lang="scss" scoped>
    
</style>