# PsMonitor Testing

## Test with [IIoT Demo](https://github.com/oci-labs/iiot-demo-opendds)

Follow instructions in their README for building this demo until steps 3 & 4. Follow this instead:

### Server (Subscriber)

$ source ./OpenDDS/setenv.sh  
$ cd server
$ npm install
$ node main.js -DCPSConfigFile ../rtps_disc.ini -DCPSMonitor 1 -DCPSInfoRepo localhost:12345

### Publisher

$ source ../OpenDDS/setenv.sh  
$ DCPSInfoRepo &
$ bin/NexmatixMockPublisher -DCPSConfigFile rtps_disc.ini -DCPSMonitor 1 -DCPSInfoRepo localhost:12345

