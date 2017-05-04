'use strict';

const Kaku = require('./kaku');
const Default = require('../../../drivers/lib/drivers/default');

module.exports = class DimmingRemote extends mix(Kaku).with(Default) {

	payloadToData(payload) { // Convert received data to usable variables
		if (payload && payload.length === 32 && payload.indexOf(2) === -1) {
			const data = super.payloadToData(payload);
			if (!data) return data;

			data.id = data.address;
			data.isdim = false;

			return data;
		} else if (
			payload &&
			payload.length === 36 &&
			payload.slice(0, 26).indexOf(2) === -1 &&
			payload.slice(28, 36).indexOf(2) === -1 &&
			payload[27] === 2
		) {
			const data = {
				address: this.bitArrayToString(payload.slice(0, 26)),
				group: payload[26],
				channel: this.bitArrayToString(payload.slice(28, 30)),
				unit: this.bitArrayToString(payload.slice(30, 32)),
				state: 1,
				dim: this.bitArrayToNumber(payload.slice(32, 36)) / 15,
				isdim: true,
			};

			data.id = data.address;

			const currState = this.getState(data.id);
			if (currState && !isNaN(currState.dim)) {
				if (currState.dim < data.dim || data.dim === 1) {
					data.dimup = true;
				} else if (currState.dim > data.dim || data.dim === 0) {
					data.dimup = false;
				} else {
					data.dimup = currState.dimup;
				}
			} else {
				data.dimup = undefined;
			}

			return data;
		}
		return null;
	}

	dataToPayload(data) {
		console.log('payloadToData', data);
		if (
			data &&
			data.address && data.address.length === 26 &&
			data.channel && data.channel.length === 2 &&
			data.unit && data.unit.length === 2 &&
			typeof data.group !== 'undefined' &&
			(
				(typeof data.state !== 'undefined' && Number(data.state) !== 2) ||
				(typeof data.dim !== 'undefined' && Number(data.dim) >= 0 && Number(data.dim) <= 1) ||
				(data.dim === 'up' || data.dim === 'down')
			)
		) {
			const address = this.bitStringToBitArray(data.address);
			const channel = this.bitStringToBitArray(data.channel);
			const unit = this.bitStringToBitArray(data.unit);
			// Calculate dim value
			if (data.dim) {
				let dim;
				if (typeof data.dim === 'string') {
					dim = data.dim === 'up' ? [1, 1, 1, 1] : [0, 0, 0, 0];
				} else {
					dim = this.numberToBitArray(Math.round(Math.min(1, Math.max(0, data.dim)) * 15), 4);
				}
				return address.concat(data.group ? 1 : 0, 2, channel, unit, dim);
			}
			return address.concat(Number(data.group), Number(data.state), channel, unit);
		}
		return null;
	}


	onTriggerReceived(callback, args, state) {
		console.log('onTriggerReceived before', args, state);
		if (args.channel === 'g') {
			args.channel = '00';
			args.group = 1;
		} else {
			args.group = 0;
		}
		if (args.state && isNaN(Number(args.state))) {
			args.isdim = true;
			args.dimup = args.state === 'dimup';
			delete args.state;
		} else {
			args.isdim = false;
		}
		console.log('onTriggerReceived', args, state);
		super.onTriggerReceived(callback, args, state);
	}

	onActionSend(callback, args) {
		// Should implement when remotes get send cards.
		const err = new Error('onActionSend not implemented for dimmer_remote');
		this.logger.error(err);
		callback(err);
	}
};
