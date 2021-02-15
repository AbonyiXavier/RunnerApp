<template>
  <v-col sm="8" class="pb-16">
    <template v-if="!awaitVerify">
      <h3 class="text-h3 mt-16 mb-5" style="font-weight: 400">
        Create an Account
      </h3>
      <ValidationObserver ref="observer">
        <v-form @submit.prevent="onSubmit">
          <v-row no-gutters>
            <v-col cols="12" md="6" class="pr-md-1 mb-5">
              <ValidationProvider
                v-slot="{ errors }"
                name="Firstname"
                rules="required"
              >
                <label for="firstName">First Name</label>
                <v-text-field
                  v-model="firstName"
                  outlined
                  placeholder="John"
                  hide-details
                ></v-text-field>
                <small class="red--text">{{ errors[0] }}</small>
              </ValidationProvider>
            </v-col>

            <v-col cols="12" md="6" class="pl-md-1 mb-5">
              <ValidationProvider
                v-slot="{ errors }"
                name="Lastname"
                rules="required"
              >
                <label for="lastName">Last Name</label>
                <v-text-field
                  v-model="lastName"
                  outlined
                  placeholder="Doe"
                  hide-details
                ></v-text-field>
                <small class="red--text">{{ errors[0] }}</small>
              </ValidationProvider>
            </v-col>
          </v-row>
          <div class="mb-5">
            <ValidationProvider
              v-slot="{ errors }"
              name="phone number"
              rules="required"
            >
              <label for="phoneNumber">Phone Number</label>
              <v-select
                v-model="phoneNumber"
                :items="['08022344567']"
                placeholder="08031234567"
                outlined
                append-icon=""
                hide-details
              >
                <template v-slot:prepend-inner>
                  <img
                    width="24"
                    height="24"
                    src="~/assets/images/flag.svg"
                    alt=""
                  />
                  <div class="v-input__icon v-input__icon--prepend-inner">
                    <i
                      aria-hidden="true"
                      class="v-icon notranslate mdi mdi-menu-down theme--light"
                    ></i>
                  </div>
                </template>
              </v-select>
              <small class="red--text">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="mb-5">
            <ValidationProvider
              v-slot="{ errors }"
              name="work email"
              rules="required|email"
            >
              <label for="workEmail">Work Email Address</label>
              <v-text-field
                v-model="workEmail"
                type="email"
                placeholder="example@company.com"
                outlined
                hide-details
              ></v-text-field>
              <small class="red--text">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="mb-5">
            <ValidationProvider
              v-slot="{ errors }"
              name="Reference Code"
              rules="required"
            >
              <label for="reference Code">Reference Code</label>
              <v-text-field
                v-model="referenceCode"
                placeholder="789JE59"
                outlined
                hide-details
              ></v-text-field>
              <small class="red--text">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <p>
            By clicking on Continue, you accept our
            <nuxt-link to="#" class="forget-password"
              >Terms of Service</nuxt-link
            >
            and
            <nuxt-link to="#" class="forget-password">Privacy Policy</nuxt-link>
          </p>
          <v-btn color="primary" type="submit" large block>Continue</v-btn>
        </v-form>
      </ValidationObserver>
      <p class="ma-0 mt-5 mr-2">
        Already have an account?&nbsp;&nbsp;&nbsp;
        <nuxt-link class="forget-password" to="/auth/login">Log in</nuxt-link>
      </p>
    </template>
    <template v-else>
      <h3 class="text-h3 mt-16 mb-5" style="font-weight: 400">Verification</h3>
      <p>A verification code has been sent to your email</p>
      <div style="position: relative; height: 76px" class="mb-3">
        <PincodeInput v-model="code" :length="length" />
        <img
          v-if="toVerify"
          :src="pinImg"
          alt="error"
          style="position: absolute; right: -30px; top: 40%"
        />
      </div>
      <span v-if="isError && toVerify" class="red--text"
        >Incorrect or expired verification code.</span
      >
      <v-btn
        large
        :class="['mt-3', `${!isError ? 'hide_pincode_btn' : ''}`]"
        block
        color="primary"
        @click="submitCode"
        >Verify</v-btn
      >
      <p v-if="!awaitVerify || isError" class="ma-0 mt-5 mr-2">
        Didn’t get your code click here?&nbsp;&nbsp;&nbsp;
        <span class="forget-password code-btn" @click="doSomething"
          >Click here</span
        >
      </p>
      <ValidationObserver v-if="!isError" ref="password">
        <v-form @submit.prevent="onSubmitPassword">
          <div class="mb-5">
            <ValidationProvider
              v-slot="{ errors }"
              name="password"
              rules="required|min:6"
            >
              <label for="password">Password</label>
              <v-text-field
                v-model="password"
                placeholder="Password"
                outlined
                hide-details
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <small class="red--text">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="mb-5">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|password:@password"
              name="confirm password"
            >
              <label for="confirmPassword">Confirm Password</label>
              <v-text-field
                v-model="confirmPassword"
                placeholder="Confirm Password"
                outlined
                hide-details
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showConfirmPassword ? 'text' : 'password'"
                @click:append="showConfirmPassword = !showConfirmPassword"
              ></v-text-field>
              <small class="red--text">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <v-btn color="primary" type="submit" large block>Submit</v-btn>
        </v-form>
      </ValidationObserver>
    </template>
  </v-col>
</template>

<script>
import PincodeInput from 'vue-pincode-input'
import errorImg from '@/assets/images/error.png'
import successImg from '@/assets/images/check-mark.png'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match',
})
export default {
  layout: 'auth',
  components: {
    PincodeInput,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      workEmail: '',
      referenceCode: '',
      code: '',
      length: 6,
      awaitVerify: false,
      isError: true,
      showPassword: false,
      password: '',
      confirmPassword: '',
      showConfirmPassword: false,
      toVerify: false,
    }
  },
  computed: {
    pinImg() {
      if (this.isError) {
        return errorImg
      }
      return successImg
    },
  },
  methods: {
    onSubmit() {
      this.$refs.observer.validate().then((success) => {
        if (!success) {
          return
        }

        console.log('Form has been submitted!')
        this.awaitVerify = true
        this.$store.commit('IN_PROGRESS_ACTIVE')

        // Resetting Values
        this.firstName = this.lastName = this.email = this.phoneNumber = this.workEmail = this.referenceCode =
          ''

        // Wait until the models are updated in the UI
        // this.$nextTick(() => {
        this.$refs.observer.reset()
        // })
      })
    },
    onSubmitPassword() {
      this.$refs.password.validate().then((success) => {
        if (!success) {
          return
        }

        console.log('Form has been submitted!')

        // Resetting Values
        this.password = this.confirmPassword = ''

        // Wait until the models are updated in the UI
        // this.$nextTick(() => {
        this.$refs.password.reset()
        // })
      })
    },
    doSomething() {
      console.log('hey')
    },
    submitCode() {
      if (this.code.length !== 6) {
        return
      }
      const success = true
      this.toVerify = true
      if (success) {
        this.isError = false
      }
    },
    // submitForm() {
    //   this.awaitVerify = true
    //   this.$store.commit('IN_PROGRESS_ACTIVE')
    // },
  },
}
</script>
<style>
div.vue-pincode-input-wrapper {
  display: flex;
  justify-content: space-between;
}
input.vue-pincode-input {
  padding: 10px 16px;
  max-width: 60px;
  font-size: 2rem;
  border: 1px solid #b7bdcd;
  box-shadow: none;
}
input.vue-pincode-input:focus {
  border: 1px solid #1976d2;
  outline: 1px solid #1976d2;
}
/* input.vue-pincode-input:not(:last-child) {
  margin-right: 10px;
} */
.code-btn:hover {
  cursor: pointer;
}
.hide_pincode_btn {
  visibility: hidden;
}
</style>
