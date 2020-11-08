import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    updateUsers(state, payload) {
      state.users = payload;
    },
    updateFavourites(state, favourites) {
      state.favouriteUsers = favourites;
    },
  },
  actions: {
    async fetchUsers({ commit }, pageNo) {
      const usersResponse = await axios.get(
        `https://reqres.in/api/users?page=${pageNo}`
      );
      const users = usersResponse.data;
      commit("updateUsers", users.data);
    },

    addToFavourite(context, user) {
      const favourites = JSON.parse(localStorage.getItem("favouriteUsers"));
      const index = favourites.findIndex((item) => item.id === user.id);
      if (index < 0) {
        favourites.push(user);
      }
      localStorage.setItem("favouriteUsers", JSON.stringify(favourites));
    },

    removeFromFavourites(context, userId) {
      const favourites = JSON.parse(localStorage.getItem("favouriteUsers"));
      const updatedFavourites = favourites.filter((user) => user.id !== userId);
      localStorage.setItem("favouriteUsers", JSON.stringify(updatedFavourites));
    },
  },
});
