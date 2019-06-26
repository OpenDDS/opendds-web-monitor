<template>
  <div>
    <div class="inbox-head">
      <h3>Data Writers</h3>
    </div>
    <br>

    <div class="container">
      <div class="thumbnail col-xs-2" v-for="dataWriter in dataWriters">
        <h4 class="list-group-item-heading">{{ dataWriter.name }}</h4>
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
