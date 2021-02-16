<template>
<div>
    <authorized-view />
    <h1>All clients</h1>
    <b-container>
        <b-table striped hover :busy="isBusy" responsive="md" :fields="fields" :items="$store.getters.getClients">
            <template #table-busy>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong> Loading...</strong>
                </div>
            </template>
            <template #cell(addService)="row">
                <router-link :to="'/addservices/' + row.item.id">
                    <b-icon-person-plus />
                </router-link>
            </template>
            <template #cell(email)="row">
                {{ row.item.info.email }}

            </template>
            <template #cell(company)="row">
                {{ row.item.info.company ? row.item.info.company :  '-'}}
            </template>

            <template #cell(domain)="row">
                {{ row.item.info.domain ? row.item.info.domain :  '-'}}
            </template>
            <template #cell(viewServices)> All </template>
        </b-table>
    </b-container>
</div>
</template>

<script>
import Table from "../components/Table.vue";
// import {
//     store
// } from "../store";
import AuthorizedView from '../components/AuthorizedView.vue'
import {
    getClients
} from "../api/endpoints";
import {
    mapGetters
} from "vuex";

export default {
    components: {
        Table,
        AuthorizedView
    },
    data: function () {
        return {
            isBusy: true,
            fields: [{
                    key: "name",
                    label: "Name",
                },
                {
                    key: "email",
                    label: "Email",
                },
                {
                    key: "domain",
                    label: "Domain",
                },
                {
                    key: "company",
                    label: "Company",
                },
                {
                    key: "addService",
                    label: "Add Service",
                },
                {
                    key: "viewServices",
                    label: "All Services",
                },
            ],
        };
    },
    computed: {
        ...mapGetters({
            clients: "getClients",
        }),
    },
    methods: {
        addService(clientId) {
            this.$router.push("AddService");
        },
        getClients: async function () {
            try {
                const response = await getClients();
                return response;
            } catch (e) {
                console.log("error captured inside client list: ", e);
            }
        },
    },
    async created() {
        const data = this.getClients().then((response) => {
            if (response.status == "success") {
                this.$store.commit("setClients", response.data.clients);
                this.isBusy = false;
            }
        });
    },
};
</script>

<style scoped>
tr:hover {
    background-color: rgb(219, 219, 219);
}
</style>
