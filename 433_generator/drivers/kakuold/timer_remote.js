'use strict';

const Remote = require('./remote');

module.exports = class TimerRemote extends Remote {

	onTriggerReceived(callback, args, state) {
		if (args.unitchannel) {
			args.unit = args.unitchannel.slice(0, 2);
			args.channel = args.unitchannel.slice(2, 4);
			delete args.unitchannel;
		}
		super.onTriggerReceived(callback, args, state);
	}

	onActionSend(callback, args) {
		if (args.unitchannel) {
			args.unit = args.unitchannel.slice(0, 2);
			args.channel = args.unitchannel.slice(2, 4);
			delete args.unitchannel;
		}
		super.onActionSend(callback, args);
	}
};
