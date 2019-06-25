<template>
  <div>
    <div class="inbox-head">
      <h3>Topics</h3>
    </div>

    <br>

    <div class="container">
      <div class="thumbnail col-xs-2" v-for="topic in topics">
        <router-link :to="{name: 'viewTopic', params: {topicId: topic.id}}" tag="h4" class="group inner list-group-item-heading">
          <a>{{ topic.name }}</a>
        </router-link>
        <div>
            <p># of DataReaders: {{ topic.dataReaders.length}}</p>
            <p># of DataWriters: {{ topic.dataWriters.length}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_topics from './data/dummy_topics'

  export default {
    data () {
      return {
        topics: dummy_topics
      }
    }
  }
</script>
