<template>
  <slide>
    <div class="user-head">
      <img src="./assets/images/android-chrome-192x192.png" style="width:45px;height:45px;">

      <div class="user-name">
        <h5>Open DDS Web Monitor</h5>
      </div>
    </div>

    <ul class="inbox-nav">
      <router-link to="/" class="navbar-brand" exact active-class="active">
        <strong>Dashboard</strong>
      </router-link>

      <router-link to="/topics" tag="li" active-class="active">
        <a>Topics</a>
      </router-link>

      <router-link to="/publishers" tag="li" active-class="active">
        <a>Publishers</a>
      </router-link>

      <router-link to="/subscribers" tag="li" active-class="active">
        <a>Subscribers</a>
      </router-link>

      <router-link to="/datawriters" tag="li" active-class="active">
        <a>Data Writers</a>
      </router-link>

      <router-link to="/datareaders" tag="li" active-class="active">
        <a>Data Readers</a>
      </router-link>
    </ul>
  </slide>
</template>

<script>
  import { Slide } from 'vue-burger-menu'

  export default {
    components: {
      slide: Slide
    }
  }
</script>
