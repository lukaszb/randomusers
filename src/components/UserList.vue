<template>
  <div class="user-list">

    <div class="columns">
      <div class="column">
        <button
          class="button is-primary"
          :class="{'is-loading': usersFetchInProgress}"
          @click="fetchMoreUsers()">
          Fetch more users
        </button>
      </div>
    </div>

    <br/>

    <user-item v-for="user in users" :user="user" :key="user.email"></user-item>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserItem from '@/components/UserItem';


export default {
  components: { UserItem },
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
