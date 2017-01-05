'use strict';
/* eslint-disable */
const config = {
	class: 'other',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				title: 'deviceClasses.generic_remote.views.generic_imitate.title',
				body: 'deviceClasses.generic_remote.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/KCT-101/pair.svg',
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
				svg: '../../433_generator/assets/KCT-101/test.svg',
				prepend: [],
				append: [],
				title: 'views.generic_test_remote.title',
				body: 'views.generic_test_remote.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
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
	images: {
		large: '../../433_generator/assets/KCT-101/images/large.jpg',
		small: '../../433_generator/assets/KCT-101/images/small.jpg'
	},
	id: 'KCT-101',
	triggers: [{
		id: 'KCT-101:received',
		title: '433_generator.generic.button_pressed',
		args: [{
			name: 'state',
			type: 'dropdown',
			values: [{
				id: '1',
				label: '433_generator.generic.on'
			}, {
				id: '0',
				label: '433_generator.generic.off'
			}]
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=KCT-101'
		}]
	}],
	debounceTimeout: 500,
	driver: '../../433_generator/drivers/kakuold/kaku.js',
	signal: 'kakuold',
	name: 'devices.KCT-101.name',
	icon: '../../433_generator/assets/KCT-101/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
