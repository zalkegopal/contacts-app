<template>
  <v-container>
    <RadioGroup :radioChanged="sortingChangedHandler" />
    <v-card class="mx-auto ContactsContainer">
      <v-card-title color="#64bc7f">Available Contacts</v-card-title>
      <v-list>
        <v-list-item
          v-for="user in users"
          :key="user.id"
          @click="userSelectedHandler(user.id)"
          class="list-item"
          dark
        >
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
        </v-list-item>
      </v-list>
    </v-card>
    <div class="text-center pagination">
      <v-pagination v-model="page" :length="2" color="#64bc7f"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import RadioGroup from "../components/UI/RadioGroup.vue";
import * as Utility from "../utility/utility";

export default {
  name: "Contacts",
  components: {
    RadioGroup,
  },
  data: () => ({
    users: [
      {
        id: "1",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        first_name: "Gopal",
        last_name: "Zalke",
        email: "gopalzalke@gmail.com",
      },
    ],
    page: 1,
  }),

  watch: {
    page(newValue) {
      this.paginationChanged(newValue);
    },
  },

  async mounted() {
    await this.$store.dispatch("fetchUsers", this.page);
    this.users = this.$store.state.users;
    this.sortUsers(1);
  },

  methods: {
    userSelectedHandler(id) {
      this.$router.push(`/contact/${id}`);
    },
    async paginationChanged(newValue) {
      await this.$store.dispatch("fetchUsers", newValue);
      this.users = this.$store.state.users;
      this.sortUsers(1);
    },
    sortingChangedHandler(sortType) {
      console.log("Radio changed: ", sortType);
      this.sortUsers(sortType);
    },
    sortUsers(type) {
      if (type === 1) {
        this.users = Utility.sortAscending(this.users);
      } else {
        this.users = Utility.sortDescending(this.users);
      }
    }
  }
};
</script>

<style scoped>
.ContactsContainer {
  width: 50%;
  margin: 32px 0;
  padding: 16px 10px;
  width: 500px;
  box-shadow: 0 3px 2px #64bc7f;
}
.pagination {
  margin-top: 10px;
}
.radio-block {
  justify-content: center;
}
.list-item {
  background-color: #64bc7f;
  border-radius: 6px;
  margin: 10px 0;
  height: 100px;
}
</style>
