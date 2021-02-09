<template>
  <v-col cols="8">
    <h3 class="text-h3 mt-16 mb-5" style="font-weight: 400">Password Reset</h3>
    <p>
      Enter your email address below
      <br />
      to reset your password
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
      <v-btn color="primary" large type="submit" block>Login</v-btn>
      <p class="ma-0 mt-5">
        Remember your password?<nuxt-link class="forget-password" to="/login">
          Log in</nuxt-link
        >
      </p>
    </v-form>
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
