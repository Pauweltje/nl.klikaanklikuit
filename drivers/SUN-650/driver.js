'use strict';
/* eslint-disable */
const config = {
	capabilities: ['windowcoverings_state'],
	pair: {
		viewOrder: ['generic_choice',
			'generic_imitate',
			'generic_test_switch_2',
			'generic_codewheel',
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
					svg: '../../433_generator/assets/YCT-102/icon.svg'
				}, {
					name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
					view: 'generic_codewheel',
					svg: '../../433_generator/assets/SUN-500/icon.svg'
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
				body: 'deviceClasses.old_blinds.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/YCT-102/pair.svg',
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
				append: [{
					scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tHomey.emit(\'set_settings\', { rotated: this.checked ? \'180\' : \'0\'}, function(){\n\t\t\t\tHomey.emit(\'settings_change\');\n\t\t\t})\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.blinds.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_switch_2"] .centered-container > #image-container\')'
				}],
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
				title: 'deviceClasses.blinds.views.generic_test_switch.title',
				body: 'deviceClasses.blinds.views.generic_test_switch.body',
				append: [{
					scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tHomey.emit(\'set_settings\', { rotated: this.checked ? \'180\' : \'0\'}, function(){\n\t\t\t\tHomey.emit(\'settings_change\');\n\t\t\t})\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.blinds.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_switch"] .centered-container > #image-container\')'
				}],
				prepend: [],
				svg: '../../433_generator/assets/ASUN-650/test.svg',
				svgHeight: '60vh',
				svgWidth: '80vw',
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
		large: '../../433_generator/assets/SUN-500/images/large.jpg',
		small: '../../433_generator/assets/SUN-500/images/small.jpg'
	},
	id: 'SUN-650',
	driver: '../../433_generator/drivers/kakuold/blinds.js',
	signal: 'kakuold',
	class: 'windowcoverings',
	settings: [{
		type: 'group',
		label: 'deviceClasses.wall_switch.settings.groups.general',
		children: [{
			id: 'rotated',
			type: 'radio',
			value: '0',
			label: 'deviceClasses.blinds.settings.rotated.label',
			values: [{
				id: '0',
				label: 'deviceClasses.blinds.settings.rotated.0'
			}, {
				id: '180',
				label: 'deviceClasses.blinds.settings.rotated.180'
			}]
		}]
	}],
	name: 'devices.SUN-500.name',
	icon: '../../433_generator/assets/SUN-500/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
