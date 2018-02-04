var DataReader = require('./ddsHelper')
const port = 3333;
var io = require('socket.io').listen(port);
var events = require('../eventConfig');

//connection socket event
io.on(events.connection, function(socket) {
  var address = socket.handshake.address;
  console.log('New connection from ' + address.address + ':' + address.port);
});

//DataReader initialization 
var DataReader = new DataReader();
DataReader.initializeDR();
//subscribe and send over the socket already created
DataReader.subscribe(io);
