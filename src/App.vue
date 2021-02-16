<template>
  <div id="app">
  
    <navbar id="" />
    <hr />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/addclient">+ Client</router-link> |
      <router-link to="/clientlist">All Clients</router-link> |
      <router-link to="/login" v-if="getToken==null">Login |</router-link> 
      <router-link to="/logout" v-if="getToken!=null">Logout |</router-link>
      <router-link to="/signup">Sign Up</router-link>
      
    </div> -->
    
     <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from './components/Navbar'
export default {
  components:{Navbar},
  computed: {
    ...mapGetters(['getToken'])
  } ,
  methods: {
    reloadPage(){
      console.log('reload page called ')
      window.history.go()
    }
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:1%;
  
}

#nav {
  padding: 30px;
  background-color: rgb(248, 248, 248);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
