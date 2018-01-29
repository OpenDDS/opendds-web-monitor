var opendds = require('opendds');

function DataReader() {
  this.valveReader = null;
  this.factory = null;
  this.library = null;
}

DataReader.prototype.initializeDds = function() {
  var DOMAIN_ID = 23;
  this.factory = opendds.initialize();
  this.library = opendds.load("./monitor.idl");
  if (!this.library) {
    throw new Error("Could not open type support library");
  }
  this.participant = this.factory.create_participant(DOMAIN_ID);
  // Handle exit gracefully
};


module.exports = DataReader;
