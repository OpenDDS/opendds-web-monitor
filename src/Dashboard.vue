<template>
  <div>
    <div class="inbox-head">
      <h3>Dashboard</h3>
    </div>

    <br>

    <div class="container">
      <div class="thumbnail col-xs-2">
        <router-link to="/topics" tag="h4"  class="group inner list-group-item-heading">
          <a>Topics</a>
        </router-link>
        <div>
          <p>#: {{ topics.length}} </p>
        </div>
      </div>

      <div class="thumbnail col-xs-2">
        <router-link to="/publishers" tag="h4"  class="group inner list-group-item-heading">
          <a>Publishers</a>
        </router-link>
        <div>
          <p>#: {{ publishers.length }} </p>
        </div>
      </div>

      <div class="thumbnail col-xs-2">
        <router-link to="/publishers" tag="h4"  class="group inner list-group-item-heading">
          <a>Subscribers</a>
        </router-link>
        <div>
          <p>#: {{ subscribers.length }} </p>
        </div>
      </div>

      <div class="thumbnail col-xs-2">
        <router-link to="/datawriters" tag="h4"  class="group inner list-group-item-heading">
          <a>Data Writers</a>
        </router-link>
        <div>
          <p>#: {{ dataWriters.length}} </p>
        </div>
      </div>

      <div class="thumbnail col-xs-2">
        <router-link to="/datareaders" tag="h4"  class="group inner list-group-item-heading">
          <a>Data Readers</a>
        </router-link>
        <div>
          <p>#: {{ dataReaders.length}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_topics from './data/dummy_topics'
  import dummy_publishers from './data/dummy_publishers'
  import dummy_subscribers from './data/dummy_subscribers'
  import dummy_dataWriters from './data/dummy_datawriters'
  import dummy_dataReaders from './data/dummy_datareaders'

  export default {
    data () {
      return {
        topics: dummy_topics,
        publishers: dummy_publishers,
        subscribers: dummy_subscribers,
        dataWriters: dummy_dataWriters,
        dataReaders: dummy_dataReaders
      }
    }
  }
</script>
