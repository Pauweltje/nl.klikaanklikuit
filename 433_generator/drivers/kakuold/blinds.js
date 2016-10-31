'use strict';

const Kaku = require('./kaku');

module.exports = class Blinds extends Kaku {

	updateRealtime(device, state, oldState) {
		let newState = Number(state.state);
		if (this.getSettings(device).rotated === '180') {
			newState = newState ? 0 : 1;
		}
		if (state.state === -1) {
			// ignore
		} else if (oldState.state === -1 || (this.stateTransition !== undefined && state.state === oldState.state)) {
			this.realtime(this.getDevice(device), 'windowcoverings_state', 'idle');
			clearTimeout(this.stateTransitionTimeout);
			this.stateTransition = undefined;
		} else {
			if (!newState) {
				this.realtime(this.getDevice(device), 'windowcoverings_state', 'down');
			} else {
				this.realtime(this.getDevice(device), 'windowcoverings_state', 'up');
			}
			this.stateTransition = state.state;
			clearTimeout(this.stateTransitionTimeout);
			this.stateTransitionTimeout = setTimeout(
				() => {
					this.stateTransition = undefined;
					this.realtime(this.getDevice(device), 'windowcoverings_state', 'idle');
				},
				120000
			);
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
						this.send(device, { state: this.getSettings(device).rotated === '180' ? 0 : 1, idle: false }, callback);
						break;
					case 'down':
						this.send(device, { state: this.getSettings(device).rotated === '180' ? 1 : 0, idle: false }, callback);
						break;
					case 'idle':
						if (this.stateTransition !== undefined) {
							this.setState(device.id, Object.assign({}, this.getState(device.id), { state: -1 }));
							this.send(device, { state: this.stateTransition }, callback);
						} else {
							callback(null, null);
						}
						break;
					default:
						callback(null, null);
				}
			},
		};

		return exports;
	}
};
