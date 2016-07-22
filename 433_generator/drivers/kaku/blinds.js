'use strict';

const Kaku = require('./kaku');

module.exports = class Blinds extends Kaku {
	updateRealtime(device, state, oldState) {
		if (Number(state.state) !== Number(oldState.state)) {
			if (Number(state.state)) {
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
				if (Number(this.getState(device))) {
					callback(null, 'up');
				} else {
					callback(null, 'down');
				}
			},
			set: (device, state, callback) => {
				switch (state) {
					case 'up':
						this.send(device, { state: 1 }, callback);
						break;
					case 'down':
						this.send(device, { state: 0 }, callback);
						break;
					default:
						callback(null, null);
				}
			},
		};

		return exports;
	}
};
