<template>
  <div>
    <div>
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
                  <p class="text-center font-weight-bold display-1">
                    Create New Application
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
                            <label>Application Name</label>
                          </div>
                          <div>
                            <v-text-field
                              v-model="name"
                              outlined
                            ></v-text-field>
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
      <div>
        <div class="float-left text-center">
          <v-btn outlined height="50"> Cancel </v-btn>
        </div>

        <div class="float-right text-center">
          <v-btn color="success" block height="50" @click="createServices">
            Create
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   layout: 'none',
}
</script>

<style scoped>
.text-color {
  color: #29c038;
}
</style>
