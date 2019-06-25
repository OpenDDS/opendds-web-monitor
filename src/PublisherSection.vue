<template>
  <div>
    <div class="inbox-head">
      <h3>Publishers</h3>
    </div>
    <br>
    <div class="container">
      <div class="thumbnail col-xs-2" v-for="publisher in publishers">
        <router-link :to="{name: 'viewPublisher', params: {publisherId: publisher.id}}" tag="h4" class="group inner list-group-item-heading">
          <a>{{ publisher.name }}</a>
        </router-link>
        <div>
          <p># of DataWriters: {{ publisher.dataWriters.length}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_publishers from './data/dummy_publishers'

  export default {
    data() {
      return {
        publishers: dummy_publishers
      }
    }
  }
</script>
