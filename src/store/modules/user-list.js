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
    SET_USER_LIST_DATA(state, { users }) {
      state.users = users;
    },
    STOP_FETCH(state) {
      state.fetchInProgress = false;
    },
  },
  actions: {
    async fetch({ commit, state }) {
      commit('START_FETCH');
      try {
        const response = await axios.get('https://randomuser.me/api/?&nat=us,gb,fr,de&results=10');
        const fetchedUsers = response.data.results;
        const users = state.users.concat(response.data.results);
        commit('SET_USER_LIST_DATA', { users, fetchedUsers });
      } catch (error) {
        console.error('Something went wrong');
      }
      commit('STOP_FETCH');
    },
  },
};
