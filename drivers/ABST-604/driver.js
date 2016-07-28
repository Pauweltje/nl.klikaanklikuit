'use strict';
/* eslint-disable */
const config = {
	class: 'sensor',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				body: 'deviceClasses.sensor.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/ABST-604/pair.svg',
				title: 'devices.ABST-604.views.generic_imitate.title',
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
				svg: '../../433_generator/assets/ABST-604/test.svg',
				title: 'devices.ABST-604.views.generic_test_remote.title',
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
	images: {
		large: '../../433_generator/assets/ABST-604/images/large.png',
		small: '../../433_generator/assets/ABST-604/images/small.png'
	},
	id: 'ABST-604',
	driver: '../../433_generator/drivers/kaku/sensor.js',
	signal: 'kaku',
	conditions: [{
		id: 'ABST-604:state',
		title: 'devices.ABST-604.conditions.state.title',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=ABST-604'
		}]
	}],
	name: 'devices.ABST-604.name',
	icon: '../../433_generator/assets/ABST-604/icon.svg',
	capabilities: ['alarm_night']
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
