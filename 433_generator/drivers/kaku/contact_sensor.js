'use strict';

const Sensor = require('./sensor');

module.exports = class ContactSensor extends Sensor {
	payloadToData(payload) {
		return super.payloadToData(payload.slice(0, 32));
	}
};
