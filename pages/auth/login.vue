<template>
  <v-col sm="8">
    <h2 class="text-h2 mt-10 mb-5" style="font-weight: 400">Login</h2>
    <p>
      Welcome back! Please login to your <br />
      account.
    </p>
    <v-form>
      <div>
        <label for="email">Email</label>
        <v-text-field
          v-model="first"
          outlined
          placeholder="example@company.com"
        ></v-text-field>
      </div>
      <div>
        <label for="password">Password</label>
        <v-text-field
          v-model="first"
          type="password"
          placeholder="***********"
          outlined
        ></v-text-field>
      </div>
      <div class="d-flex align-center mb-3">
        <v-checkbox
          label="Remember me"
          class="ma-0 rm-check-m"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-spacer></v-spacer>
        <nuxt-link class="ma-0 forget-password" to="/auth/forgetPassword"
          >Forget Password?</nuxt-link
        >
      </div>
      <v-btn color="primary" large type="submit" block>Login</v-btn>
    </v-form>
    <p class="ma-0 mt-5 mr-2">
      Already have an account?
      <nuxt-link class="forget-password" to="/auth/signup"
        >&nbsp;&nbsp;&nbsp;Signup</nuxt-link
      >
    </p>
  </v-col>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      first: '',
    }
  },
}
</script>
