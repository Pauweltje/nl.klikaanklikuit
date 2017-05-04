'use strict';

const Kaku = require('./kaku');
const Dimmable = require('../../../drivers/lib/drivers/dimable');

module.exports = class Dimmer extends mix(Kaku).with(Dimmable) {
	payloadToData(payload) { // Convert received data to usable variables
		if (payload && payload.length === 32 && payload.indexOf(2) === -1) {
			return super.payloadToData(payload);
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
			};

			data.id = `${data.address}:${data.channel}:${data.unit}`;
			return data;
		}
		return null;
	}

	dataToPayload(data) {
		console.log('dataToPlayload', data);
		if (
			data &&
			data.address && data.address.length === 26 &&
			data.channel && data.channel.length === 2 &&
			data.unit && data.unit.length === 2 &&
			typeof data.group !== 'undefined' &&
			(
				(typeof data.state !== 'undefined' && Number(data.state) !== 2) ||
				(typeof data.dim !== 'undefined' && Number(data.dim) >= 0 && Number(data.dim) <= 1)
			)
		) {
			const address = this.bitStringToBitArray(data.address);
			const channel = this.bitStringToBitArray(data.channel);
			const unit = this.bitStringToBitArray(data.unit);
			// Calculate dim value
			if (data.dim) {
				const dim = this.numberToBitArray(Math.round(Math.min(1, Math.max(0, data.dim)) * 15), 4);
				return address.concat(data.group ? 1 : 0, 2, channel, unit, dim);
			}
			return address.concat(Number(data.group), Number(data.state), channel, unit);
		}
		return null;
	}
};
