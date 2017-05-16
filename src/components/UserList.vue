<template>
  <div class="user-list">
    <div v-for="user in users">
      <h3>{{ user.email }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: { type: Array, default: [] },
  },
};
</script>
