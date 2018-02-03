var DataReader = require('./ddsHelper')
const port = 3333;
var io = require('socket.io').listen(port);
var events = require('../eventConfig');

io.on(events.connection, function(socket) {
  var address = socket.handshake.address;
  console.log('New connection from ' + address.address + ':' + address.port);
});

var DataReader = new DataReader();
// Split out DDS args

DataReader.initializeDR();

DataReader.subscribe();
