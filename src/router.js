/** @format */

import { createRouter, createWebHashHistory } from "vue-router";
import table from "./components/table.vue";

const routes = [
  { path: "/table", component: table },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
