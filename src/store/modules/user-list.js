import sleep from '@/utils';
import axios from 'axios';


export default {
  namespaced: true,
  state: {
    fetchInProgress: false,
    users: [],
  },
  mutations: {
    START_FETCH(state) {
      state.fetchInProgress = true;
    },
    SET_USER_LIST_DATA(state, users) {
      state.users = users;
    },
    STOP_FETCH(state) {
      state.fetchInProgress = false;
    },
  },
  actions: {
    async fetch({ commit, state }) {
      commit('START_FETCH');
      const count = 10;
      const url = `https://randomuser.me/api/?&nat=us,gb,fr,de&results=${count}`;
      const req = axios.get(url);
      try {
        await sleep(1000);  // add fake network delay
        const response = await req;
        const users = state.users.concat(response.data.results);
        commit('SET_USER_LIST_DATA', users);
      } catch (error) {
        console.error('Something went wrong');
      }
      commit('STOP_FETCH');
    },
  },
};
