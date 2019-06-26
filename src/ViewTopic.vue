<template>
  <div>
    <div class="inbox-head">
      <h3>View Topic</h3>
    </div>

    <br>

    <div class="container">
      <h4 class="list-group-item-heading">{{ topic.name }}</h4>

      <p><strong>Data Readers</strong></p>
      <div v-for="reader in topic.dataReaders">
        <router-link :to="{name: 'viewDataReader', params: {dataReaderId: reader.id}}" tag="p" class="group inner list-group-item-heading">
          <p>ID: {{ reader.id }} - <a>{{ reader.name }}</a></p>
        </router-link>
      </div>

      <p><strong>Data Writers</strong></p>
      <div v-for="writer in topic.dataWriters">
        <router-link :to="{name: 'viewDataWriter', params: {dataWriterId: writer.id}}" tag="p" class="group inner list-group-item-heading">
          <p>ID: {{ writer.id }} - <a>{{ writer.name }}</a></p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_topics from './data/dummy_topics'

  export default {
    data() {
      return {
        topics: dummy_topics,
        topic: null
      }
    },
    created() {
      let topicId = this.$route.params.topicId;
      this.topic = this.getTopic(topicId);
    },
    methods: {
      getTopic(topicId) {
        let match = null;

        this.topics.forEach(function(topic) {
          if (topic.id == topicId) {
            match = topic
          }
        });

        return match;
      }
    }
  }
</script>
