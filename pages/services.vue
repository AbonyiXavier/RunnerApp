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
                  <v-btn color="success" block height="50">
                    Create New App
                  </v-btn>
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
            :headers="headersData"
            :search="search"
            :items="desserts"
            :single-select="singleSelect"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            show-expand
            hide-default-footer
            class="elevation-1"
            show-select
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.policies`]="{ item }">
              <span class="primary--text">{{ item.policies }}</span>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <div v-if="item.items">
                  <v-simple-table fixed-header height="300px">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Policy Name</th>
                          <th class="text-left">Type</th>
                          <th class="text-left">Used As</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="itemData in item.items" :key="itemData.name">
                          <td>{{ itemData.name }}</td>
                          <td>{{ itemData.type }}</td>
                          <td>{{ itemData.usedAs }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </td>
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
      search: '',
      expanded: [],
      singleSelect: false,
      selected: [],
      singleExpand: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 4,
      headersData: [
        {
          text: 'Services',
          align: 'start',
          sortable: false,
          value: 'services',
        },
        { text: 'Policies', value: 'policies' },
        { text: 'Access Key Age', value: 'accessKey' },
        { text: 'Password Age', value: 'password' },
        { text: 'Last Activity', value: 'lastActivity' },
        { text: 'MFA', value: 'MFA' },
        { text: '', value: 'data-table-expand' },
      ],

      desserts: [
        {
          services: 'In App messaging',
          policies: '25 policies',
          accessKey: '639 days',
          password: '639 days',
          lastActivity: '365 days',
          MFA: 'Not Enabled',
          items: [
            {
              name: 'Administrator Access',
              type: 'Job function',
              usedAs: 'Permission policy(2)',
            },
            {
              name: 'Alexa-orBusinessFullAccess',
              type: 'Job function',
              usedAs: 'Permission policy(2)',
            },
            {
              name: 'Alexa-orBusinessRandomlyAccess',
              type: 'Job function',
              usedAs: 'Permission policy(2)',
            },
          ],
        },
        {
          services: 'Notification',
          policies: '25 policies',
          accessKey: '639 days',
          password: '639 days',
          lastActivity: '365 days',
          MFA: 'Not Enabled',
        },
        {
          services: 'Tickecking',
          policies: '25 policies',
          accessKey: '639 days',
          password: '639 days',
          lastActivity: '365 days',
          MFA: 'Not Enabled',
        },
        {
          services: 'Email Services',
          policies: '25 policies',
          accessKey: '639 days',
          password: '639 days',
          lastActivity: '365 days',
          MFA: 'Not Enabled',
        },
        {
          services: 'CSAT',
          policies: '25 policies',
          accessKey: '639 days',
          password: '639 days',
          lastActivity: '365 days',
          MFA: 'Not Enabled',
        },
        {
          services: 'Email Services',
          policies: '25 policies',
          accessKey: '639 days',
          password: '639 days',
          lastActivity: '365 days',
          MFA: 'Not Enabled',
        },
        {
          services: 'CSAT',
          policies: '25 policies',
          accessKey: '639 days',
          password: '639 days',
          lastActivity: '365 days',
          MFA: 'Not Enabled',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
