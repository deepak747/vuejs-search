/** @format */

import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";

import App from "./App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.config.productionTip = false;


//  import GAuth from 'vue-google-oauth2'
//   const gauthOption = {
//  clientId: '735883386680-avs4o12bgko6ph7g81cgjc6te5r15g6j.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'consent',
//   fetch_basic_profile:true
//  }
//    app.use(GAuth, gauthOption)

import GAuth from 'vue3-google-oauth2'

let gauthChildId = '735883386680-avs4o12bgko6ph7g81cgjc6te5r15g6j.apps.googleusercontent.com'
const gAuthOptions = {
    clientId: gauthChildId,
    scope: 'email', prompt: 'consent', fetch_basic_profile: false
}
app.use(GAuth, gAuthOptions)


app.use(ElementPlus);
app.use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount("#app");

