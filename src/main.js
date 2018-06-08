// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import firebase from 'firebase';
import 'vuetify/dist/vuetify.min.css'
import store from './store/index'

Vue.use(Vuetify)
const config = {
  apiKey: "AIzaSyBk3K4k3wsP6SnzByEfjAR6uzGsqR-Kb24",
  authDomain: "fir-vue-2f19f.firebaseapp.com",
  databaseURL: "https://fir-vue-2f19f.firebaseio.com",
  projectId: "fir-vue-2f19f",
  storageBucket: "fir-vue-2f19f.appspot.com",
  messagingSenderId: "179796575096"
};

firebase.initializeApp(config);
// const database = firebase.database();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
