var opendds = require('opendds');
var events = require('../eventConfig');
var util = require('util');

function DDSObserver() {
  this.factory = null
  this.library = null
  this.participant = null
  this.topic = null
  this.qos = {     
    DDSObserverQos: { durability: "TRANSIENT_LOCAL_DURABILITY_QOS" }
  }
  this.domainID = -999 //domainid constant for monitor.idl
}

// ServiceParticipant subscribe method
// Finds a topic "Service Participant Monitor"
// with key "OpenDDS::DCPS::ServiceParticipantReport"
DDSObserver.prototype.ServiceParticipant = function(io) {
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Service Participant Monitor',
      'OpenDDS::DCPS::ServiceParticipantReport',
      this.qos,
      function(dr, sinfo, sample) {
        console.log("Reclieved ServiceParticipant sample");
        io.emit(events.ServiceParticipant, sample);
      }
  )
}

// DomainParticipant subscribe method
// Finds a topic "Domain Participant Monitor"
// with key "OpenDDS::DCPS::DomainParticipantReport"
DDSObserver.prototype.DomainParticipant = function(io) {
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Domain Participant Monitor',
      'OpenDDS::DCPS::DomainParticipantReport',
      this.qos,
      function(dr, sinfo, sample) {
        console.log("Reclieved DomainParticipant sample");        
        io.emit(events.DomainParticipant, sample);
      }
  )
}

// Topic subscribe method
// Finds a topic "Topic Monitor"
// with key "OpenDDS::DCPS::TopicReport"
DDSObserver.prototype.Topic = function(io) {
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Topic Monitor',
      'OpenDDS::DCPS::TopicReport',
      this.qos,
      function(dr, sinfo, sample) {
        console.log("Reclieved Topic sample");
        io.emit(events.Topic, sample);
      }
  )
}

// Publisher subscribe method
// Finds a topic "Publisher Monitor"
// with key "OpenDDS::DCPS::PublisherReport"
DDSObserver.prototype.Publisher = function(io) {
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Publisher Monitor',
      'OpenDDS::DCPS::PublisherReport',
      this.qos,
      function(dr, sinfo, sample) {
        console.log("Reclieved Publisher sample");
        io.emit(events.Publisher, sample);
      }
  )
}

// Subscriber subscribe method
// Finds a topic "Subscriber Monitor"
// with key "OpenDDS::DCPS::SubscriberReport"
DDSObserver.prototype.Subscriber = function(io) {
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Subscriber Monitor',
      'OpenDDS::DCPS::SubscriberReport',
      this.qos,
      function(dr, sinfo, sample) {
        console.log("Reclieved Subscriber sample");        
        io.emit(events.Subscriber, sample);
      }
  )
}

// DataWriter subscribe method
// Finds a topic "Data Writer Monitor"
// with key "OpenDDS::DCPS::DataWriterReport"
DDSObserver.prototype.DataWriter = function(io) {
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Data Writer Monitor',
      'OpenDDS::DCPS::DataWriterReport',
      this.qos,
      function(dr, sinfo, sample) {
        console.log("Reclieved DataWriter sample");
        io.emit(events.DataWriter, sample);
      }
  )
}

// DataReader subscribe method
// Finds a topic "Data Reader Monitor"
// with key "OpenDDS::DCPS::DataReaderReport"
DDSObserver.prototype.DataReader = function(io) {
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Data Reader Monitor',
      'OpenDDS::DCPS::DataReaderReport',
      this.qos,
      function(dr, sinfo, sample) {
        console.log("Reclieved DataReader sample");        
        io.emit(events.DataReader, sample);
      }
  )
}

// Transport subscribe method
// Finds a topic "Transport Monitor"
// with key "OpenDDS::DCPS::TransportReport"
DDSObserver.prototype.Transport = function(io) {
  //Subscribe to any publishers with defined tags (second param)
  this.topic = this.participant.subscribe(
      'Transport Monitor',
      'OpenDDS::DCPS::TransportReport',
      this.qos,
      function(dr, sinfo, sample) {
        console.log("Reclieved Transport sample");        
        io.emit(events.Transport, sample);
      }
  )
}

// FinalizeDO method
// Initialized OpenDDS node module and loads monitor IDL
// Creates participant of factory. 
DDSObserver.prototype.finalizeDO = function() {
  if(this.factory) {
    console.log("finalizing DDS connection");
    if(this.participant) {
      this.factory.delete_participant(this.participant);
      delete this.participant;
    }
    opendds.finalize(this.factory);
    delete this.factory;
  }
}

// InitializeDO method
// Initialized OpenDDS node module and loads monitor IDL
// Creates participant of factory. 
DDSObserver.prototype.initializeDO = function() {
  this.factory = opendds.initialize('-DCPSInfoRepo localhost:12345');
  //load pre-compiled library
  this.library = opendds.load("idl/libOpenDDS_monitor");
  if (!this.library) {
    throw new Error("Could not open support library, make sure idl is compile/path is correct.");
  }
  // initialize participant with opendds module
  // DomainID is specific to OpenDDS Monitor IDL
  this.participant = this.factory.create_participant(this.domainID);
  // Delete processes before exit
  // SIGINT - terminal (supported by windows) exit e.g. CTRL-C
  var self = this;
  process.on('SIGINT', function() {
    self.finalizeDO();
    process.exit(0);
  });
  // SIGTERM - terminal (not supported by windows) exit e.g. CTRL-C
  process.on('SIGTERM', function() {
    self.finalizeDO();
    process.exit(0);
  });
  // Event triggers from: process.exit(0) 
  process.on('exit', function() {
    console.log("graceful exit");
    self.finalizeDO();
  });
}

module.exports = DDSObserver;
