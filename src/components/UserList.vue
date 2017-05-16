<template>
  <div class="user-list">
    <div v-for="user in users">
      <h3>{{ user.email }}</h3>
    </div>

    <button
      @click="fetchMoreUsers()">
      Fetch more users
    </button>

  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  computed: mapState({
    users: state => state.userList.users,
    usersFetchInProgress: state => state.userList.fetchInProgress,
  }),
  methods: {
    fetchMoreUsers() {
      this.$store.dispatch('userList/fetch');
    },
  },
};
</script>
