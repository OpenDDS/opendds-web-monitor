var DDSObserver = require('./ddsHelper')
const port = 8081;
var io = require('socket.io').listen(port);
var events = require('../eventConfig');

//connection socket event
io.on(events.connection, function(socket) {
  var address = socket.handshake.address;
  console.log('New connection from ' + address.address + ':' + address.port);
});

//DDSObserver initialization 
var DDSObserver = new DDSObserver();
DDSObserver.initializeDO();
//Create event for each possible monitor type
DDSObserver.ServiceParticipant(io);
DDSObserver.DomainParticipant(io);
DDSObserver.Topic(io);
DDSObserver.Publisher(io);
DDSObserver.Subscriber(io);
DDSObserver.DataWriter(io);
DDSObserver.DataReader(io);
DDSObserver.Transport(io);
