<template>
  <v-col sm="8">
    <template v-if="!awaitVerify">
      <h3 class="text-h3 mt-16 mb-5" style="font-weight: 400">
        Create an Account
      </h3>
      <v-form>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="pr-md-1">
            <label for="firstName">First Name</label>
            <v-text-field
              v-model="first"
              outlined
              placeholder="John"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="pl-md-1">
            <label for="lastName">Last Name</label>
            <v-text-field
              v-model="first"
              outlined
              placeholder="Doe"
            ></v-text-field>
          </v-col>
        </v-row>
        <div>
          <label for="phoneNumber">Phone Number</label>
          <v-select
            v-model="first"
            :items="[]"
            placeholder="08031234567"
            outlined
            append-icon=""
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
        </div>
        <div>
          <label for="workEmail">Work Email Address</label>
          <v-text-field
            v-model="first"
            placeholder="example@company.com"
            outlined
          ></v-text-field>
        </div>
        <div>
          <label for="reference Code">Reference Code</label>
          <v-text-field
            v-model="first"
            placeholder="789JE59"
            outlined
          ></v-text-field>
        </div>
        <p>
          By clicking on Continue, you accept our
          <nuxt-link to="#" class="forget-password">Terms of Service</nuxt-link>
          and
          <nuxt-link to="#" class="forget-password">Privacy Policy</nuxt-link>
        </p>
        <v-btn color="primary" large block @click="submitForm">Continue</v-btn>
      </v-form>
      <p class="ma-0 mt-5 mr-2">
        Already have an account?&nbsp;&nbsp;&nbsp;
        <nuxt-link class="forget-password" to="/auth/login">Log in</nuxt-link>
      </p>
    </template>
    <template v-else>
      <h3 class="text-h3 mt-16 mb-5" style="font-weight: 400">Verification</h3>
      <p>A verification code has been sent to your email</p>
      <div style="position: relative; height: 76px" class="mb-3">
        <PincodeInput v-model="code" :length="length" placeholder="0" />
        <img
          v-if="true"
          :src="pinImg"
          alt="error"
          style="position: absolute; right: -30px; top: 40%"
        />
      </div>
      <span class="red--text">Incorrect or expired verification code.</span>
      <v-btn large class="mt-3" block color="primary">Verify</v-btn>
      <p class="ma-0 mt-5 mr-2">
        Didn’t get your code click here?&nbsp;&nbsp;&nbsp;
        <span class="forget-password code-btn" @click="doSomething"
          >Click here</span
        >
      </p>
    </template>
  </v-col>
</template>

<script>
import PincodeInput from 'vue-pincode-input'
import errorImg from '@/assets/images/error.png'
import successImg from '@/assets/images/check-mark.png'
export default {
  layout: 'auth',
  components: {
    PincodeInput,
  },
  data() {
    return {
      first: '',
      code: '',
      length: 6,
      awaitVerify: false,
      isError: true,
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
    doSomething() {
      console.log('hey')
    },
    submitForm() {
      this.awaitVerify = true
      this.$store.commit('IN_PROGRESS_ACTIVE')
    },
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
  border: 1px solid;
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
</style>
