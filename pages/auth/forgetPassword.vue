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
                    <p class="text-center font-weight-bold">Forget password</p>
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

                            <div class="text-center mb-4">
                              <v-row class="justify-center">
                                <v-col cols="12" md="9">
                                  <v-btn color="success" block height="50">
                                    Send me a recovery link
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
