<template>
  <div>
    <v-card flat>
      <h2>Services</h2>
      <p class="font-weight-light">Services</p>
      <div>
        <v-row>
          <v-col cols="12" md="10">
            <div>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="search"
                    sm
                    clearable
                    color="black"
                    prepend-inner-icon="mdi-magnify"
                    label="search"
                    flat
                    solo
                    outlined
                    dense
                    required
                    height="45"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" md="2">
            <div class="mb-4 text-center">
              <v-row class="justify-center">
                <v-col cols="12" md="12">
                  <v-btn
                    color="success"
                    block
                    height="50"
                    @click="createServices"
                  >
                    Create New Services
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-col cols="12" md="3">
            <v-card class="mx-auto">
              <div>
                <v-list-item three-line>
                  <v-list-item-avatar tile size="80">
                    <img
                      :src="require('@/assets/images/messaging.svg')"
                      alt=""
                    />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="mb-1 headline">
                      <div class="horizontal-line"></div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text class="pb-0">
                  <p class="display-1 font-weight-bold">Messaging</p>
                  <p class="pb-2">
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="mx-auto">
              <div>
                <v-list-item three-line>
                  <v-list-item-avatar tile size="80">
                    <img
                      :src="require('@/assets/images/notification.svg')"
                      alt=""
                    />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="mb-1 headline">
                      <div class="horizontal-line"></div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text class="pb-0">
                  <p class="display-1 font-weight-bold">Notifications</p>
                  <p class="pb-2">
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="mx-auto">
              <div>
                <v-list-item three-line>
                  <v-list-item-avatar tile size="80">
                    <img :src="require('@/assets/images/CSTA.svg')" alt="" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="mb-1 headline">
                      <div class="horizontal-line"></div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text class="pb-0">
                  <p class="display-1 font-weight-bold">CSTA</p>
                  <p class="pb-2">
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="mx-auto">
              <div>
                <v-list-item three-line>
                  <v-list-item-avatar tile size="80">
                    <img
                      :src="require('@/assets/images/emailServices.svg')"
                      alt=""
                    />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="mb-1 headline">
                      <div class="horizontal-line"></div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text class="pb-0">
                  <p class="display-1 font-weight-bold">Email Services</p>
                  <p class="pb-2">
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="mx-auto">
              <div>
                <v-list-item three-line>
                  <v-list-item-avatar tile size="80">
                    <img
                      :src="require('@/assets/images/ticketing.svg')"
                      alt=""
                    />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="mb-1 headline">
                      <div class="horizontal-line"></div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text class="pb-0">
                  <p class="display-1 font-weight-bold">Tickecking</p>
                  <p class="pb-2">
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    createServices() {
      this.$router.push('/Services/create-new-services')
    },
  },
}
</script>

<style scoped>
.horizontal-line {
  border: 1px solid #bdbdbd;
}
</style>
