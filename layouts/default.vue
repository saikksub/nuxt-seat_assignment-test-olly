<template>
  <v-app>
    <v-app-bar
      absolute
      color="accent"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <!-- <v-toolbar-title class="text-white">Booky</v-toolbar-title> -->
      <h3 class="white--text text--lighten-2">
        Booky
      </h3>
      <v-spacer></v-spacer>
      <v-btn x-large color="primary" to="/new_contact" nuxt
        >Create Contact</v-btn
      >
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
