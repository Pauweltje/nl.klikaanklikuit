var lastTriggered = {};
var kaku= {};

module.exports = {
	init: function(kakuJS){
		kaku = kakuJS

		//Triggers
	    Homey.manager('flow').on('trigger.wallSwitch', function( callback, args, state){
		    if( args.device.address == lastTriggered.address && args.device.group == lastTriggered.group && args.device.channel == lastTriggered.channel
		    	&& args.unit == lastTriggered.unit && args.state == lastTriggered.state) callback( null, true );
			else callback( null, false );
		});

		Homey.manager('flow').on('trigger.remote', function( callback, args, state ){
			if(args.unit == "22") {	args.unit = "00"; args.channel = "00"; args.device.group = true; }
		    if( args.device.address == lastTriggered.address && args.device.group == lastTriggered.group && args.channel == lastTriggered.channel
		    	&& args.unit == lastTriggered.unit && args.state == lastTriggered.state) callback( null, true );
			else callback( null, false );
		});

		Homey.manager('flow').on('trigger.doorbell', function( callback, args, state ){
			if(lastTriggered.state) callback( null, true );
			else callback( null, false );
		});

		Homey.manager('flow').on('trigger.windowcovering', function( callback, args ){
			kaku.capabilities.windowcoverings_state.get(args.device, function(err, state){
			    if( args.device.address == lastTriggered.address && args.device.group == lastTriggered.group && args.device.channel == lastTriggered.channel
			    	&& args.device.unit == lastTriggered.unit && state == args.state) callback( null, true );
				else callback( null, false );
			});
		});

		//Conditions
		Homey.manager('flow').on('condition.motionSensorOn', function( callback, args ){
		   	kaku.capabilities.alarm_motion.get(args.device, function(err, state){
		    	if(state) callback( null, true );
		    	else callback( null, false );
		    });
		});

		Homey.manager('flow').on('condition.nightSensorOn', function( callback, args ){
		    kaku.capabilities.alarm_night.get(args.device, function(err, state){
		    	if(state) callback( null, true );
		    	else callback( null, false );
		    });
		});

		Homey.manager('flow').on('condition.contactSensorOn', function( callback, args ){
		    kaku.capabilities.alarm_contact.get(args.device, function(err, state){
		    	if(state) callback( null, true );
		    	else callback( null, false );
		    });
		});

		//Actions
		Homey.manager('flow').on('action.windowcoveringUp', function( callback, args ){
			kaku.capabilities.windowcoverings_state.set(args.device, "up", function(err, state){
				if(err) callback( err, false );
				else callback( null, true );

			})
		});

		Homey.manager('flow').on('action.windowcoveringDown', function( callback, args ){
			kaku.capabilities.windowcoverings_state.set(args.device, "down", function(err, state){
				if(err) callback( err, false );
				else callback( null, true );
			})
		});
		return;
	},

	trigger: function(device_data, devices, driver){
		lastTriggered = device_data;
		devices.forEach(function(device){
			if(device.constant.deviceType == driver){
				if(device.constant.deviceType == 'remote' || device.constant.deviceType == 'wallSwitch'){
					Homey.manager('flow').triggerDevice(device.constant.deviceType, null, device.variables.state , device.constant, function( err, result ){
						if(err) console.log('KaKu: ERROR', err);
					});
				}else if(device.constant.deviceType == 'doorbell' && device_data.state){
					Homey.manager('flow').triggerDevice(device.constant.deviceType, null, device.variables.state , device.constant, function( err, result ){
						if(err) console.log('KaKu: ERROR', err);
					});
				}
			}
		});
	}
};
