<template>
<b-container>
    <authorized-view />
    <b-row class="justify-content-center">
        <b-col cols="4" align="center">
            <h3><u>Add new client: </u> </h3>
            <form v-on:submit.prevent="submit">

                <input type="text" name="name" v-model="name" placeholder="Name" style="margin-bottom: 10px" />
                <div class="error" style="color: red" v-if="!($v.name.required)">Field is required</div>

                <input type="email" name="email" v-model="email" placeholder="Email" style="margin-bottom: 10px" />
                <div class="error" style="color: red" v-if="!($v.email.required)">Required</div>
                <div class="error" style="color: red" v-if="!($v.email.email)">Valid email</div>

                <input type="text" name="domain" @blur="validUrl()" v-model="domain" placeholder="Domain name" style="margin-bottom: 10px" />
                <div class="error" style="color: red" v-if="!($v.domain.required)">Required</div>
                <div class="error" style="color: red" v-if="!($v.domain.url)">Valid domain</div>

                <input type="text" name="phone" v-model="phone" placeholder="Phone" style="margin-bottom: 10px" />
                <div class="error" style="color: red" v-if="!($v.phone.required)">Required</div>
                <div class="error" style="color: red" v-if="!($v.phone.numeric)">Valid phone</div>

                <input type="text" name="company" v-model="company" placeholder="Company name" style="margin-bottom: 10px" /><br>
                <input type="submit" class="submit-button" />
                <p v-show="submit_success">Submitted Successfully !</p>
            </form>

        </b-col>
    </b-row>
</b-container>
</template>

<script>
import {
    required,
    email,
    url,
    numeric
} from 'vuelidate/lib/validators'
import {
    mapGetters
} from 'vuex'
import {
    addNewClient
} from '../api/endpoints'
import AuthorizedView from '../components/AuthorizedView.vue'
export default {
    components: {
        AuthorizedView
    },
    data: function () {
        return {
            name: "",
            email: "",
            domain: "",
            phone: "",
            company: "",
            submit_success: false
        }
    },
    created() {
        this.getToken ? null : this.$router.push('/login')
    },
    computed: {
        ...mapGetters(['getToken'])
    },
    updated() {
        console.log('updated hook invoked ')
        this.getToken ? null : this.$router.push('/login')
    },
    methods: {
        submit: async function () {

            if (this.$v.$invalid) {
                this.$v.$touch()
            } else {
                this.submit_success = true
                //call to api !
                const response = await addNewClient({
                    client_name: this.name,
                    client_email: this.email,
                    client_phone: this.phone,
                    client_company: this.company
                }, this.getToken)
                //redirect to the client list page !
                this.$router.push('clientlist')

            }
        },
        validUrl: function () {
            if (this.domain.search('http://') == -1 && this.domain.search('https://') == -1) {
                this.domain = "http://" + this.domain
            }
        }
    },
    validations: {
        name: {
            required
        },
        phone: {
            required,
            numeric
        },
        email: {
            required,
            email
        },
        domain: {
            required,
            url
        },
    }
}
</script>

<style scoped>
.submit-button {
    background-color: gold;
}
</style>
