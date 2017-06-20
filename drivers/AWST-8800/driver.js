'use strict';
/* eslint-disable */
const config = {
	debounceTimeout: 500,
	driver: '../../433_generator/drivers/kaku/wall_switch.js',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
				template: '../lib/pair/imitate.html',
				options: {
					title: 'deviceClasses.generic_wall_switch.views.generic_imitate.title',
					body: 'deviceClasses.generic_wall_switch.views.generic_imitate.body',
					prepend: [],
					append: [],
					svg: '../../433_generator/assets/AWST-8800/switch_pair.svg',
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
					title: 'deviceClasses.generic_wall_switch.views.generic_test_remote.title',
					body: 'deviceClasses.generic_wall_switch.views.generic_test_remote.body',
					prepend: [],
					append: [{
						scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
					}],
					svg: '../../433_generator/assets/AWST-8800/switch.svg',
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
	id: 'AWST-8800',
	signal: 'kaku',
	images: {
		large: '../../433_generator/assets/AWST-8800/images/large.png',
		small: '../../433_generator/assets/AWST-8800/images/small.png'
	},
	triggers: [{
		id: 'AWST-8800:received',
		title: '433_generator.generic.button_pressed',
		args: [{
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
				filter: 'driver_id=AWST-8800'
			}
		]
	}],
	class: 'other',
	settings: [{
		type: 'group',
		label: 'deviceClasses.wall_switch.settings.groups.general',
		children: [{
			id: 'rotated',
			type: 'radio',
			value: '0',
			label: 'deviceClasses.wall_switch.settings.rotated.label',
			values: [{
					id: '0',
					label: 'deviceClasses.wall_switch.settings.rotated.0'
				},
				{
					id: '180',
					label: 'deviceClasses.wall_switch.settings.rotated.180'
				}
			]
		}]
	}],
	name: 'devices.AWST-8800.name',
	icon: '../../433_generator/assets/AWST-8800/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
