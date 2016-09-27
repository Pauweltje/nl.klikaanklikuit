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

	pair(socket) {
		super.pair(socket);

		socket.on('settings_change', (data, callback) => {
			if (!this.pairingDevice) {
				return callback(new Error('433_generator.error.no_device'));
			}
			this.emit(
				'frame',
				Object.assign(
					{ id: this.pairingDevice.data.id },
					this.getSettings(this.pairingDevice),
					this.getState(this.pairingDevice)
				)
			);
			return callback(null, true);
		});
	}

};
