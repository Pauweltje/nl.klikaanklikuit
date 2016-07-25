'use strict';

const Kaku = require('./kaku');

module.exports = class Blinds extends Kaku {
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

	updateRealtime(device, state, oldState) {
		if (Number(state.state) !== Number(oldState.state)) {
			let newState = Number(state.state);
			if (this.getSettings(device).rotated === '180') {
				newState = newState ? 0 : 1;
			}
			if (newState) {
				this.realtime(this.getDevice(device), 'windowcoverings_state', 'up');
			} else {
				this.realtime(this.getDevice(device), 'windowcoverings_state', 'down');
			}
		}
	}

	getExports() {
		const exports = super.getExports();
		exports.capabilities = {};
		exports.capabilities.windowcoverings_state = {
			get: (device, callback) => {
				let state = this.getState(device).state;
				if (this.getSettings(device).rotated === '180') {
					state = Number(state) ? 0 : 1;
				}
				if (state) {
					callback(null, 'up');
				} else {
					callback(null, 'down');
				}
			},
			set: (device, state, callback) => {
				switch (state) {
					case 'up':
						this.send(device, { state: this.getSettings(device).rotated === '180' ? 0 : 1 }, callback);
						break;
					case 'down':
						this.send(device, { state: this.getSettings(device).rotated === '180' ? 1 : 0 }, callback);
						break;
					default:
						callback(null, null);
				}
			},
		};

		return exports;
	}
};
