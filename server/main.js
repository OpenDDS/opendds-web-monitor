var ddsReader = require('./ddsHelper')
const port = 3333;
var io = require('socket.io').listen(port);

io.on('connection', function(socket) {
  var address = socket.handshake.address;
  console.log('New connection from ' + address.address + ':' + address.port);
});

var dataReader = new ddsReader();
// Split out DDS args
// var ddsArgs = process.argv.slice(process.argv.indexOf(__filename) + 1);
dataReader.initializeDds();

// dataReader.subscribe(function (sample) {
//   console.log("sample received");
//   io.emit('valve', sample);
// });
