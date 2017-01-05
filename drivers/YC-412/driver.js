'use strict';
/* eslint-disable */
const config = {
	capabilities: ['onoff'],
	pair: {
		viewOrder: ['generic_choice',
			'generic_imitate',
			'generic_test_switch_2',
			'generic_choose_slave_2',
			'generic_codewheel',
			'generic_test_switch',
			'generic_choose_slave',
			'generic_done'
		],
		views: [{
			template: '../lib/pair/choice.html',
			options: {
				title: 'deviceClasses.generic_switch.views.generic_choice.title',
				body: 'deviceClasses.generic_codewheel_switch.views.generic_choice.body',
				buttons: [{
					name: 'views.generic_choice.buttons.copy',
					view: 'generic_imitate',
					svg: '../../433_generator/assets/YCT-102/icon.svg'
				}, {
					name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
					view: 'generic_codewheel',
					svg: '../../433_generator/assets/YC-400/icon.svg'
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
				title: 'deviceClasses.generic_socket.views.generic_imitate.title',
				body: 'deviceClasses.generic_socket.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/YCT-102/pair.svg',
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
				next: true,
				initWithDeviceData: true,
				sendToggleOnInit: false,
				prepend: [],
				append: [],
				title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
				body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
				svg: '../../assets/433_generator/images/light.svg',
				svgWidth: '80vw',
				svgHeight: '70vh',
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
			template: 'choose_slave',
			options: {
				next: 'generic_done',
				prepend: [],
				append: [],
				previous: true
			},
			prepend: [],
			append: [],
			id: 'generic_choose_slave_2'
		}, {
			template: '../lib/pair/codewheel.html',
			options: {
				previous: 'generic_choice',
				prepend: [],
				append: [],
				codewheelList: [{
					series: ['A',
						'B',
						'C',
						'D',
						'E',
						'F',
						'G',
						'H',
						'I',
						'J',
						'K',
						'L',
						'M',
						'N',
						'O',
						'P'
					],
					mapOddToDot: true
				}, {
					series: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
					mapOddToDot: true
				}],
				title: 'views.generic_codewheel.title',
				body: 'views.generic_codewheel.body',
				next: true
			},
			prepend: ['../../assets/433_generator/css/codewheel.css',
				'../../assets/433_generator/js/codewheel.js'
			],
			append: [],
			id: 'generic_codewheel'
		}, {
			template: '../lib/pair/test_switch.html',
			options: {
				title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
				body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
				prepend: [],
				append: [],
				svg: '../../assets/433_generator/images/light.svg',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: true,
				previous: true,
				next: true,
				sendToggleOnInit: false
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
			template: 'choose_slave',
			options: {
				previous: true,
				next: true,
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_choose_slave'
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
		large: '../../433_generator/assets/YC-400/images/large.jpg',
		small: '../../433_generator/assets/YC-400/images/small.jpg'
	},
	id: 'YC-412',
	class: 'socket',
	debounceTimeout: 500,
	driver: '../../433_generator/drivers/kakuold/kaku.js',
	signal: 'kakuold',
	name: 'devices.YC-412.name',
	icon: '../../433_generator/assets/YC-400/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
