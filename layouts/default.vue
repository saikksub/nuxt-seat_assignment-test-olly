<template>
  <v-app>
    <v-app-bar
      absolute
      color="primary"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      flat
    >
      <!-- <v-toolbar-title class="text-white">Booky</v-toolbar-title> -->
      <h3 class="orange--text text--lighten-5">
        Booky
      </h3>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
