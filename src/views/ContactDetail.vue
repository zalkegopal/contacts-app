 <template>
 <v-container>
   <Alert v-if="alertVisible" :alertType="alertType" :message="message"/>
  <v-card
    class="mx-auto my-12"
    max-width="300"
    rounded
  >
    <v-img
      height="200"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuprkO6mNp8Qb7CAZreUP4ovNH-8Wupk3ySg&usqp=CAU"
    ></v-img>

    <div class="user-image">
       <v-img :src="userDetails.avatar"></v-img>
    </div>
    <div class="user-content">
    <v-card-title color="#616974" class="card-title">
      {{userDetails.first_name + ' '+ userDetails.last_name}}
    </v-card-title>
    <v-card-text>
      <v-icon>mdi-email</v-icon> {{ userDetails.email}}
    </v-card-text>
    </div>
    <v-card-actions width="100%" padding="0">
      <v-btn
        color="#64bc7f"
        class="fav-btn"
        dark
        @click="addToFavouriteHandler()"
      >
        Add To Favourites
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import Alert from "../components/UI/Alert";

export default {
  name: "ContactDetail",
  components: {
    Alert
  },

  data: () => ({
    userId: 1,
    userDetails: {},
    alertType: "success",
          message: "Added to favourites!",
          alertVisible: false
  }),

  computed: {
    allUsers: function() {
      return this.$store.state.users;
    }
  },

  methods: {
    getUserDetails() {
      const selectedUser = this.allUsers.find( user => user.id === this.userId);
      this.userDetails = selectedUser;
    },
    addToFavouriteHandler() {
      this.$store.dispatch('addToFavourite', this.userDetails);
      this.alertVisible = true;
      setTimeout( () => {
          this.alertVisible = false;
      }, 2000);
    }
  },

  beforeMount() {
    const selectedId = this.$route.params.id;
    this.userId = +selectedId;
    this.getUserDetails();
  }
};
</script>

<style scoped>
 .fav-btn {
   width: -webkit-fill-available;
 }
 .card-title {
   justify-content: center;
 }

 .user-image{
    top: 35%;
    left: 32%;
    border-radius: 50%;
    position: absolute;
    height: 110px;
    width: 110px;
    border: 1px solid black;
    z-index: 200;
    overflow: hidden;
 }
 .user-content {
   margin-top: 32px;
   text-align: center;
 }
</style>
