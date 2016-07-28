var deviceList = [];
var signal;
var initFlag = 1;
var tempdata = {};
var lastTriggered = {};
var events = require('events');

var myEvent = new events.EventEmitter();

function createDriver(driver) {
	var self = {
		init: function( devices, callback ) {
			//Define signal
			if(initFlag){
				initFlag = 0;
				flowInit(self);
				var Signal = Homey.wireless('433').Signal;
				signal = new Signal('kakuold');

				signal.numberToBitArray = function(number, bit_count) {
					var result = [];
					for (var i = 0; i < bit_count; i++)
						result[i] = (number >> i) & 1;
					return result;
				};

				signal.bitArrayToNumber = function(bits) {
					return parseInt(bits.join(""),2);
				};

				signal.bitStringToBitArray = function(str) {
					var result = [];
					for (var i = 0; i < str.length; i++)
						result.push(str.charAt(i) == '1' ? 1 : 0);
					return result;
				};

				signal.bitArrayToString = function(bits) {
					return bits.join("");
				};
				
				signal.register(function( err, success ){
				    if(err != null)	console.log('Kaku old: err', err, 'success', success);
				});

				//Start receiving
				signal.on('payload', function(payload, first){
					if(!first) return;
					console.log(payload);
			        var rxData = parseRXData(payload);
			        console.log('received', rxData);
			        myEvent.emit('newMessage', rxData);
			        lastTriggered = rxData;
			        var devices = getDeviceByAddress(rxData);
		        	devices.forEach(function(device){
						updateDevice(self, device, rxData.onoff);
					});
					var devices = getRemotes(rxData);
		        	devices.forEach(function(device){
						if(device.constant.driver == 'oldRemote'){
							Homey.manager('flow').triggerDevice('oldRemote', null, rxData.onoff, device.constant, function( err, result ){
								if(err) console.log('KaKu: ERROR', err);
							});
						}
					});
				});
				console.log('KaKu old started');
			}

			//Refresh deviceList
			devices.forEach(function(device){
				addDevice(device);
			});
			callback();
		},

		deleted: function( device_data ) {
			console.log('Deleting', __(device_data.driver));
			delete deviceList[deviceList.indexOf(getDeviceById(device_data))];
		},

		capabilities: {
			onoff: {
				get: function( device_data, callback ) {
					var device = getDeviceById(device_data);
					callback( null, device.variables.onoff ? true : false );
				},
				set: function( device_data, onoff, callback ) {
					var devices = getDeviceByAddress(device_data);
					devices.forEach(function(device){
						updateDevice(self, device, onoff)
					});
					sendOnOff(devices[0].constant, onoff);
					callback( null, onoff ? true : false );
				}
			}
		},

		pair: function( socket ) {
			var tempdata = {};

			socket.on('imitate', function learn( data, callback){
				myEvent.once('newMessage', function(device_data){
					tempdata = {
						address: device_data.address,
						channel: device_data.channel,
						unit   : device_data.unit
					}
					Homey.manager('settings').set( "" + device_data.address + device_data.channel + device_data.unit + 'onoff', device_data.onoff );
					socket.emit('remote_found'); //Send signal to front-end
				});
				callback();
			});

			socket.on('manual', function( data, callback){
				var temp = {
					address: numberToBitArray(data.address, 4),
					channel: numberToBitArray((data.button) >> 2, 2),
					unit   : numberToBitArray((data.button) % 4, 2),
				}
				tempdata = {
					address: signal.bitArrayToString([ temp.address[3], temp.address[2], temp.address[1], temp.address[0] ]),
					channel: signal.bitArrayToString([ temp.channel[1], temp.channel[0] ]),
					unit:    signal.bitArrayToString([ temp.unit[1],    temp.unit[0] ])
				}
				Homey.manager('settings').set( "" + tempdata.address + tempdata.channel + tempdata.unit + 'onoff', false );
				callback();
			});

			socket.on('generate', function( data, callback){
				// Generate new device data and send on signal
				tempdata = {
					address: signal.bitArrayToString(generateArray(4)),
					channel: signal.bitArrayToString(generateArray(2)),
					unit   : signal.bitArrayToString(generateArray(2)),
				}
				Homey.manager('settings').set( "" + tempdata.address + tempdata.channel + tempdata.unit + 'onoff', true );
				sendOnOff(tempdata, true);
				callback();
			});

			socket.on('test_device', function( data, callback ){
				myEvent.on('newMessage', function(device_data){
			        if(device_data.address == tempdata.address){
			        	if(device_data.unit == tempdata.unit && device_data.unit == tempdata.unit){
			        		if(device_data.onoff) socket.emit('received_on');
							else socket.emit('received_off');
			        	}
						socket.emit('received', device_data);
					}
				});
				callback(null, tempdata);
			});

			socket.on('sendSignal', function( onoff, callback ){
				if(onoff != true) onoff = false;
				sendOnOff(tempdata, onoff);
				var devices = getDeviceByAddress(tempdata);
				devices.forEach(function(device){
					updateDevice(self, device, 'onoff',onoff);
				});
				callback();
			});

			socket.on('done', function( data, callback ){
				tempdata.id = "" + tempdata.address + tempdata.channel
					+ tempdata.unit + Math.round(Math.random() * 0xFFFF); //id is for self.realtime
				tempdata.driver = driver;
				addDevice(tempdata);

				//Share data to front end
				callback(null, {
					name: __(driver),
					data: tempdata
				});
			});

			socket.on('disconnect', function(){
				myEvent.removeAllListeners('newMessage');
				return;
			});
		},
	};
	return self;
}

function generateArray(size){
	var out = [];
	for(var i = 0; i < size; i++){
		out.push(Math.round(Math.random()));
	}
	return(out);
}

function getDeviceById(deviceIn) {
	var matches = deviceList.filter(function(d){
		return d.constant.id == deviceIn.id;
	});
	return matches ? matches[0] : null;
}

function getDeviceByAddress(deviceIn) {
	var matches = deviceList.filter(function(d){
		return d.constant.address == deviceIn.address && d.constant.channel == deviceIn.channel && d.constant.unit == deviceIn.unit;
	});
	return matches ? matches : null;
}

function getRemotes(deviceIn) {
	var matches = deviceList.filter(function(d){
		return d.constant.address == deviceIn.address;
	});
	return matches ? matches : null;
}

function updateDevice(self, device, onoff){
	Homey.manager('settings').set( "" + device.constant.address + device.constant.channel + device.constant.unit + 'onoff', onoff );
	self.realtime(device.constant, 'onoff', onoff ? true : false);
	device.variables.onoff = onoff;
}

function addDevice(device_data){
	var device = {
		constant: device_data,
		variables: {
			onoff: Homey.manager('settings').get( "" + device_data.address + device_data.channel + device_data.unit + 'onoff')
		}
	}
	deviceList.push(device);
	console.log('added', __(device.constant.driver));
}

function sendOnOff(device, onoff) {
	var frame = new Buffer(signal.bitStringToBitArray(device.address)
		.concat(signal.bitStringToBitArray(device.unit), signal.bitStringToBitArray(device.channel), 0,1,1, onoff ? 1:0));
	signal.tx( frame, function( err, result ){
		if(err != null)console.log('Kaku old: Error:', err);
    });
}

function parseRXData(data) {
	return {
		address: signal.bitArrayToString(data.slice(0, 4)),
		unit   : signal.bitArrayToString(data.slice(4, 6)),
		channel: signal.bitArrayToString(data.slice(6, 8)),
		onoff  : data.slice(11, 12)[0] ? true : false
	};
}

function flowInit(self){
	Homey.manager('flow').on('trigger.oldRemote', function( callback, args, state ){
		if(args.unit == "22") args.channel = "22";
	    if( args.device.address == lastTriggered.address && args.channel == lastTriggered.channel
	    	&& args.unit == lastTriggered.unit && args.state == lastTriggered.onoff) callback( null, true );
		else callback( null, false );
	});
}

module.exports = {
	createDriver: createDriver
};


function numberToBitArray(number, bit_count){
    var result = [];
    for (bit_count > 0; bit_count--;){
        if(number >= Math.pow(2, bit_count)){
        	result.push(1);
        	number = number - Math.pow(2, bit_count);
        }else{
        	result.push(0);
        }
    }
    return result;
};
