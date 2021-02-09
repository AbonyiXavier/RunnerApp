<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          :class="item.to == $route.fullPath ? 'green' : ''"
        >
          <v-list-item-action>
            <img :src="item.icon" alt="" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-spacer />

      <v-text-field
        dense
        solo
        filled
        flat
        rounded
        hide-details
        label="Search one-runner..."
        append-icon="mdi-magnify"
        class="hidden-sm-and-down"
      ></v-text-field>

      <!-- <v-toolbar-title v-text="title" /> -->

      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large dark v-bind="attrs" v-on="on">
            <v-avatar size="32px" item>
              <div class="tw-cursor-pointer">
                <img
                  :src="require('@/assets/images/setting.svg')"
                  alt="Vuetify"
                />
              </div>
            </v-avatar>
          </v-btn>
        </template>
        <span>Setting</span>
      </v-tooltip>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="54px">
              <img :src="require('@/assets/images/user.svg')" alt="userIcon" />
            </v-avatar>
          </v-btn>
        </template>

        <!-- Dropdown -->

        <!-- Ends Dropdown -->
      </v-menu>
    </v-app-bar>
    <v-main>
      <!-- <v-container> -->
      <div class="container">
        <nuxt />
      </div>
      <!-- </v-container> -->
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: require('@/assets/images/dashboard-icon.svg'),
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: require('@/assets/images/service-icon.svg'),
          title: 'Services',
          to: '/services',
        },
        {
          icon: require('@/assets/images/user-sidebar-icon.svg'),
          title: 'User',
          to: '/user',
        },
      ],

      miniVariant: false,
      right: true,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style scoped>
.container {
  max-width: 95%;
  margin: 0 auto;
  padding-right: 0 auto;
}
</style>
