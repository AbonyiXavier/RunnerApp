<template>
  <div>
    <v-app>
      <v-layout class="justify-center">
        <v-flex xs12 sm12 md9 lg6 class="mt-6">
          <v-card
            elevation="10"
            class="mx-auto pa-3 pt-9 pb-12"
            min-width="42vw"
          >
            <v-container>
              <v-layout align-center justify-center>
                <v-flex xs12 sm8 md9>
                  <v-form class="pa-0">
                    <h1 class="text-center mb-4">LOGO</h1>
                    <p class="text-center font-weight-bold">
                      Log in to your account
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
                            <div class="mb-2">
                              <label>Email Address</label>
                            </div>
                            <div>
                              <v-text-field
                                v-model="name"
                                required
                                outlined
                              ></v-text-field>
                            </div>
                            <div class="mb-2">
                              <label>Password</label>
                            </div>
                            <div>
                              <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                outlined
                                @click:append="show1 = !show1"
                              ></v-text-field>
                            </div>
                            <!-- forget password -->
                            <div>
                              <nuxt-link to="/auth/forgetPassword">
                                <p
                                  class="text-center text-color font-weight-bold"
                                >
                                  Forget Password?
                                </p>
                              </nuxt-link>
                            </div>

                            <div class="text-center mb-4">
                              <v-row class="justify-center">
                                <v-col cols="12" md="9">
                                  <v-btn color="success" block height="50">
                                    Sign in
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </div>
                            <div class="text-center mb-4">
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
                                <span> Don't have account? </span>
                                <nuxt-link to="/auth/signup">
                                  <span
                                    class="text-center text-color font-weight-bold"
                                  >
                                    Sign up
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
    return {
      show1: false,
    }
  },
  methods: {
    authenticateUser() {
      alert(123)
    },
  },
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
