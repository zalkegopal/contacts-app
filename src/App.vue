<template>
  <v-app class="app-bar">
    <v-toolbar color="#64bc7f" dark to="/">
    <v-btn icon to="/">
      <v-icon>mdi-contacts</v-icon>
    </v-btn>
      <v-toolbar-title>ContactsApp</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/contacts">Contacts</v-btn>
        <v-btn text to="/favourites">Favourites</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // initialize localStorage to store favourites
    if ( localStorage.getItem("favouriteUsers") === undefined) {
      localStorage.setItem("favouriteUsers", JSON.stringify([]));
    } else {
      console.log("localStorage for favourite users exists!");
    }
  }
};
</script>
<style scoped>
.app-bar header{
  max-height: 60px;
}
</style>
