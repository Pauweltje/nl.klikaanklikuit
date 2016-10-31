'use strict';

const Remote = require('./remote');

module.exports = class WallSwitch extends Remote {
	onTriggerReceived(callback, args, state) {
		const settings = this.getSettings(args.device);
		if (settings.rotated === '180') {
			if (args.unit === '10') {
				args.unit = '11';
			} else if (args.unit === '11') {
				args.unit = '10';
			} else if (args.unit === '00') {
				args.unit = '01';
			} else if (args.unit === '01') {
				args.unit = '00';
			}
		}
		super.onTriggerReceived(callback, args, state);
	}

	onActionSend(callback, args) {
		const settings = this.getSettings(args.device);
		if (settings.rotated === '180') {
			if (args.unit === '10') {
				args.unit = '11';
			} else if (args.unit === '11') {
				args.unit = '10';
			} else if (args.unit === '00') {
				args.unit = '01';
			} else if (args.unit === '01') {
				args.unit = '00';
			}
		}
		super.onActionSend(callback, args);
	}

};
