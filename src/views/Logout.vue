<template>
<div>Logout page</div>
</template>

<script>
export default {
    created() {
        // localStorage.removeItem('token')
        this.$store.commit('setToken', null)

    }
}
</script>

<style>

</style>
