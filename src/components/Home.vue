<template>
  <div class="homepage">
    <h1>Randomusers</h1>

    <user-list></user-list>

  </div>
</template>

<script>
import UserList from '@/components/UserList';


export default {
  components: { UserList },
};
</script>
