var flow = require('../depricated/flows.js');
var deviceList = require('../depricated/deviceList.js');
var wireless = require('./wireless.js');
var events = require('events');

var myEvent = new events.EventEmitter();
var initFlag = 1;
var tempdata = {};
var self;
var windowcoverings_timeout;
var driver = 'contactSensor';
var capability = 'alarm_contact';

module.exports = self = {
		init: function( devices, callback ) {
			//Define signal
			if(initFlag){ //Make sure the init functions are only executed once
				initFlag = 0;
				wireless.init(self);
				flow.init(self);
				deviceList.init(self);
				console.log('KaKu: Started');
			}

			//Refresh deviceList
			devices.forEach(function(device){ //Add all devices to our deviceList
				deviceList.add(device);
			});	

			callback();
		},
		
		deleted: function( device_data ) {
			deviceList.remove(device_data);
		},

		settings: function( device_data, newSettingsObj, oldSettingsObj, changedKeysArr, callback ) {
		  	deviceList.updateInvert(device_data, newSettingsObj.invert);
		  	callback(null, true);
		},

		renamed: function( device_data, new_name ) {
		    deviceList.updateName(device_data, new_name);
		},

		received: function(device_data){
			myEvent.emit('newMessage', device_data);
			var updated = deviceList.update(self, device_data, device_data.state, driver);
			if(updated) flow.trigger(device_data, updated, driver);
			return;
		},
		
		capabilities: {
			onoff: {
				get: function( device_data, callback ) {
					var device = deviceList.get(device_data); //Get the device
					callback( null, device.variables.state ? true : false ); //Return state value
				},
				set: function( device_data, state, callback ) {
					console.log('devicedata=', device_data, '\nstate=', state);
					deviceList.update(self, device_data, state, 'switch');
					var types = deviceList.getSavedTypes(device_data);
					if(state){ //This part is a bit weird but needed to avoid a KaKu dimmer going to dim-cycle
						if(types.switch && types.dimmer){
							wireless.sendState(device_data, false);
							wireless.sendState(device_data, true);
						}else if(types.dimmer){
							wireless.sendState(device_data, deviceList.get(device_data).variables.dim);
						}else{
							wireless.sendState(device_data, true);
						}
					}else{
						wireless.sendState(device_data, false);
					}
					callback( null, state ); 		
				}
			},
			dim: {
				get: function( device_data, callback ) {
					var device = deviceList.get(device_data); //Get the device
					callback( null, device.variables.dim); //Return errors and dim value
				},
				set: function( device_data, dim, callback ) {
					var types = deviceList.getSavedTypes(device_data);
					if(dim <= 0.0099){ //Turn the device off when the dimvalue = 0
						deviceList.update(self, device_data, false, 'dimmer')
						wireless.sendState(device_data, false); //Send state command to device
					}else{ //If the dim value is not 0
						if(dim == 1) dim = 0.99;
						deviceList.update(self, device_data, dim, 'dimmer') //Set the dim value
						wireless.sendState(device_data, dim); //Send dim command to device
					}
					callback( null, dim ); //Return error's and dim value	
				}
			},
			windowcoverings_state: {
				get: function( device_data, callback ) {
					var device = deviceList.get(device_data); //Get the device
					callback( null, device.variables.state ); //Todo, make this less hacky --> This will brake with flow conditions <--
				},
				set: function( device_data, state, callback ) {
					updated = deviceList.update(self, device_data, state, 'windowcovering') //Turn on the device
					if(updated) flow.trigger(device_data, updated, 'windowcovering');
					if(state == 'idle') return;
					else if(state == 'up') var onoff = true;
					else if(state == 'down') var onoff = false;
					if(deviceList.get(device_data).variables.invert) onoff = !onoff;
					wireless.sendState(device_data, onoff)
					callback( null, state );	
				}
			},
			alarm_motion: {
				get: function( device_data, callback ) {
					var device = deviceList.get(device_data); //Get device
					callback( null, device.variables.state ? true : false); //Return errors and value
				}
			},
			alarm_night: {
				get: function( device_data, callback ) {
					var device = deviceList.get(device_data);//Get device
					callback( null, device.variables.state ? true : false); //Return errors and value
				}
			},
			alarm_contact: {
				get: function( device_data, callback ) {
					var device = deviceList.get(device_data);//Get device
					callback( null, device.variables.state ? true : false); //Return errors and value
				}
			},
		},

		pair: function( socket ) { //Pair sequence
			console.log('pair start')
			var pairdata = {};

			socket.on('imitate1', function learn( data, callback ){ 
				console.log('pair imitate')
				myEvent.once('newMessage', function(device_data) {	//Listen to payload event once	
				console.log('newMessage')		
					tempdata = device_data;
					tempdata = {
						address: device_data.address,
						channel: device_data.channel,
						unit: device_data.unit,
						group: device_data.group
					}
					pairdata = {
						state: device_data.state,
						dim: device_data.state
					}
					socket.emit('remote_found'); //Send signal to front-end
				});
				callback();
			});
						
			socket.on('generate', function( data, callback ){
				// Generate new device data and send on signal
				var address = [];
				for(var i = 0; i < 26; i++)	address.push(Math.round(Math.random()));	
				address = wireless.bitArrayToString(address);

				var channel = [];
				for(var i = 0; i < 2; i++) channel.push(Math.round(Math.random()));
				channel = wireless.bitArrayToString(channel);

				var unit = [];
				for(var i = 0; i < 2; i++) unit.push(Math.round(Math.random()));
				unit = wireless.bitArrayToString(unit);

				tempdata = { //Store data 
					address: address,
					channel: channel,
					unit   : unit,
					group  : false,
				}
				pairdata = {
					state: true,
					dim: 0
				}
				wireless.sendState(tempdata, true); //Send the on command to the device
				callback(null, tempdata);
			});

			socket.on('test_device', function( data, callback ){
				myEvent.on('newMessage', function(device_data){
			        if(device_data.address == tempdata.address){
			        	if(device_data.unit == tempdata.unit){
			        		if(pairdata.invert) device_data.state = !device_data.state;
			        		if(device_data.state == true) socket.emit('received_on');
							else if(device_data.state == false)	socket.emit('received_off');
			        	}
						socket.emit('received', device_data);		
					}
				});
				callback(null, tempdata);
			});

			socket.on('updateInvert', function( invert ){
				if(invert == "true") invert = true;
				else invert = false;
				pairdata.invert = invert;
				console.log('KaKu: setting invert to', pairdata.invert);
				return;
			});

			socket.on('codeChecker', function( data, callback ){
				myEvent.on('newMessage', function(device_data){
			        device_data.group = device_data.group ? true:false;
			        device_data.state = device_data.state ? "on":"off";
			        socket.emit('codeCheckerReceived', device_data);	
				});
				callback(null, pairdata.state);
			});

			socket.on('sendSignal', function( data, callback ){
				console.log('data=', data);
				if(data.state != 1) data.state = 0;
				if(pairdata.invert) data.state = !data.state;
				if(data.device){
					if(data.device.channel) tempdata.channel = data.device.channel;
					if(data.device.unit) tempdata.unit = data.device.unit; 
					if(data.device.group) tempdata.group = data.device.group;
				}
				wireless.sendState(tempdata, data.state);
				deviceList.update(self, tempdata, data.state);
				callback(null, data.state);
			});

			socket.on('done', function( data, callback ){
				var id = "" + tempdata.address + tempdata.group + tempdata.channel + tempdata.unit + Math.round(Math.random() * 0xFFFF); //Set the id of the device

				tempdata.id = id,
				tempdata.deviceType = driver,
				tempdata.capability = capability

				Homey.manager('settings').set( "" + tempdata.address + tempdata.group + tempdata.channel + tempdata.unit + 'name', __(driver) );
				Homey.manager('settings').set( "" + tempdata.address + tempdata.group + tempdata.channel + tempdata.unit + 'dim', 1 );

				if(driver == "windowcovering"){
					setTimeout(function(){
						Homey.manager('settings').set( "" + tempdata.address + tempdata.group + tempdata.channel + tempdata.unit + 'invert', tempdata.invert );
						self.setSettings( tempdata, { invert: tempdata.invert }, function( err, settings ){ if(err) console.log('KaKu: ERROR', err)});
					}, 8000); // High timeout for bad internet connections
				}
				
				deviceList.add(tempdata);
				//Share data to front end
				callback(null, {
					name: __(driver),
					data: tempdata,
				});
				console.log('adding', tempdata);
			});

			socket.on('disconnect', function(){
				myEvent.removeAllListeners('newMessage');
				return;
			});
		},
	}
