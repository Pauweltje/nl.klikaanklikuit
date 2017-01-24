'use strict';
/* eslint-disable */
const config = {
	debounceTimeout: 500,
	triggers: [{
		id: 'AYCT-202:received',
		title: '433_generator.generic.button_pressed',
		args: [{
			name: 'channel',
			type: 'dropdown',
			values: [{
				id: '00',
				label: '433_generator.generic.buttons.1'
			}, {
				id: '10',
				label: '433_generator.generic.buttons.2'
			}, {
				id: '01',
				label: '433_generator.generic.buttons.3'
			}, {
				id: '11',
				label: '433_generator.generic.buttons.4'
			}, {
				id: 'g',
				label: '433_generator.generic.buttons.G'
			}]
		}, {
			name: 'state',
			type: 'dropdown',
			values: [{
				id: '1',
				label: '433_generator.generic.on'
			}, {
				id: '0',
				label: '433_generator.generic.off'
			}, {
				id: 'dimup',
				label: 'deviceClassse.kaku_dimming_remote.generic.dimup'
			}, {
				id: 'dimdown',
				label: 'deviceClasses.kaku_dimming_remote.generic.dimdown'
			}]
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=AYCT-202'
		}]
	}],
	driver: '../../433_generator/drivers/kaku/dimming_remote',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				title: 'deviceClasses.generic_remote.views.generic_imitate.title',
				body: 'deviceClasses.generic_remote.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/AYCT-202/remote_pair.svg',
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
				svg: '../../433_generator/assets/AYCT-202/remote.svg',
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
	id: 'AYCT-202',
	signal: 'kakudim',
	class: 'other',
	images: {
		large: '../../433_generator/assets/AYCT-202/images/large.jpg',
		small: '../../433_generator/assets/AYCT-202/images/small.jpg'
	},
	name: 'devices.AYCT-202.name',
	icon: '../../433_generator/assets/AYCT-202/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
