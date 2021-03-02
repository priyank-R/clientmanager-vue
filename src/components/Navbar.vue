<template>
  <b-navbar toggleable="lg" class="ml-auto" type="dark" variant="dark">
    <b-navbar-brand to="/" href="#">Client Manager </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/signup"><b-icon-pencil-square /> Sign Up</b-nav-item>
        <b-nav-item v-if="this.loggedIn" to="/addclient"
          ><b-icon-person-plus-fill /> Client</b-nav-item
        >
        <b-nav-item  v-if="this.loggedIn" to="/clientlist"
          ><b-icon-card-list /> Clients</b-nav-item
        >
        <b-nav-item to="/login"><b-icon-box-arrow-in-right /> Login</b-nav-item>
        <b-nav-item v-if="this.loggedIn" to="/logout"
          ><b-icon-door-open-fill /> Logout
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import store from '../store'
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    isLoggedIn() {
      const token = this.getToken();
      if (token) {
        //verify that the token is valid
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    ...mapGetters(["getToken"]),
    token(){
        return store.state.token
    }
  },
  watch:  {
      token(newVal, oldVal){
          console.log('token watcher invoked: vals ',oldVal,newVal)
          this.loggedIn = this.isLoggedIn()
      }
  },
  mounted() {
    this.loggedIn = this.isLoggedIn();
  },
};
</script>

<style></style>
