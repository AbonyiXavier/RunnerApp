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
      <ValidationObserver ref="forgetPasswordForm">
        <v-form v-if="!isSent" @submit.prevent="onSubmit">
          <div class="mb-5">
            <ValidationProvider
              v-slot="{ errors }"
              name="Email"
              rules="required|email"
            >
              <label for="email">Email</label>
              <v-text-field
                v-model="email"
                hide-details
                type="email"
                outlined
                placeholder="example@company.com"
              ></v-text-field>
              <small class="red--text">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <v-btn
            color="primary"
            large
            type="submit"
            class="text-capitalize"
            block
            >Reset Password</v-btn
          >
          <p class="ma-0 mt-5">
            Remember your password?
            <nuxt-link class="forget-password" to="/auth/login">
              Log in
            </nuxt-link>
          </p>
        </v-form>
      </ValidationObserver>
    </div>
  </v-col>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  layout: 'auth',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      email: '',
      isSent: false,
    }
  },
  methods: {
    onSubmit() {
      this.$refs.forgetPasswordForm.validate().then((success) => {
        if (!success) {
          return
        }

        console.log('Form has been submitted!')
        // this.awaitVerify = true
        // this.$store.commit('IN_PROGRESS_ACTIVE')
        this.isSent = true
        // Resetting Values
        this.email = ''

        // Wait until the models are updated in the UI
        // this.$nextTick(() => {
        this.$refs.forgetPasswordForm.reset()
        // })
      })
    },
  },
}
</script>
