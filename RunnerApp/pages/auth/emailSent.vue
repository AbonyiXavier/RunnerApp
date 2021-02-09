<template>
  <div>
    <v-app>
      <v-layout class="justify-center">
        <v-flex xs12 sm12 md9 lg6 class="mt-6">
          <v-card
            elevation="10"
            class="pb-12 mx-auto pa-3 pt-9"
            min-width="42vw"
          >
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
                                :src="require('@/assets/images/email-sent.svg')"
                                alt=""
                              />
                            </div>

                            <div>
                              <p class="text-center font-weight-bold">
                                An email has been sent. Please click the link
                                when you get it.
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
