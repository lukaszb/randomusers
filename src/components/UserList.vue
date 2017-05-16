<template>
  <div class="user-list">
    <div v-for="user in users">
      <h3>{{ user.email }}</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  computed: mapState({
    users: state => state.userList.users,
  }),
};
</script>
