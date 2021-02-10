<template>
  <v-col
    sm="8"
    style="height: 500px"
    class="d-flex justify-cemter align-center"
  >
    <div v-if="isSent" style="width: 100%">
      <h3 class="text-h3 mb-5" style="font-weight: 400">Link Sent!</h3>
      <p>
        A password reset link has been sent to your registered email. Kindly go
        to your email to complete this action.
      </p>
    </div>
    <div v-else style="width: 100%">
      <h3 class="text-h3" style="font-weight: 400">Password Reset</h3>
      <p>
        Enter your email address below
        <br />
        to reset your password
      </p>

      <v-form v-if="!isSent">
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
          Remember your password?
          <nuxt-link class="forget-password" to="/auth/login">
            Log in
          </nuxt-link>
        </p>
      </v-form>
    </div>
  </v-col>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      first: '',
      isSent: false,
    }
  },
}
</script>
