var opendds = require('opendds');
var events = require('../eventConfig');

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
        console.log(sample);
        io.emit(events.subscriber, sample);
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
        console.log(sample);
        io.emit(events.subscriber, sample);
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
        console.log(sample);
        io.emit(events.subscriber, sample);
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
        console.log(sample);
        io.emit(events.subscriber, sample);
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
        console.log(sample);
        io.emit(events.subscriber, sample);
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
        console.log(sample);
        io.emit(events.subscriber, sample);
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
        console.log(sample);
        io.emit(events.subscriber, sample);
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
        console.log(sample);
        io.emit(events.subscriber, sample);
      }
  )
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
}

module.exports = DDSObserver;
