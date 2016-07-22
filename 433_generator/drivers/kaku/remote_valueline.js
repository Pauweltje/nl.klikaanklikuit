'use strict';

const Remote = require('./remote');

module.exports = class RemoteValueline extends Remote {
	constructor(config) {
		super(config);
		this.on('frame', this.debounceAfterGroup.bind(this));
		this.on('after_send', this.sendGroupSignal.bind(this));
	}

	debounceAfterGroup(frame) {
		if (Number(frame.group)) {
			this.signal.manualDebounce(2000);
		}
	}

	sendGroupSignal(data) {
		if (data && Number(data.group) === 1) {
			['00', '01'].forEach(unit => {
				const payload = this.dataToPayload(Object.assign({}, data, { group: 0, unit })).map(Number);
				if (payload && payload.length === 32) {
					this.signal.signal.tx(new Buffer(payload), () => {
						Homey.log('Simulated group payload: ', payload.join(''));
					});
				}
			});
		}
	}
};
