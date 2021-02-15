<template>
  <v-col sm="8">
    <h2 class="text-h2 mt-10 mb-5" style="font-weight: 400">Login</h2>
    <p>
      Welcome back! Please login to your <br />
      account.
    </p>
    <ValidationObserver ref="loginForm">
      <v-form @submit.prevent="onSubmit">
        <div class="mb-5">
          <ValidationProvider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <label for="email">Email</label>
            <v-text-field
              v-model="email"
              type="email"
              hide-details
              outlined
              placeholder="example@company.com"
            ></v-text-field>
            <small class="red--text">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
        <div class="mb-5">
          <ValidationProvider
            v-slot="{ errors }"
            name="Password"
            rules="required"
          >
            <label for="password">Password</label>
            <v-text-field
              v-model="password"
              type="password"
              hide-details
              placeholder="***********"
              outlined
            ></v-text-field>
            <small class="red--text">{{ errors[0] }}</small>
          </ValidationProvider>
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
    </ValidationObserver>
    <p class="ma-0 mt-5 mr-2">
      Already have an account?
      <nuxt-link class="forget-password" to="/auth/signup"
        >&nbsp;&nbsp;&nbsp;Signup</nuxt-link
      >
    </p>
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
      password: '',
    }
  },
  methods: {
    onSubmit() {
      this.$refs.loginForm.validate().then((success) => {
        if (!success) {
          return
        }

        console.log('Form has been submitted!')
        // this.awaitVerify = true
        // this.$store.commit('IN_PROGRESS_ACTIVE')

        // Resetting Values
        this.email = this.password = ''

        // Wait until the models are updated in the UI
        // this.$nextTick(() => {
        this.$refs.loginForm.reset()
        // })
      })
    },
  },
}
</script>
