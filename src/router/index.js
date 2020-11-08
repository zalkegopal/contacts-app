import Vue from "vue";
import VueRouter from "vue-router";
import Contacts from "../views/Contacts.vue";
import ContactDetail from "../views/ContactDetail.vue";
import Favourites from "../views/Favourites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Contacts
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/contact/:id",
    name: "ContactDetail",
    component: ContactDetail
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
