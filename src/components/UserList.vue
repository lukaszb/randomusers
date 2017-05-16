<template>
  <div class="user-list">


    <div class="columns">
      <div class="column is-4 is-offset-4">
        <nav class="level">
          <div class="level-item">

            <button
              class="button is-primary"
              :class="{'is-loading': usersFetchInProgress}"
              @click="fetchMoreUsers()">
              Fetch more users
            </button>
          </div>

          <div class="level-item">
            <div class="field">
              <p class="control">
                <input class="input" v-model="search" placeholder="Search"/>
              </p>
            </div>
          </div>

        </nav>

      </div>
    </div>

    <br/>

    <transition-group tag="div" name="user-list">
      <user-item class="user-item" v-for="user in users" :user="user" :key="user.email"></user-item>
    </transition-group>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserItem from '@/components/UserItem';


export default {
  components: { UserItem },
  data() {
    return { search: '' };
  },
  computed: mapState({
    users(state) {
      if (!this.search) {
        return state.userList.users;
      }

      const search = this.search;
      return state.userList.users.filter((user) => {
        const firstNameMatched = user.name.first.toLowerCase().search(search) >= 0;
        const lastNameMatched = user.name.last.toLowerCase().search(search) >= 0;
        return (firstNameMatched || lastNameMatched);
      });
    },
    usersFetchInProgress: state => state.userList.fetchInProgress,
  }),
  methods: {
    fetchMoreUsers() {
      this.$store.dispatch('userList/fetch');
    },
  },
};
</script>

<style>
.user-item {
  transition: all 0.5s;
}
.user-list-enter, .user-list-leave-to {
  opacity: 0;
}

.user-list-enter {
  transform: translateY(80px);
}
.user-list-leave-to {
  transform: translateX(150px);
}
</style>
