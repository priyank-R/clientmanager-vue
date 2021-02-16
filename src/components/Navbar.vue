<template>
  <b-navbar toggleable="lg" class="ml-auto" type="dark" variant="dark">
      <b-navbar-brand to="/" href="#">Client Manager </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
               <b-nav-item to="/signup"><b-icon-pencil-square /> Sign Up</b-nav-item>
              <b-nav-item to="/addclient"><b-icon-person-plus-fill /> Client</b-nav-item>
              <b-nav-item to="/clientlist"><b-icon-card-list /> Clients</b-nav-item>
              <b-nav-item to="/login"><b-icon-box-arrow-in-right /> Login</b-nav-item>
              <b-nav-item to="/logout"><b-icon-door-open-fill /> Logout </b-nav-item>
             
          </b-navbar-nav>
      </b-collapse>

  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>