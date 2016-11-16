'use strict';

const Sensor = require('./sensor');

module.exports = class MotionSensor extends Sensor {
	constructor(config) {
		super(config);

		this.timeoutMap = new Map();

		this.on('new_state', (device, state) => {
			if (state.state === 1) {
				const timeout = Number(this.getSettings(device).timeout);
				if (timeout) {
					clearTimeout(this.timeoutMap.get(device.id));
					this.timeoutMap.set(
						device.id,
						setTimeout(() => this.emit('frame', Object.assign({}, device, { state: 0 })), timeout * 60 * 1000)
					);
				}
			}
		});
	}

	updateSettings() {
		for (const deviceEntry of this.devices) {
			this.emit('frame', Object.assign({}, deviceEntry[1], { state: 0 }));
		}
		return super.updateSettings.apply(this, arguments);
	}
};
