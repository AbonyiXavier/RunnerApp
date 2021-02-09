<template>
  <div>
    <div>
      <v-row>
        <v-col cols="12" md="10">
          <div>
            <v-row>
              <v-col cols="12" md="6">
                <h1>Applications</h1>
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
                  @click="createApplication"
                >
                  Create New Application
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col v-for="org in organisations" :key="org.name" cols="12" md="3">
        <v-card class="mx-auto">
          <div>
            <v-list-item three-line>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-list-item-content>
                <v-list-item-title>
                  <img
                    :src="require('@/assets/images/pencil-icon.svg')"
                    alt=""
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-text class="pb-0">
              <div class="text-center">
                <v-list-item-avatar tile size="150">
                  <img :src="org.icon" alt="" />
                </v-list-item-avatar>
                <p class="headline">{{ org.name }}</p>
                <p class="pb-2">{{ org.email }}</p>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  //   layout: 'none',
  data() {
    return {
      organisations: [
        {
          icon: require('@/assets/images/glo.svg'),
          name: 'Globacom',
          email: 'info@globacom.com',
        },
        {
          icon: require('@/assets/images/shell.svg'),
          name: 'Shell',
          email: 'info@shell.com',
        },
        {
          icon: require('@/assets/images/chevron.svg'),
          name: 'Chevron',
          email: 'support@chevron.com',
        },
        {
          icon: require('@/assets/images/nnpc.svg'),
          name: 'NNPC',
          email: 'enquires@nnpc.com.ng',
        },
        {
          icon: require('@/assets/images/glo.svg'),
          name: 'Globacom',
          email: 'info@globacom.com',
        },
        {
          icon: require('@/assets/images/shell.svg'),
          name: 'Shell',
          email: 'info@shell.com',
        },
        {
          icon: require('@/assets/images/chevron.svg'),
          name: 'Chevron',
          email: 'support@chevron.com',
        },
        {
          icon: require('@/assets/images/nnpc.svg'),
          name: 'NNPC',
          email: 'enquires@nnpc.com.ng',
        },
      ],
    }
  },
  methods: {
    createApplication() {
      this.$router.push('/organisation/create-new')
    },
  },
}
</script>

<style lang="scss" scoped></style>
