<template>
  <v-app>
    <v-main style="height: 100vh">
      <v-container class="fill-height pa-0" fluid>
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
            class="hero-image d-flex justify-center align-center"
            :style="`background-image: url(${bg})`"
          >
            <h2
              class="text-h1 white--text font-weight-medium"
              v-html="content"
            ></h2>
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
    content() {
      if (this.$route.path === '/auth/forgetPassword') {
        return 'Forgot <br />Password?'
      }
      return 'welcome <br />Back'
    },
  },
}
</script>
<style>
a {
  text-decoration: none;
}
.hero-image {
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
