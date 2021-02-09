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
                    <!-- Back Arrow -->
                    <div class="mb-10" @click="$router.back()">
                      <v-icon color="green darken-2" left>
                        mdi-arrow-left
                      </v-icon>
                      <span class="text-color back"> Back </span>
                    </div>

                    <p class="text-center font-weight-bold">
                      Enter your verification code
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
                              <v-col
                                v-for="(n, i) in otps"
                                :key="i"
                                cols="6"
                                md="2"
                              >
                                <div>
                                  <v-text-field
                                    ref="input"
                                    v-model="n.text"
                                    outlined
                                    @keyup="getInputs"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <!-- <v-col cols="6" md="2">
                                <div>
                                  <v-text-field
                                    ref="input2"
                                    v-model="password"
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="6" md="2">
                                <div>
                                  <v-text-field
                                    ref="input3"
                                    v-model="password"
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="6" md="2">
                                <div>
                                  <v-text-field
                                    ref="input4"
                                    v-model="password"
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="6" md="2">
                                <div>
                                  <v-text-field
                                    ref="input5"
                                    v-model="password"
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="6" md="2">
                                <div>
                                  <v-text-field
                                    ref="input6"
                                    v-model="password"
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col> -->
                              <!-- <v-col cols="6" md="2">
                                <div>
                                  <v-text-field
                                    v-model="password"
                                    outlined
                                  ></v-text-field>
                                </div>
                              </v-col> -->
                            </v-row>
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
      otps: [
        {
          text: '',
        },
        {
          text: '',
        },
        {
          text: '',
        },
        {
          text: '',
        },
        {
          text: '',
        },
        {
          text: '',
        },
      ],
    }
  },
  methods: {
    getInputs() {
      if (this.$refs.input[0].value) this.$refs.input[1].focus()
      if (this.$refs.input[1].value) this.$refs.input[2].focus()
      if (this.$refs.input[2].value) this.$refs.input[3].focus()
      if (this.$refs.input[3].value) this.$refs.input[4].focus()
      if (this.$refs.input[4].value) this.$refs.input[5].focus()
      if (this.$refs.input[5].value) {
        const values = `${this.$refs.input[0].value}${this.$refs.input[2].value}`
        console.log('values', values)
      }
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
.back {
  cursor: pointer;
}
</style>
