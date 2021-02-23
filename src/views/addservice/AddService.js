import {required,minValue} from 'vuelidate/lib/validators'
import {addNewService} from '../../api/endpoints'
import {mapGetters} from 'vuex'
import breadCrumb from '../../components/addService/Breadcrumb.vue'



export default {
  name: "add-service",
  components:{
    breadCrumb
  },
  data: function(){
      return {
        domain:null,
        rate:null,
        expiry:null,
        serviceType:null
      }
  },
  methods: {
      handleSubmit: async function (event){
        if(!this.$v.$invalid){
          console.log('form submitted !',event)
          const response = await addNewService({
           client_id:this.$route.params.clientId,
           service_type: this.serviceType,
           service_url:this.domain,
           service_rate:this.rate,
           service_expiry:this.expiry
          })

          console.log(response)
          if(response.status == "success"){
            
            alert('Service Successfully Added')
          }
         
        }else{
          console.log('Form Invalid !',this.$v)
        }
          
      }
  },
  computed:{
    ...mapGetters(['getClientById'])
  },
  updated() {
    console.log(this.$v.domain.$dirty);
  },
  created() {
    console.log(this.$v);
  },
  validations: {
      domain:{
       required
      },
      rate:{
       required
      },
      expiry:{
        required
      },
      serviceType:{
       required
      }
  }
};
