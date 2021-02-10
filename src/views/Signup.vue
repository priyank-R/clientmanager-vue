<template>
<div>
  <h1><u>Sign Up ! {{success ? '✓' : ''}} </u></h1>
  <br />
  <b-container fluid="sm" >
  <form @submit.prevent="submitForm">
     
      <input type="email" name="email" v-model.trim="email" placeholder="Email*" @input="success=false" 
      v-bind:class="($v.email.$invalid && success==false) ? 'error' : 'noerror'" />
      <br />
      <input type="text" name="name" v-model.trim="name" placeholder="Full Name*"
      v-bind:class="$v.name.$invalid && success==false ? 'error' : 'noerror'" />
       <br />
      <input type="password" name="password" v-model="password" placeholder="Password*"
      v-bind:class="$v.password.$invalid && success==false ? 'error' : 'noerror'" />
       <br />
      <input type="password" name="repassword" v-model="repassword" placeholder="Confirm password*"
      v-bind:class="$v.repassword.$invalid && success==false ? 'error' : 'noerror'" />
       <br />
      <input type="number" name="phone" v-model="phone" placeholder="Phone / Contact* "
      v-bind:class="$v.phone.$invalid && success==false ? 'error' : 'noerror'"  />
       <br />
      <input type="text" name="company" v-model="company" placeholder="Company"
      v-bind:class="$v.company.$invalid && success==false ? 'error' : 'noerror'" />
       <br />
      <div>
        <label v-bind:class="$v.gender.$invalid && success==false ? 'error' : 'noerror'">Gender*</label><br />
     <input type="radio" id="one" value="Male" v-model="gender" /> Male |
     <input type="radio" id="two" value="Female" v-model="gender" /> Female
     </div>
     <div>
         <br />
     <b-button type="submit" variant="primary" >Submit </b-button>
    </div>
  </form>
  </b-container>
</div>
</template>

<script>
import {required,email,sameAs} from 'vuelidate/lib/validators'
import {createUser} from '../api/endpoints'
export default {
    data: function(){
        return {
            email: "",
            name: "",
            password: "",
            repassword: "",
            phone: "",
            company: "",
            gender: "",
            success: false
        }
    },
   methods: {
       submitForm: async function(e){
           console.log(e)
           if(this.$v.$invalid){
              return alert("Clear all errors before submitting !")
           }
           
         const response = await createUser({
               name: this.name,
               email: this.email,
               password: this.password,
               phone: this.phone,
               company: this.company
           })
           console.log('repsonse is: ',response )
           if(response.data.status === "success"){
               this.success = true
               e.target.reset()
           }else if(response.data.status === "fail"){
               alert("Email already exists !")
           }else{
               alert("Form not submitted !")
           }
       }
   },
    validations:{
        email:{
            email,
            required
        },
        phone:{
            required
        },
        name: {
            required
        },
        password: {
            required,

        },
        repassword:{
            required,
            sameAsPassword: sameAs('password')
        },
        company: {

        },
        gender: {
            required
        }


    }
}
</script>

<style scoped>
input {
    margin-bottom: 10px;
}
label {
    justify-content: left;
}
.error {
    border-color: red;
    color: red;
}
.noerror {
    border-color: green;
    
}
</style>