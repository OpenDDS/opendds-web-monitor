<template>
  <div>
    <div class="inbox-head">
      <h3>Data Writers</h3>
    </div>
    <br>

    <div class="container">
      <div class="thumbnail col-xs-2" v-for="dataWriter in dataWriters">
        <router-link :to="{name: 'viewDataWriter', params: {dataWriterId: dataWriter.id}}" tag="h4" class="group inner list-group-item-heading">
          <a>{{ dataWriter.name }}</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_dataWriters from './data/dummy_datawriters'

  export default {
    data () {
      return {
        dataWriters: dummy_dataWriters
      }
    }
  }
</script>
