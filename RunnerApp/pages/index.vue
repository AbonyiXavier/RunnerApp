<template>
  <div>
    <v-card flat>
      <h2>Dashboard</h2>
      <p class="font-weight-light">Dashboard</p>

      <div>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-auto">
              <div>
                <v-list-item three-line>
                  <v-list-item-avatar tile size="80">
                    <img
                      :src="require('@/assets/images/user-50.svg')"
                      alt="Icon"
                    />
                  </v-list-item-avatar>
                  <v-spacer></v-spacer>
                  <v-list-item-content>
                    <v-list-item-subtitle> Users </v-list-item-subtitle>
                    <v-list-item-title class="mb-1 headline">
                      50
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="mx-auto">
              <div>
                <v-list-item three-line>
                  <v-list-item-avatar tile size="80">
                    <img
                      :src="require('@/assets/images/api-500.svg')"
                      alt="Icon"
                    />
                  </v-list-item-avatar>
                  <v-spacer></v-spacer>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      Api integrations
                    </v-list-item-subtitle>
                    <v-list-item-title class="mb-1 headline">
                      50
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="mx-auto">
              <div>
                <v-list-item three-line>
                  <v-list-item-avatar tile size="80">
                    <img
                      :src="require('@/assets/images/api-calls.svg')"
                      alt="Icon"
                    />
                  </v-list-item-avatar>
                  <v-spacer></v-spacer>
                  <v-list-item-content>
                    <v-list-item-subtitle> Api calls </v-list-item-subtitle>
                    <v-list-item-title class="mb-1 headline">
                      50
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div>
        <v-row>
          <v-col cols="12" md="10">
            <div>
              <h1 class="font-weight-bold">Users</h1>
            </div>
          </v-col>
          <v-col cols="12" md="2">
            <div class="mb-4 text-center">
              <v-row class="justify-center">
                <v-col cols="12" md="12">
                  <v-btn color="success" block height="50"> View all </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>

      <div>
        <template>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            show-select
            item-key="user"
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.secretKey`]="{ item }">
              <span v-if="item.show">{{ item.secretKey }}</span>
              <span v-else>{{
                String(item.secretKey).replace(/./g, '*')
              }}</span>
              <span
                v-if="!item.show"
                class="pointer"
                @click="$set(item, 'show', !item.show)"
                >SHOW</span
              >
              <span
                v-if="item.show"
                class="pointer"
                @click="$set(item, 'show', !item.show)"
                >HIDE</span
              >
            </template>

            <template v-slot:[`item.password`]="{ item }">
              <span v-if="item.shows">{{ item.password }}</span>
              <span v-else>{{
                String(item.secretKey).replace(/./g, '*')
              }}</span>
              <span v-if="!item.shows" @click="$set(item, 'shows', !item.shows)"
                >SHOW</span
              >
              <span v-if="item.shows" @click="$set(item, 'shows', !item.shows)"
                >HIDE</span
              >
            </template>
            <template v-slot:[`item.emailLogin`]="{ item }">
              <span class="primary--text">{{ item.emailLogin }}</span>
            </template>
          </v-data-table>
          <div class="float-right pt-2">
            <v-pagination
              v-model="page"
              color="green"
              :length="pageCount"
            ></v-pagination>
          </div>
        </template>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singleSelect: false,
      selected: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 4,
      headers: [
        {
          text: 'User',
          align: 'start',
          sortable: false,
          value: 'user',
        },
        { text: 'Access Key ID', value: 'accessKey' },
        { text: 'Secret Access Key', value: 'secretKey' },
        { text: 'Password', value: 'password' },
        { text: 'Email Login Instructions', value: 'emailLogin' },
      ],
      desserts: [
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 6.0,
          password: 6.0,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 9.0,
          password: 6.0,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 16.0,
          password: 6.0,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 3.7,
          password: 6.0,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 16.0,
          password: 231,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 0.0,
          password: 6.0,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 0.2,
          password: 6.0,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 3.2,
          password: 6.0,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 25.0,
          password: 6.0,
          emailLogin: 'Send Email',
        },
        {
          user: 'Messagenote',
          accessKey: 'AHKJPUYRXXXVXCBX',
          secretKey: 26.0,
          password: 6.0,
          emailLogin: 'Send Email',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
