<template>
  <div>
    <div class="inbox-head">
      <h3>View Data Writer</h3>
    </div>

    <br>

    <div class="container">
      <h4 class="list-group-item-heading">{{ dataWriter.name }}</h4>
    </div>
  </div>
</template>

<script>
  import dummy_datawriters from './data/dummy_datawriters'

  export default {
    data() {
      return {
        dataWriters: dummy_datawriters,
        dataWriter: null
      }
    },
    created() {
      let dataWriterId = this.$route.params.dataWriterId;
      this.dataWriter = this.getDataWriter(dataWriterId);
    },
    methods: {
      getDataWriter(dataWriterId) {
        let match = null;

        this.dataWriters.forEach(function(dataWriter) {
          if (dataWriter.id == dataWriterId) {
            match = dataWriter
          }
        });

        return match;
      }
    }
  }
</script>
