'use strict';

const Remote = require('./remote');

module.exports = class WallSwitch extends Remote {
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
