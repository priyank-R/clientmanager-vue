<template>
  
</template>

<script>
export default {
    created(){
        this.$store.getters.getToken ? null : 
        this.$router.push('/login')
    }
}
</script>

<style>

</style>