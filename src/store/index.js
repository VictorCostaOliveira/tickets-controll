import firebase from 'firebase';
import router from '@/router';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state  = {
    tickets: [],
    error: false,
    load: false
};

const mutations = {
  setTickets(state, data) {
    state.tickets.push(data);
  }
};

const actions  = {
  setTickets({ commit }) {
    firebase.database().ref('tickets').once('value').then((res) => {
      for (var key in res.val()) {
        // if (getTickets.some( item => {debugger})) {
          commit('setTickets', res.val()[key]);
        // }
      }
    });
  }
};

const getters = {
  getTickets() {
    return state.tickets;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
