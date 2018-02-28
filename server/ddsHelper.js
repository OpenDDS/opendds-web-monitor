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
  this.domainID = -999
}

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

DDSObserver.prototype.initializeDR = function() {
  this.factory = opendds.initialize('-DCPSInfoRepo localhost:12345');
  //load pre-compiled library
  this.library = opendds.load("idl/libOpenDDS_monitor");
  if (!this.library) {
    throw new Error("Could not open support library, make sure idl is compile/path is correct.");
  }
  //initialize participant with opendds module
  this.participant = this.factory.create_participant(this.domainID);
}

module.exports = DDSObserver;
