var opendds = require('opendds');

function DataReader() {
  this.factory = null
  this.library = null
  this.participant = null
  this.topic = null
}

DataReader.prototype.subscribe = function() {
  var qos = {     
    DataReaderQos: { durability: "TRANSIENT_LOCAL_DURABILITY_QOS" }
  }
  this.topic = this.participant.subscribe(
      'Valve',
      'Nexmatix::ValveData',
      qos,
      function(dr, sinfo, sample) {
        console.log(sample);
      }
  )
}

DataReader.prototype.initializeDR = function() {
  this.factory = opendds.initialize("-DCPSConfigFile ./rtps_disc.ini");
  this.library = opendds.load("lib/libNexmatix");
  if (!this.library) {
    throw new Error("Could not open support library, make sure idl is compile/path is correct.");
  }
  this.participant = this.factory.create_participant(23);
}

module.exports = DataReader;
