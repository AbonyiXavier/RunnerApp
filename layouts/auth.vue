<template>
  <!-- eslint-disable -->
  <v-app>
    <v-main style="height: 100vh">
      <v-container class="fill-height py-0" fluid>
        <v-row class="fill-height">
          <v-col>
            <img
              class="ml-12 mt-5"
              src="~/assets/images/logo.png"
              width="200px;"
            />
            <v-row class="mx-0" justify="center">
              <nuxt />
            </v-row>
          </v-col>
          <v-col
            class="hero-image d-none d-md-block"
            :style="`background-image: url(${bg})`"
          >
            <div
              class="d-flex justify-center align-center"
              style="height: 600px"
            >
              <div
                v-html="content"
                class="white--text font-weight-medium"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import bg from '~/assets/images/bg.png'
export default {
  data() {
    return {}
  },
  computed: {
    bg() {
      return bg
    },
    inProgress() {
      return this.$store.state.inProgress
    },
    content() {
      if (this.inProgress) {
        return '<h1 class="text-h1">Awesome!</h1><h2 text-h2" style="font-size: 2rem">Your Account is being created</h2><p>One last step.</p>'
      }
      switch (this.$route.path) {
        case '/auth/forgetPassword':
          return '<h2 class="text-h1 white--text font-weight-medium">Forgot <br />Password?</h2>'
        case '/auth/signup':
          return '<h2 class="text-h1 white--text font-weight-medium">Get <br />Started!</h2>'
        default:
          return '<h2 class="text-h1 white--text font-weight-medium">Welcome <br />Back</h2>'
      }
    },
  },
}
</script>
<style>
a {
  text-decoration: none;
}
.hero-image,
.mdi-n-flag {
  /*  */
  /* The image used */
  font-weight: 800;
  background-color: #cccccc; /* Used if the image is unavailable */
  min-height: 100vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.rm-check-m .v-input__slot {
  margin-bottom: 0;
}
.forget-password {
  color: #1976d2;
}
</style>
