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
					svg: '../../433_generator/assets/ATMT-502/remote_pair.svg',
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
			},
			{
				template: '../lib/pair/test_remote.html',
				options: {
					svg: '../../433_generator/assets/ATMT-502/remote.svg',
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
			},
			{
				template: '../lib/pair/done.html',
				options: {
					title: 'views.generic_done.title',
					prepend: '',
					append: ''
				},
				prepend: [],
				append: [],
				id: 'generic_done'
			}
		]
	},
	images: {
		large: '../../433_generator/assets/ATMT-502/images/large.jpg',
		small: '../../433_generator/assets/ATMT-502/images/small.jpg'
	},
	id: 'ATMT-502',
	triggers: [{
		id: 'ATMT-502:received',
		title: '433_generator.generic.button_pressed',
		args: [{
				name: 'unitchannel',
				type: 'dropdown',
				values: [{
						id: '0000',
						label: '433_generator.generic.units.1'
					},
					{
						id: '1000',
						label: '433_generator.generic.units.2'
					},
					{
						id: '0100',
						label: '433_generator.generic.units.3'
					},
					{
						id: '1100',
						label: '433_generator.generic.units.4'
					},
					{
						id: '0010',
						label: '433_generator.generic.units.5'
					},
					{
						id: '1010',
						label: '433_generator.generic.units.6'
					},
					{
						id: '0110',
						label: '433_generator.generic.units.7'
					},
					{
						id: '1110',
						label: '433_generator.generic.units.8'
					},
					{
						id: '0001',
						label: '433_generator.generic.units.9'
					},
					{
						id: '1001',
						label: '433_generator.generic.units.10'
					},
					{
						id: '0101',
						label: '433_generator.generic.units.11'
					},
					{
						id: '1101',
						label: '433_generator.generic.units.12'
					},
					{
						id: '0011',
						label: '433_generator.generic.units.13'
					},
					{
						id: '1011',
						label: '433_generator.generic.units.14'
					},
					{
						id: '0111',
						label: '433_generator.generic.units.15'
					},
					{
						id: '1111',
						label: '433_generator.generic.units.16'
					}
				]
			},
			{
				name: 'state',
				type: 'dropdown',
				values: [{
						id: '1',
						label: '433_generator.generic.on'
					},
					{
						id: '0',
						label: '433_generator.generic.off'
					}
				]
			},
			{
				name: 'device',
				type: 'device',
				filter: 'driver_id=ATMT-502'
			}
		]
	}],
	debounceTimeout: 500,
	driver: '../../433_generator/drivers/kaku/timer_remote',
	signal: 'kaku',
	name: 'devices.ATMT-502.name',
	icon: '../../433_generator/assets/ATMT-502/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
