<template>
  <div>
    <div class="inbox-head">
      <h3>View Subscriber</h3>
    </div>

    <br>

    <div class="container">
      <h4 class="list-group-item-heading">{{ subscriber.name }}</h4>

    <p><strong>Data Readers</strong></p>
      <div v-for="reader in subscriber.dataReaders">
        <router-link :to="{name: 'viewDataReader', params: {dataReaderId: reader.id}}" tag="p" class="group inner list-group-item-heading">
          <p>ID: {{ reader.id }} - <a>{{ reader.name }}</a></p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_subscribers from './data/dummy_subscribers'

  export default {
    data() {
      return {
        subscribers: dummy_subscribers,
        subscriber: null
      }
    },
    created() {
      let subscriberId = this.$route.params.subscriberId;
      this.subscriber = this.getSubscriber(subscriberId);
    },
    methods: {
      getSubscriber(subscriberId) {
        let match = null;

        this.subscribers.forEach(function(subscriber) {
          if (subscriber.id == subscriberId) {
            match = subscriber
          }
        });

        return match;
      }
    }
  }
</script>
