<template>
  <div class="homepage">
    <h1>Randomusers</h1>

    <user-list :users="users"></user-list>

    <button @click="fetchMoreUsers()">Fetch more users</button>
  </div>
</template>

<script>
import UserList from '@/components/UserList';
import axios from 'axios';


export default {
  components: { UserList },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchMoreUsers() {
      const count = 10;
      const url = `https://randomuser.me/api/?&nat=us,gb,fr,de&results=${count}`;
      try {
        const response = await axios.get(url);
        this.users = this.users.concat(response.data.results);
      } catch (error) {
        console.error('Something went wrong');
      }
    },
  },
};
</script>
