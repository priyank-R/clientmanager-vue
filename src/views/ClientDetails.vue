<template>
<div>
  <h1>Client: {{client.name}}</h1>
  <h2>Details: </h2>
</div>
</template>

<script>
export default {
    data: function(){
        return {
            name: 'Random Name',
            email:null,
            company:null,
            client:  null
        }
    },
    created(){
        const client = this.$store.getters.getClientById(this.$route.params.clientId)
        if(client){
            this.client = client
        }else{
            //fetch the client data from the api, check for the client
        }
    }
}
</script>

<style>

</style>