<template>
  <div>
    <div class="inbox-head">
      <h3>View Publisher</h3>
    </div>

    <br>

    <div class="container">
      <h4 class="list-group-item-heading">{{ publisher.name }}</h4>

    <p><strong>Data Writers</strong></p>
      <div v-for="writer in publisher.dataWriters">
        <p>ID: {{ writer.id }} - {{ writer.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_publishers from './data/dummy_publishers'

  export default {
    data() {
      return {
        publishers: dummy_publishers,
        publisher: null
      }
    },
    created() {
      let publisherId = this.$route.params.publisherId;
      this.publisher = this.getPublisher(publisherId);
    },
    methods: {
      getPublisher(publisherId) {
        let match = null;

        this.publishers.forEach(function(publisher) {
          if (publisher.id == publisherId) {
            match = publisher
          }
        });

        return match;
      }
    }
  }
</script>
