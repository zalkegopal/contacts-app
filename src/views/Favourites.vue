<template>
  <div>
    <Alert v-if="alertVisible" :alertType="alertType" :message="message"/>
    <v-card
      v-if="favouritesConatacts.length > 0"
      class="mx-auto ContactsContainer"
    >
    <v-card-title color="#64bc7f">Favourite Contacts</v-card-title>
      <v-list>
        <v-list-item v-for="user in favouritesConatacts" :key="user.id" class="list-item"
          dark>
          <v-list-item-avatar height="70" width="70">
            <v-img
              :alt="`${user.first_name} avatar`"
              :src="user.avatar"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              v-text="`${user.first_name} ${user.last_name}`"
            ></v-list-item-title>
          </v-list-item-content>
          <v-icon @click="deleteFavouriteHandler(user.id)">
            mdi-trash-can
          </v-icon>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="mx-auto" max-width="60%" v-else>
      <v-card-title class="text-center"
        >No favourites contacts. Add some !!</v-card-title
      >
    </v-card>
  </div>
</template>
<script>
import Alert from "../components/UI/Alert.vue";
export default {
  name: "Favourites",
  components: {
    Alert
  },
  data: () => {
      return {
          alertType: "success",
          message: "Contact removed from favourites",
          alertVisible: false
      }
  },

  computed: {
    favouritesConatacts: function() {
      return JSON.parse(localStorage.getItem("favouriteUsers"));
    },
  },

  async mounted() {
    this.favourites = this.favouritesConatacts;
  },

  methods: {
    deleteFavouriteHandler(id) {
      this.$store.dispatch("removeFromFavourites", id);
      this.favourites = this.favouritesConatacts;
      this.alertVisible = true;
      setTimeout( () => {
          this.alertVisible = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.ContactsContainer {
  margin: 32px 0;
  padding: 16px 10px;
  width: 500px;
}
.pagination {
  margin-top: 10px;
}
.text-center {
  justify-content: center;
}
.list-item {
  background-color: #64bc7f;
  border-radius: 6px;
  margin: 10px 0;
  height: 100px;
}
</style>
