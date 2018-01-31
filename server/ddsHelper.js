var opendds = require('opendds');

function DataReader() {
  this.valveReader = null;
  this.factory = null;
  this.library = null;
}

DataReader.prototype.initializeDds = function() {
  this.factory 
  = opendds.initialize("-DCPSConfigFile ./rtps_disc.ini");
  this.library = opendds.load("./idl/libOpenDDS_monitor");
  if (!this.library) {
    throw new Error("Could not open type support library");
  }
  participant = this.factory.create_participant(23);
};

module.exports = DataReader;
