import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    clients: []
  },
  mutations: { //The only way to change the vuex state is by mutations
    setToken(state,token){
      state.token = token
    },
    setClients(state,clients){
      state.clients = clients
    }
  },
  actions: {
  },
  modules: {
  },
  getters : {
    getToken({token}){
      return token
    },
    getClients({clients}){
      return clients
    },
    getClientById:({clients})=>
    (clientId)=>{
     const client  =  clients.filter((client)=>{
        if(client.id == clientId){
          return true
        }
      })
      console.log(client.length)
      return client.length > 0 ? client[0] : null
    }
  }
})
