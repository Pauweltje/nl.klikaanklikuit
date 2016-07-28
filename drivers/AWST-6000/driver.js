'use strict';
/* eslint-disable */
const config = {
	icon: '../../433_generator/assets/AWST-6000/icon.svg',
	driver: '../../433_generator/drivers/kaku/sensor.js',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				body: 'deviceClasses.sensor.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/AWST-6000/pair.svg',
				title: 'devices.AWST-6000.views.generic_imitate.title',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: false
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_imitate'
		}, {
			template: '../lib/pair/test_remote.html',
			options: {
				body: 'deviceClasses.sensor.views.generic_test_remote.body',
				initWithDeviceData: true,
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/AWST-6000/test.svg',
				title: 'devices.AWST-6000.views.generic_test_remote.title',
				svgWidth: '80vw',
				svgHeight: '70vh',
				previous: true,
				next: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_remote'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'views.generic_done.title',
				prepend: [],
				append: []
			},
			prepend: [],
			append: [],
			id: 'generic_done'
		}]
	},
	id: 'AWST-6000',
	signal: 'kaku',
	class: 'sensor',
	conditions: [{
		id: 'AWST-6000:state',
		title: 'devices.AWST-6000.conditions.state.title',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=AWST-6000'
		}]
	}],
	name: 'devices.AWST-6000.name',
	capabilities: ['alarm_motion'],
	images: {
		large: '../../433_generator/assets/AWST-6000/images/large.png',
		small: '../../433_generator/assets/AWST-6000/images/small.png'
	}
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
