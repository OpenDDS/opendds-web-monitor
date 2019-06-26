<template>
  <div>
    <div class="inbox-head">
      <h3>Data Readers</h3>
    </div>
    <br>

    <div class="container">
      <div class="thumbnail col-xs-2" v-for="dataReader in dataReaders">
        <h4 class="list-group-item-heading">{{ dataReader.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import dummy_dataReaders from './data/dummy_datareaders'

  export default {
    data () {
      return {
        dataReaders: dummy_dataReaders
      }
    }
  }
</script>
