<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="formSubmit">
      <input
        class="input"
        type="email"
        placeholder="email"
        v-model.trim="email"
      /><br />
      <input
        class="input"
        type="password"
        placeholder="password"
        v-model="password"
      /><br />
      <label v-if="success == false">Email or Password incorrect </label><br />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { loginUser } from "../api/endpoints";
import { state, mapGetters } from "vuex";
export default {
  data: function () {
    return {
      email: "",
      password: "",
      success: undefined,
    };
  },
  computed: {
    ...mapGetters(["getToken"]), //all the store getters
  },
  methods: {
    formSubmit: async function (e) {
      let myEmail = this.email;
      let myPass = this.password;
      const response = await loginUser({
        username: myEmail,
        password: myPass,
      });
      if (response?.status == "fail") {
        this.success = false;
      } else if (response?.status == "success") {
        this.success = true;
        this.$store.commit("setToken", response.data.token);
        this.$router.push("/about");
      } else {
        //server error
      }
    },
  },
  created() {
    this.getToken() != null ? this.$router.push("/about") : null;
  },
  updated() {
    this.getToken() !== null ? this.$router.push("/about") : null;
  },
};
</script>

<style>
.input {
  margin-bottom: 10px;
}
</style>