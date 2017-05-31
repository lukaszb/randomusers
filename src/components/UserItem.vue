<template>
  <div class="columns">
    <div class="column is-8 is-offset-2">

      <div class="card user-card" :class="{'animated pulse': justClicked}" @click="clicked()">

        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="user.picture.medium" alt="Image"/>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ user.name.title }} {{ user.name.first|capfirst }} {{ user.name.last|capfirst }}</p>
              <p class="subtitle is-6">{{ user.email }}</p>
            </div>
          </div>
          <a @click.prevent="removeUser()" class="delete"></a>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['user'],
  data() {
    return {
      justClicked: false,
      votes: 0,
    };
  },
  methods: {
    removeUser() {
      this.$store.dispatch('userList/removeUser', { email: this.user.email });
    },
    clicked() {
      this.votes += 1;
      this.$emit('voted', { votes: this.votes });
      this.showClick();
    },
    showClick() {
      const self = this;
      self.justClicked = true;
      setTimeout(() => {
        self.justClicked = false;
      }, 1000);
    },
  },
};
</script>

<style>
.image img {
  border: 2px solid #efe;
  border-radius: 50%;
}

.user-card {
  cursor: pointer;
}

.user-card .delete {
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}
.user-card:hover .delete {
  display: inline-block;
}
</style>
