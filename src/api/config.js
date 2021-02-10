const Axios = require('axios')
import store from '../store'


const getAxiosInstance = ()=>{
    // console.log("token inside the instance method: "+store.getters.getToken)
    return Axios.create({
        baseURL: 'http://localhost:8082/api',
        headers: {
            'Authorization': `Bearer ${store.getters.getToken}`
        }
    })
}
const axios = Axios.create({
    baseURL: 'http://localhost:8082/api',
    headers: {
        'Authorization': `Bearer ${store.getters.getToken}`
    }
})

export {
    axios,
    getAxiosInstance
};