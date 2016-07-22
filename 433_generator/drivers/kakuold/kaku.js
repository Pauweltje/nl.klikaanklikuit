'use strict';

const DefaultDriver = require('../../../drivers/lib/driver');
const SignalManager = Homey.wireless('433').Signal;

module.exports = class Kaku extends DefaultDriver {
	constructor(config) {
		super(config);
		this.on('frame', this.updateState.bind(this));
		this.on('new_state', this.updateRealtime.bind(this));
		this.on('new_pairing_device', device => this.updateState(device.data));
	}

	generateData() {
		const data = {
			address: Math.random().toString(2).substr(2, 4),
			channel: Math.random().toString(2).substr(2, 2),
			unit: Math.random().toString(2).substr(2, 2),
			undef: [0, 1, 1],
			state: 0,
		};
		data.id = `${data.address}:${data.channel}:${data.unit}`;
		return data;
	}

	payloadToData(payload) { // Convert received data to usable variables
		if (
			payload &&
			payload.length === 12 &&
			(
				payload.indexOf(2) === -1 ||
				(
					payload.slice(0, 4).indexOf(2) === -1 &&
					payload.slice(4, 8).indexOf(0) === -1 &&
					payload.slice(4, 8).indexOf(1) === -1 &&
					payload.slice(8, 12).indexOf(2) === -1
				)
			)
		) {
			const data = {
				address: SignalManager.bitArrayToString(payload.slice(0, 4)),
				channel: SignalManager.bitArrayToString(payload.slice(6, 8)),
				unit: SignalManager.bitArrayToString(payload.slice(4, 6)),
				group: 0,
				undef: payload.slice(8, 11),
				state: payload[11],
			};
			if (data.channel === '22') {
				data.channel = '00';
				data.unit = '00';
				data.group = 1;
			}
			data.id = `${data.address}:${data.channel}:${data.unit}`;
			return data;
		}
		return null;
	}

	dataToPayload(data) {
		if (
			data &&
			data.address && data.address.length === 4 &&
			data.channel && data.channel.length === 2 &&
			data.unit && data.unit.length === 2 &&
			data.undef && data.undef.length === 3 &&
			typeof data.state !== 'undefined'
		) {
			const address = SignalManager.bitStringToBitArray(data.address);
			const channel = Number(data.group) ? [2, 2] : data.channel.split('').map(Number);
			const unit = Number(data.group) ? [2, 2] : data.unit.split('').map(Number);
			return address.concat(unit, channel, data.undef, Number(data.state));
		}
		return null;
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
			set: (device, state, callback) => this.send(device, { state: state ? 1 : 0 }, callback),
		};
		return exports;
	}
};
