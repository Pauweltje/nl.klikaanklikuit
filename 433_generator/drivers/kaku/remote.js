'use strict';

const Kaku = require('./kaku');
const Default = require('../../../drivers/lib/drivers/default');

module.exports = class Remote extends mix(Kaku).with(Default) {
	payloadToData(payload) { // Convert received data to usable variables
		const data = super.payloadToData(payload);
		if (!data) return data;

		data.id = data.address;
		return data;
	}

	onTriggerReceived(callback, args, state) {
		if (args.unit === 'g') {
			args.unit = '00';
			args.group = 1;
			delete args.channel;
		} else {
			args.group = 0;
		}
		super.onTriggerReceived(callback, args, state);
	}

	onActionSend(callback, args) {
		if (args.unit === 'g') {
			args.unit = '00';
			args.group = 1;
			args.channel = '00';
		} else {
			args.group = 0;
		}
		super.onActionSend(callback, args);
	}
};
