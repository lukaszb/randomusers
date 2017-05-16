<template>
  <div class="columns">
    <div class="column is-8 is-offset-2">

      <div class="card user-card">

        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="user.picture.medium" alt="Image"/>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</p>
              <p class="subtitle is-6">{{ user.email }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['user'],
};
</script>

<style>
.image img {
  border: 2px solid #efe;
  border-radius: 50%;
}
</style>
