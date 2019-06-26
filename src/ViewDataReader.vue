<template>
  <div>
    <div class="inbox-head">
      <h3>View Data Reader</h3>
    </div>

    <br>

    <div class="container">
      <h4 class="list-group-item-heading">{{ dataReader.name }}</h4>
    </div>
  </div>
</template>

<script>
  import dummy_datareaders from './data/dummy_datareaders'

  export default {
    data() {
      return {
        dataReaders: dummy_datareaders,
        dataReader: null
      }
    },
    created() {
      let dataReaderId = this.$route.params.dataReaderId;
      this.dataReader = this.getDataReader(dataReaderId);
    },
    methods: {
      getDataReader(dataReaderId) {
        let match = null;

        this.dataReaders.forEach(function(dataReader) {
          if (dataReader.id == dataReaderId) {
            match = dataReader
          }
        });

        return match;
      }
    }
  }
</script>
