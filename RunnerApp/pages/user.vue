<template>
  <div>
    <v-card flat>
      <h2>User</h2>
      <p class="font-weight-light">User</p>
      <v-app>
        <v-layout class="justify-center">
          <v-flex xs12 sm12 md9 lg6 class="mt-6">
            <v-container>
              <v-layout align-center justify-center>
                <v-flex xs12 sm8 md9>
                  <v-form class="pa-0">
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
                            <div class="mb-2 text-center">
                              <img
                                :src="
                                  require('@/assets/images/userSidePage.svg')
                                "
                                alt=""
                              />
                            </div>

                            <div>
                              <p class="text-center font-weight-bold">
                                To Access Our Services Kindly Create User
                              </p>
                            </div>
                            <div class="mb-4 text-center">
                              <v-row class="justify-center">
                                <v-col cols="12" md="9">
                                  <v-btn
                                    color="success"
                                    block
                                    height="50"
                                    @click="createUser"
                                  >
                                    Create User
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </div>
                          </div>
                        </v-col>
                      </template>
                    </v-row>
                  </v-form>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-app>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    createUser() {
      this.$router.push('Users/user-details')
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
