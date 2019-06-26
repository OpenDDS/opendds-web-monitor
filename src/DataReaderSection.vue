<template>
  <div>
    <div class="inbox-head">
      <h3>Data Readers</h3>
    </div>
    <br>

    <div class="container">
      <div class="thumbnail col-xs-2" v-for="dataReader in dataReaders">
        <router-link :to="{name: 'viewDataReader', params: {dataReaderId: dataReader.id}}" tag="h4" class="group inner list-group-item-heading">
          <a>{{ dataReader.name }}</a>
        </router-link>
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
