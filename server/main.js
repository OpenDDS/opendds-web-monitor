//
// main.js
// Monitor Server: Spawns events from ddshelper.js
// socket.io listens over port 8081
// Author: Mitchell Dzurisin
//

var DDSObserver = require('./ddsHelper')
const port = 8081;
var io = require('socket.io').listen(port);
var events = require('../eventConfig');

//connection socket event
io.on(events.connection, function(socket) { });

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
