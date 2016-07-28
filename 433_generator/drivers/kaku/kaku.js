'use strict';

const DefaultDriver = require('../../../drivers/lib/driver');

module.exports = class Kaku extends DefaultDriver {
	constructor(config) {
		super(config);
		this.on('frame', this.updateState.bind(this));
		this.on('new_state', this.updateRealtime.bind(this));
		this.on('new_pairing_device', device => this.updateState(device.data));
	}

	generateData() {
		const data = {
			address: Math.random().toString(2).substr(2, 26),
			group: 0,
			channel: Math.random().toString(2).substr(2, 2),
			unit: Math.random().toString(2).substr(2, 2),
			state: 0,
		};
		data.id = `${data.address}:${data.channel}:${data.unit}`;
		return data;
	}

	payloadToData(payload) { // Convert received data to usable variables
		if (payload.length === 32) {
			const data = {
				address: this.bitArrayToString(payload.slice(0, 26)),
				group: payload[26],
				channel: this.bitArrayToString(payload.slice(28, 30)),
				unit: this.bitArrayToString(payload.slice(30, 32)),
				state: payload[27],
			};
			data.id = `${data.address}:${data.channel}:${data.unit}`;
			return data;
		}
		return null;
	}

	dataToPayload(data) {
		if (
			data &&
			data.address && data.address.length === 26 &&
			data.channel && data.channel.length === 2 &&
			data.unit && data.unit.length === 2 &&
			typeof data.group !== 'undefined' &&
			typeof data.state !== 'undefined'
		) {
			const address = this.bitStringToBitArray(data.address);
			const channel = this.bitStringToBitArray(data.channel);
			const unit = this.bitStringToBitArray(data.unit);
			return address.concat(Number(data.group), Number(data.state), channel, unit);
		}
		return null;
	}

	generateDevice(data) {
		data.group = 0;
		data.state = Number(data.state) ? 1 : 0;
		delete data.dim;
		return super.generateDevice(data);
	}

	updateState(frame) {
		this.setState(frame.id, Object.assign({}, this.getState(frame.id), frame));
	}

	updateRealtime(device, state, oldState) {
		if (Boolean(Number(state.state)) !== Boolean(Number(oldState.state))) {
			this.realtime(device, 'onoff', Boolean(Number(state.state)));
		}
	}

	getExports() {
		const exports = super.getExports();
		exports.capabilities = exports.capabilities || {};
		exports.capabilities.onoff = {
			get: (device, callback) => callback(null, Boolean(Number(this.getState(device).state))),
			set: (device, state, callback) => this.send(device, { state: state ? 1 : 0 }, () => callback(null, state)),
		};
		return exports;
	}
};
