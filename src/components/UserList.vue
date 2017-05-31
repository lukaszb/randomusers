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
                <input ref="searchInput" class="input" v-model="search" placeholder="Search"/>
              </p>
            </div>
          </div>

        </nav>

      </div>
    </div>

    <br/>

    <user-item
      v-for="user in users"
      :user="user"
      :key="user.email"
      @voted="voteForUser(user, $event)"
    />

  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserItem from '@/components/UserItem';


export default {
  components: { UserItem },
  mounted() {
    this.$refs.searchInput.focus();
  },
  data() {
    return { search: '', maxVotes: 0 };
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
      this.$refs.searchInput.focus();
    },
    voteForUser(user, { votes }) {
      console.log(' =>', votes, ' votes for', user);
      if (votes > this.maxVotes) {
        this.maxVotes = votes;
        this.king = user;
      }
    },
  },
};
</script>
