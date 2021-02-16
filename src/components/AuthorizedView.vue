<template>
  
</template>

<script>
export default {
    beforeCreate(){
        this.$store.getters.getToken()!==null ? null : 
        this.$router.push('/login')
    }
}
</script>

<style>

</style>