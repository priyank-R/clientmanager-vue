import {axios,getAxiosInstance} from './config'

const createUser = async (formData)=>{ 
        return axios.post('/user/signup', {
            ...formData
        },{timeout: 1000})
        .then((response)=>{
            return response
        })
        .catch(e=>{
            if(e.response){
               return e.response
            }else if(err.request){
                throw new Error('No Response received from  the server !')
            }else{
                console.log('totally else',e)
            }
            return
        })
    }

const loginUser = async (formData)=>{
   return axios.post('/user/signin',{
        ...formData
    },{timeout: 1000})
    .then((res)=>{
        return res.data
    })
    .catch(e=>{
        if(e.response){
            return e.response.data
        }else if(e.request){
            throw new Error('No response received from server !')
        }else{
            console.log('Totally else',e)
        }
    })
}

const getUser = async(token)=>{
    return axios.get()
}

const addNewClient = async(formData,token)=>{
    console.log('formdata: ',formData, ' token: ',token)
    return axios.post('/user/addclient',{...formData})
    .then((res)=>{
        return res.data
    }).catch(e=>{
        if(e.response){
            return e.response.data
        }else if(e.request){
            throw new Error('No response received from the server !')
        }else{
            console.log("totally else",e)
        }
    })
}

const getClients = async () => {
    const instance = getAxiosInstance()
    return instance.get("/user/getclients").then(res=>{
        return res.data
    }).catch(e=>{
        if(e.response){
            console.log('E.REPSONSE IS ',e.response)
            return e.response.data
        }else if(e.request){
            console.log(e.request)
            throw new Error('No response received from the server !')
        }else{
            console.log("totally else",e)
        }
    })
}

export  {
    createUser,
    loginUser,
    addNewClient,
    getClients,
    getUser
}