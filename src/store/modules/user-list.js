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
    REMOVE_USER(state, { email }) {
      state.users = state.users.filter(u => u.email !== email);
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
    removeUser({ commit }, { email }) {
      // email is not best id but it should suffice for test app
      commit('REMOVE_USER', { email });
    },
  },
};
