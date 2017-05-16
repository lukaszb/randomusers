<template>
  <div class="homepage">
    <h1>Randomusers</h1>

    <user-list></user-list>

    <button @click="fetchMoreUsers()">Fetch more users</button>
  </div>
</template>

<script>
import UserList from '@/components/UserList';


export default {
  components: { UserList },
  methods: {
    fetchMoreUsers() {
      this.$store.dispatch('userList/fetch');
    },
  },
};
</script>
