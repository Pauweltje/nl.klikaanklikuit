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
			return callback(
				null,
				this.emit('frame', Object.assign({ id: this.pairingDevice.data.id }, this.getSettings(this.pairingDevice)))
			);
		});
	}

};
