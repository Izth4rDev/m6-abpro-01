import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from '@/views/LoginPage.vue'
import Productos from '@/views/productoPage.vue'
//import UserList from "@/components/UserList";
//import UserDetails from "@/components/UserDetails";

const routes = [
  {
    path: "/HomeRoot",
    name: "HomeRoot",
    component: Home
  },
  {
    path: "/",
    name: "LoginPage",
    component:LoginPage
  },
  {
    path: "/productoPage",
    name: "productoPage",
    component:Productos
  },
  /*{
    path: "/users",
    name: "UserList",
    component: UserList
  },*/
  // {
  //   path: "/users/:userId",
  //   name: "UserDetails",
  //   component: UserDetails
  // },
  // {
  //   path: "/about",
  //   name: "AboutUs",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
