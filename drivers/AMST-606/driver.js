'use strict';
/* eslint-disable */
const config = {
	debounceTimeout: 500,
	driver: '../../433_generator/drivers/kaku/contact_sensor.js',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				body: 'devices.AMST-606.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/AMST-606/pair.svg',
				title: 'devices.AMST-606.views.generic_imitate.title',
				svgWidth: '50vw',
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
				body: 'devices.AMST-606.views.generic_test_remote.body',
				initWithDeviceData: true,
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/AMST-606/test.svg',
				title: 'devices.AMST-606.views.generic_test_remote.title',
				svgWidth: '50vw',
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
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_done'
		}]
	},
	id: 'AMST-606',
	signal: 'kakulong',
	class: 'sensor',
	conditions: [{
		id: 'AMST-606:state',
		title: 'devices.AMST-606.conditions.state.title',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=AMST-606'
		}]
	}],
	images: {
		large: '../../433_generator/assets/AMST-606/images/large.png',
		small: '../../433_generator/assets/AMST-606/images/small.png'
	},
	name: 'devices.AMST-606.name',
	icon: '../../433_generator/assets/AMST-606/icon.svg',
	capabilities: ['alarm_contact']
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
