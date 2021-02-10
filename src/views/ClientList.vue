<template>
<div>
<authorized-view />
    <h1>All clients </h1>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="4" align="center">
                <!-- <Table :table_data="table_data" :table_headers="table_headers" >
                    <template v-slot:property-3>
                        <p>Service</p>
                    </template>
                </Table> -->
                <table>
                    <tr >
                        <th v-for="item in table_headers" :key="item.name+'tableheaders'">{{item.name}}</th>
                    </tr>
                        <tr v-for="client in clients" :key="client.id+'tabledata'">
                            <td @click="$router.push('/clientdetails/'+client.id)">{{client.name}}</td>
                            <td @click="$router.push('/clientdetails/'+client.id)">{{client.info.email}}</td>
                            <td @click="$router.push('/clientdetails/'+client.id)">{{client.info.company ? client.info.company: "-"}}</td>
                            <td><button @click="$router.push('/addservice/'+client.id)">+</button></td> 
                        </tr>
                    </table>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import Table from '../components/Table.vue'
import AuthorizedView from '../components/AuthorizedView.vue'
import {getClients} from '../api/endpoints'
import {mapGetters} from 'vuex'
export default {
    components:{Table,AuthorizedView},
    data: function(){
       return {
            table_data: [
                {name:"abc",email: 'piyurupareliya@gmail.com',domain: 'abc.com',id:2},
                {name:"pqr",email: 'piyurupareliya@gmail.com',domain: 'abc.com',id:6,},
                {name:"xyz",email: 'piyurupareliya@gmail.com',domain: 'abc.com', id: 9},
                ],
                table_headers : [
                    {
                        name: "Name"
                    },
                    {
                        name: "Email"
                        },
                    {
                        name: "Company"
                        },
                    {
                        name: "Add Service",
                        custom: true
                    }
                ],                
        }
    },
    computed:{
        ...mapGetters({
            clients: 'getClients'
        })
    },
    methods:{
        addService(clientId){
            this.$router.push('AddService')
        },
        getClients: async function(){
            try{
                console.log('GET CLIENTS CALLED')
                const response = await getClients();
                console.log('response inside get client : ',response)
                return response;
            }catch(e){
                    console.log('error captured inside client list: ',e)
            }
            
        }
    },
    async created(){
        console.log('created hook called insde getclients')
        const data = this.getClients()
        .then(response=>{
            console.log('then invoked inside clientlist',response)
            if(response.status=="success"){
                    this.$store.commit('setClients',response.data.clients)
            }
        })
        
    }
    
}
</script>

<style scoped>
tr:hover{
    background-color: rgb(219, 219, 219);

}
</style>