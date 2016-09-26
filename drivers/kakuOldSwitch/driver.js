module.exports = self = {
	init: function (devices, callback) {
		devices.forEach(device => self.setUnavailable(device, __('deprecated')));
		callback();
	},
};
