<template>
  <div>
    <!-- Back Arrow -->
    <div class="mb-10" @click="$router.back()">
      <v-icon color="green darken-2" left> mdi-arrow-left </v-icon>
      <span class="text-color back"> Back </span>
    </div>
    <h2>User</h2>
    <p class="font-weight-light">Users>>Create New Users</p>
    <v-app>
      <v-layout class="justify-center">
        <v-flex xs12 sm12 md9 lg6 class="mt-6">
          <!-- <v-card
            elevation="10"
            class="pb-12 mx-auto pa-3 pt-9"
            min-width="42vw"
          > -->
          <v-container>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md9>
                <v-form class="pa-0">
                  <v-row
                    justify="center"
                    align="center"
                    cols="12"
                    md="8"
                    lg="2"
                  >
                    <template>
                      <v-col cols="12" md="12" sm="12" xs="12">
                        <div>
                          <div class="mb-2 text-center">
                            <img
                              :src="
                                require('@/assets/images/user-created-successfully.svg')
                              "
                              alt=""
                            />
                          </div>

                          <div>
                            <p class="text-center text-color font-weight-bold">
                              New User created successfully
                            </p>
                            <p class="size">
                              You have successfully created your user, you can
                              view user's security credential
                            </p>
                          </div>
                          <div v-for="item in itemValues" :key="item">
                            <v-container>
                              <div>
                                <v-row>
                                  <v-col cols="6" md="6">
                                    <p class="font-weight-bold">Username</p>
                                  </v-col>
                                  <v-col cols="6" md="6">
                                    {{ item.username }}
                                  </v-col>
                                </v-row>
                              </div>
                              <div>
                                <v-row>
                                  <v-col cols="6" md="6">
                                    <p class="font-weight-bold">
                                      Access Type ID
                                    </p>
                                  </v-col>
                                  <v-col cols="6" md="6">
                                    {{ item.accessKey }}
                                  </v-col>
                                </v-row>
                              </div>
                              <div>
                                <v-row>
                                  <v-col cols="6" md="6">
                                    <p class="font-weight-bold">
                                      Secrete Access Key
                                    </p>
                                  </v-col>
                                  <v-col cols="6" md="6">
                                    <span v-if="item.shows">{{
                                      item.secretKey
                                    }}</span>
                                    <span v-else>{{
                                      String(item.secretKey).replace(/./g, '*')
                                    }}</span>
                                    <span
                                      v-if="!item.shows"
                                      class="primary--text text--darken-2"
                                      @click="$set(item, 'shows', !item.shows)"
                                      >SHOW</span
                                    >
                                    <span
                                      v-if="item.shows"
                                      class="primary--text text--darken-2"
                                      @click="$set(item, 'shows', !item.shows)"
                                      >HIDE</span
                                    >
                                  </v-col>
                                </v-row>
                              </div>
                              <div>
                                <v-row>
                                  <v-col cols="6" md="6">
                                    <p class="font-weight-bold">Password</p>
                                  </v-col>
                                  <v-col cols="6" md="6">
                                    <span v-if="item.show">{{
                                      item.secretKey
                                    }}</span>
                                    <span v-else>{{
                                      String(item.password).replace(/./g, '*')
                                    }}</span>
                                    <span
                                      v-if="!item.show"
                                      class="primary--text text--darken-2"
                                      @click="$set(item, 'show', !item.show)"
                                      >SHOW</span
                                    >
                                    <span
                                      v-if="item.show"
                                      class="primary--text text--darken-2"
                                      @click="$set(item, 'show', !item.show)"
                                      >HIDE</span
                                    >
                                  </v-col>
                                </v-row>
                              </div>
                            </v-container>
                          </div>
                        </div>
                      </v-col>
                    </template>
                  </v-row>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
          <!-- </v-card> -->
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemValues: [
        {
          username: 'Messagenote',
          accessKey: 'AASDFGHBVCXSDTEYUOY',
          secretKey: 'frde234rw',
          password: '123erdser',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
.size {
  font-size: 14px;
}
.text-color {
  color: #29c038;
}
.signup-text {
  font-size: 9px;
}
</style>
