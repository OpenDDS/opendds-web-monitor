var opendds = require('opendds');
var events = require('../eventConfig');

function DataReader() {
  this.factory = null
  this.library = null
  this.participant = null
  this.topic = null
}

DataReader.prototype.subscribe = function(io) {
  var qos = {     
    DataReaderQos: { durability: "TRANSIENT_LOCAL_DURABILITY_QOS" }
  }
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Valve',
      'Nexmatix::ValveData',
      qos,
      function(dr, sinfo, sample) {
        console.log(sample);
        io.emit(events.subscribe, sample);
      }
  )
}

DataReader.prototype.initializeDR = function() {
  this.factory = opendds.initialize("-DCPSConfigFile ./rtps_disc.ini");
  //load pre-compiled library
  this.library = opendds.load("lib/libNexmatix");
  if (!this.library) {
    throw new Error("Could not open support library, make sure idl is compile/path is correct.");
  }
  //initialize participant with opendds module
  this.participant = this.factory.create_participant(23);
}

module.exports = DataReader;
