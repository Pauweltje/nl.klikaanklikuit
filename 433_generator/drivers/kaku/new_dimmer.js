'use strict';

const Dimmer = require('./dimmer');

module.exports = class NewDimmer extends Dimmer {

	getExports() {
		const exports = super.getExports();
		let onOffReject = (() => null);

		exports.capabilities = exports.capabilities || {};
		exports.capabilities.onoff = {
			get: (device, callback) => callback(null, Boolean(Number(this.getState(device).state))),
			set: (device, state, callback) => {
				onOffReject();
				new Promise((resolve, reject) => {
					onOffReject = reject;
					setTimeout(resolve, 150);
				}).then(() => {
					this.send(device, { state: Number(state) }, () => callback(null, state));
				}).catch(() => {
					callback(null, this.getState(device).state);
				});
			},
		};
		exports.capabilities.dim = {
			get: (device, callback) => {
				const state = this.getState(device);
				callback(null, typeof state.dim === 'number' ? state.dim : Number(state.state));
			},
			set: (device, state, callback) => {
				onOffReject();
				this.send(device, { dim: state }, () => callback(null, state));
			},
		};
		return exports;
	}
};
