'use strict';
/* eslint-disable */
const config = {
	capabilities: ['windowcoverings_state'],
	pair: {
		viewOrder: ['generic_choice',
			'generic_imitate',
			'generic_test_switch_2',
			'generic_program',
			'generic_test_switch',
			'generic_done'
		],
		views: [{
			template: '../lib/pair/choice.html',
			options: {
				title: 'deviceClasses.generic_switch.views.generic_choice.title',
				body: 'deviceClasses.generic_switch.views.generic_choice.body',
				buttons: [{
					name: 'views.generic_choice.buttons.copy',
					view: 'generic_imitate',
					svg: '../../433_generator/assets/AYCT-102/remote.svg'
				}, {
					name: 'views.generic_choice.buttons.generate',
					view: 'generic_program',
					svg: '../../433_generator/assets/ASUN-650/pairbutton.svg'
				}],
				prepend: [],
				append: [],
				svgWidth: '80vw',
				svgHeight: '65vh'
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_choice'
		}, {
			template: '../lib/pair/imitate.html',
			options: {
				body: 'deviceClasses.blinds.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/AYCT-102/remote_pair.svg',
				title: 'views.generic_imitate.title',
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
			template: '../lib/pair/test_switch.html',
			options: {
				next: 'generic_done',
				initWithDeviceData: true,
				sendToggleOnInit: false,
				prepend: [],
				append: [],
				title: 'deviceClasses.blinds.views.generic_test_switch.title',
				body: 'deviceClasses.blinds.views.generic_test_switch_2.body',
				svg: '../../433_generator/assets/ASUN-650/test.svg',
				svgHeight: '60vh',
				svgWidth: '80vw',
				previous: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_switch_2'
		}, {
			template: '../lib/pair/program.html',
			options: {
				previous: 'generic_choice',
				prepend: [],
				append: [],
				body: 'deviceClasses.blinds.views.generic_program.body',
				svg: '../../433_generator/assets/ASUN-650/pairbutton.svg',
				title: 'views.generic_program.title',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				next: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_program'
		}, {
			template: '../lib/pair/test_switch.html',
			options: {
				title: 'deviceClasses.blinds.views.generic_test_switch.title',
				body: 'deviceClasses.blinds.views.generic_test_switch.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/ASUN-650/test.svg',
				svgHeight: '60vh',
				svgWidth: '80vw',
				initWithDeviceData: false,
				previous: true,
				next: true,
				sendToggleOnInit: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_switch'
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
		large: '../../433_generator/assets/ASUN-650/images/large.png',
		small: '../../433_generator/assets/ASUN-650/images/small.png'
	},
	id: 'ASUN-650',
	driver: '../../433_generator/drivers/kaku/blinds.js',
	signal: {
		sof: [210, 2724],
		eof: [210],
		words: [
			[210, 320, 210, 1320],
			[210, 1320, 210, 320]
		],
		interval: 10150,
		sensitivity: 0.9,
		repetitions: 10,
		minimalLength: 32,
		maximalLength: 32
	},
	class: 'windowcoverings',
	name: 'devices.ASUN-650.name',
	icon: '../../433_generator/assets/ASUN-650/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
