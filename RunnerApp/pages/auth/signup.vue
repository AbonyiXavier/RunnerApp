<template>
  <div>
    <v-app>
      <v-layout class="justify-center">
        <v-flex xs12 sm12 md9 lg6 class="mt-6">
          <v-card elevation="10" class="pb-12 mx-auto" min-width="42vw">
            <v-container>
              <v-layout align-center justify-center>
                <v-flex xs12 sm8 md9>
                  <v-form class="pa-0">
                    <h1 class="mb-4 text-center">LOGO</h1>
                    <p class="text-center font-weight-bold">
                      Create an Account
                    </p>
                    <v-row
                      justify="center"
                      align="center"
                      cols="12"
                      md="6"
                      lg="2"
                    >
                      <template>
                        <v-col cols="12" md="12" sm="12" xs="12">
                          <div>
                            <v-row>
                              <v-col cols="12" sm="6">
                                <div class="mb-2">
                                  <label>First Name</label>
                                </div>
                                <div>
                                  <v-text-field
                                    v-model="name"
                                    required
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <div class="mb-2">
                                  <label>Last Name</label>
                                </div>
                                <div>
                                  <v-text-field
                                    v-model="last"
                                    required
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                            <!-- Mobile number and Email address -->
                            <v-row>
                              <v-col cols="12" sm="6">
                                <div class="mb-2">
                                  <label>Mobile Number</label>
                                </div>
                                <div>
                                  <v-text-field
                                    v-model="number"
                                    required
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <div class="mb-2">
                                  <label>Email Address</label>
                                </div>
                                <div>
                                  <v-text-field
                                    v-model="email"
                                    required
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                            <!-- checkbox -->
                            <v-checkbox v-model="checkbox" color="success">
                              <template v-slot:label>
                                <div>
                                  I agree to the
                                  <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                      <a
                                        target="_blank"
                                        class="text-color"
                                        href="http://vuetifyjs.com"
                                        @click.stop
                                        v-on="on"
                                      >
                                        Terms of Use
                                      </a>
                                    </template>
                                    Terms of Use
                                  </v-tooltip>
                                  and
                                  <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                      <a
                                        target="_blank"
                                        class="text-color"
                                        href="http://vuetifyjs.com"
                                        @click.stop
                                        v-on="on"
                                      >
                                        Privacy Policy
                                      </a>
                                    </template>
                                    Privacy Policy
                                  </v-tooltip>
                                </div>
                              </template>
                            </v-checkbox>

                            <div class="mb-4 text-center">
                              <v-row class="justify-center">
                                <v-col cols="12" md="9">
                                  <v-btn color="success" block height="50">
                                    Sign up
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </div>
                            <div class="mb-4 text-center">
                              <v-row class="justify-center">
                                <v-col cols="12" md="9">
                                  <v-btn block height="50">
                                    <img
                                      :src="
                                        require('@/assets/images/cloudenly-logo.svg')
                                      "
                                      alt="Icon"
                                      width="30"
                                    />
                                    <small class="signup-text">
                                      Sign up with your cloudenly account
                                    </small>
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </div>

                            <div class="text-center">
                              <p>
                                <span> Already have an account? </span>
                                <nuxt-link to="/auth/login">
                                  <span
                                    class="text-center text-color font-weight-bold"
                                  >
                                    Sign in
                                  </span>
                                </nuxt-link>
                              </p>
                            </div>
                          </div>
                        </v-col>
                      </template>
                    </v-row>
                  </v-form>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  layout: 'none',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.middle {
  max-width: 340px;
}
.text-color {
  color: #29c038;
}
.signup-text {
  font-size: 9px;
}
</style>
