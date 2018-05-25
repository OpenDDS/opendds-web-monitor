# PsMonitor
SIUE Senior Project, Publish/Subscribe Monitor. Tasked by OCI to create a new monitoring tool for [OpenDDS](http://opendds.org/) as the existing monitoring tool was outdated and not working. The goal of the project is to provide a more user friendly experience and useful information (graphs, nodes, lists) for both OCI and their clients to have running alongside production OpenDDS environment. 

### SIUE Contributors 
Mitchell Dzurisin, Matt Blough, Alex Hammonds, Brad Francis

## Installation:
### Pre-Requirements:
1) [Node.JS](https://nodejs.org/en/)

2) npm should be included in Node.JS install.

3) Must have OpenDDS install and compiled (set environment varibles before next step)

4) type 'npm install' into command line, then 'ng serve'

### monitor compile (server connection required)
ng serve
### monitor test file (no server connection required)
npm run start:fake

### Compile support libraries
$ cd server
### set environment variables (for linux)
$ source ../OpenDDS/setenv.sh

$ export V8_ROOT=/usr #for linux

$ export NAN_ROOT=`pwd`/node_modules/nan

$ npm install

$ mwc.pl -type gnuace -exclude OpenDDS

$ make

### set environment variables (for windows)
set V8_ROOT=%USERPROFILE%\.node-gyp\6.12.3

set NAN_ROOT=%CD%\node_modules\nan

npm install

mwc.pl -type vc14 -exclude OpenDDS

msbuild iiot_demo_opendds.sln /p:Platform=x64;Configuration=Release

### Compile server (Linux)
$ DCPSInfoRepo -ORBListenEndpoints iiop://:12345 &

$ node main.js

After server is running it will pick up running OpenDDS processes running with the monitor flag set. 
### Testing
Refer to IIOT_Testing.md
