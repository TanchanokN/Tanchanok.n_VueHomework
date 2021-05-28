import { createRouter, createWebHistory } from "vue-router";
import portfolio from "@/components/portfolio.vue";
import contact from "@/pages/contact.vue";
import profile from "@/pages/profile.vue";

const routes = [
  { path: "/", name: "home", component: portfolio },
  { path: "/contact", name: "contact", component: contact },
  { path: "/profile", name: "profile", component: profile }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
