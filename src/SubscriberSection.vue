<template>
  <div>
    <div class="inbox-head">
      <h3>Subscribers</h3>
    </div>
    <br>
    <div class="container">
      <div class="thumbnail col-xs-2" v-for="subscriber in subscribers">
        <router-link :to="{name: 'viewSubscriber', params: {subscriberId: subscriber.id}}" tag="h4" class="group inner list-group-item-heading">
          <a>{{ subscriber.name }}</a>
        </router-link>
        <div>
          <p># of DataReaders: {{ subscriber.dataReaders.length}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_subscribers from './data/dummy_subscribers'

  export default {
    data() {
      return {
        subscribers: dummy_subscribers
      }
    }
  }
</script>
