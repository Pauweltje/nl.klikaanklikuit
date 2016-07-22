var deviceList = [];
var lastUpdated = [];
var windowcoverings_timeout;
var kaku = {};

module.exports = {
	init: function(kakuJS){
		kaku = kakuJS
	},

	get: function(device_data){
		return getDeviceById(device_data);
	},

	add: function(device_data){
		console.log('adding', device_data);
		if(device_data.deviceType == 'doorbell'){
			Homey.manager('insights').createLog( device_data.id, {
			    label: {
			        en: 'Doorbell Usage'
			    },
			    type: 'boolean',
			    chart: 'stepLine' // prefered, or default chart type. can be: line, area, stepLine, column, spline, splineArea, scatter
			}, function callback(err , success){
			    if( err ) return Homey.error(err);
			    Homey.manager('insights').createEntry( device_data.id, false, new Date(), function(err, success){
			        if( err ) return Homey.error(err);
			    })
			});
			console.log('created log with id:', device_data.id)
		}
		var device = {
			constant: device_data,
			variables: {}
		};
		device.variables.name   = Homey.manager('settings').get( "" + device.constant.address + device.constant.group + device.constant.channel + device.constant.unit + 'name');
		device.variables.invert = Homey.manager('settings').get( "" + device.constant.address + device.constant.group + device.constant.channel + device.constant.unit + 'invert');
		if(device_data.deviceType == 'windowcovering') device.variables.state = 'idle';
		else device.variables.state  = Homey.manager('settings').get( "" + device.constant.address + device.constant.group + device.constant.channel + device.constant.unit + 'state');
		device.variables.dim    = Homey.manager('settings').get( "" + device.constant.address + device.constant.group + device.constant.channel + device.constant.unit + 'dim');
		deviceList.push(device);
		console.log('KaKu: Added', device.variables.name, '- id:', device.constant.id);
		return;
	},

	remove: function(device_data){
		var device = getDeviceById(device_data); 
		if(device){
			if(device.constant.deviceType == 'doorbell'){
				Homey.manager('insights').deleteLog( device.constant.id, function callback( err, success ){
					if(success == false) console.log('KaKu: Error removing log');
					else console.log('KaKu: removed log');
				});
			}
			deviceList.splice(deviceList.indexOf(device_data), 1);
			console.log('KaKu: Removed', device.variables.name, '- id:' ,device.constant.id);
			console.log('KaKu: remaining devices:', deviceList);
		}
		return;
	},

	update: function(self, device_data, state, driver){
		var toUpdate = getDevicesByAddress(device_data).concat(getDevicesByAddressAndUnit(device_data));
		toUpdate.forEach(function(device){
			if(device.constant.deviceType == driver){
				if(state > 0 && state < 1 && device.constant.deviceType == 'dimmer'){
					kaku.capabilities.onoff.get(device.constant, function(err, state){
						if(!state) {
							self.realtime(device.constant, 'onoff', true); 
						}
					});
					self.realtime(device.constant, 'dim', state); 
					device.variables.dim = state;
					device.variables.state = true;
					Homey.manager('settings').set( "" + device.constant.address + device.constant.group + device.constant.channel + device.constant.unit + 'dim', device.variables.dim );
					Homey.manager('settings').set( "" + device.constant.address + device.constant.group + device.constant.channel + device.constant.unit + 'state', true );
				}else if(device.constant.deviceType == 'windowcovering'){
					if(!(state == 'up' || state == 'idle' || state == 'down')){
						if(device.variables.invert) state = !state;
						state = state ? 'up' : 'down';
						if(state == device.variables.state) state = 'idle';
					}
					self.realtime(device.constant, 'windowcoverings_state', state);
					device.variables.state = state;
					Homey.manager('settings').set( "" + device_data.address + device_data.group + device_data.channel + device_data.unit + 'state', state );
					/*if(remoteFlag){
						clearTimeout(windowcoverings_timeout);
						if(state != 'idle'){
							windowcoverings_timeout = setTimeout(function(){ 
								console.log('setidle', device.constant.id);
								//self.realtime(device.constant, 'windowcoverings_state', 'idle');
								//kaku.capabilities.windowcoverings_state.set(device.constant, "idle", function(err, state){});
								module.exports.update(self, device.constant, 'idle', 'windowcovering');
							}, 1000);
						}
					}*/
					
				}else if(device.constant.deviceType != 'remote' && device.constant.deviceType != 'wallSwitch' && device.constant.deviceType != 'doorbell'){
					self.realtime(device.constant, device.constant.capability ? device.constant.capability : 'onoff', state)
					device.variables.state = state;
					Homey.manager('settings').set( "" + device.constant.address + device.constant.group + device.constant.channel + device.constant.unit + 'state', device.variables.state );
				}else if(device.constant.deviceType == 'doorbell' && state == true){
					console.log('creating entry for log with id:', device.constant.id);
					Homey.manager('insights').createEntry( device.constant.id, true, new Date(), function(err, success){
				        if( err ) return Homey.error(err);
				    });
				    setTimeout(function(){
				    	Homey.manager('insights').createEntry( device.constant.id, false, new Date(), function(err, success){
					        if( err ) return Homey.error(err);
					    })
				    }, 3000);
				}
			}
		});
		return toUpdate;
	},

	updateInvert: function(device_data, invert){
		Homey.manager('settings').set( "" + device_data.address + device_data.group + device_data.channel + device_data.unit + 'invert', invert );
		getDevicesByAddress(device_data).concat(getDevicesByAddressAndUnit(device_data)).forEach(function(device){
			device.variables.invert = invert;
		});
	},

	updateName: function(device_data, name){
		Homey.manager('settings').set( "" + device_data.address + device_data.group + device_data.channel + device_data.unit + 'name', name );
		getDeviceById(device_data).variables.name = name;
	},

	show: function(){
		console.log('deviceList =\n', deviceList);
		return;
	},

	getSavedTypes: function(device_data){
		var devices = getDevicesByAddress(device_data).concat(getDevicesByAddressAndUnit(device_data));
		var types = devices.reduce(function(types,current) {
			var group = types[current.constant.deviceType];
			if(!group) types[current.constant.deviceType] = group = [];
			group.push(current.constant.deviceType);
			return types;
		},{});
		return types;
	}
};

function getDeviceById(device) { //Filter deviceList for a specific device
	var matches = deviceList.filter(function(d){
		return d.constant.id == device.id; 
	});
	return matches ? matches[0] : null;
}

function getDevicesByAddressAndUnit(device) { //Filter devicelist and return all devices with the same address, channel, unit and group code as given
	var matches = deviceList.filter(function(d){
		return d.constant.address == device.address && d.constant.group == device.group && d.constant.channel == device.channel && d.constant.unit == device.unit
			&& (d.constant.deviceType == "switch" || d.constant.deviceType == "dimmer" || d.constant.deviceType == "doorbell" || d.constant.deviceType == "nightSensor"
			|| d.constant.deviceType == "motionSensor" || d.constant.deviceType == "contactSensor" || d.constant.deviceType == "windowcovering"); 
	});
	return matches ? matches : null;
}

function getDevicesByAddress(device) { //Fiter deviceList and return all devices with the same address as given, this is only used for devices that have mutiple unit codes
	var matches = deviceList.filter(function(d){
		return d.constant.address == device.address && (d.constant.deviceType == "remote" || d.constant.deviceType == "wallSwitch"); 
	});
	return matches ? matches : null;
}
