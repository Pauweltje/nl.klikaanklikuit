'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		'SUN-650': {
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/YCT-102/icon.svg'
						}, {
							name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
							view: 'generic_codewheel',
							svg: '../433_generator/assets/SUN-500/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.old_blinds.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/YCT-102/pair.svg',
						title: 'views.generic_imitate.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.blinds.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_switch_2"] .centered-container > #image-container\')'
						}],
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch_2.body',
						svg: '../433_generator/assets/ASUN-650/test.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
				}, {
					template: './lib/pair/codewheel.html',
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
					prepend: ['./../assets/433_generator/css/codewheel.css',
						'./../assets/433_generator/js/codewheel.js'
					],
					append: [],
					id: 'generic_codewheel'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch.body',
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.blinds.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_switch"] .centered-container > #image-container\')'
						}],
						prepend: [],
						svg: '../433_generator/assets/ASUN-650/test.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/SUN-500/images/large.jpg',
				small: '../433_generator/assets/SUN-500/images/small.jpg'
			},
			id: 'SUN-650',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/blinds.js',
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
			icon: '../433_generator/assets/SUN-500/icon.svg'
		},
		'ACD-3500': {
			images: {
				large: '../433_generator/assets/ACD-200/images/large.png',
				small: '../433_generator/assets/ACD-200/images/small.png'
			},
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACD-200/socket.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/ACD-200/socket.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff'],
			id: 'ACD-3500',
			signal: 'kaku',
			class: 'socket',
			alternativeSignal: 'kaku',
			name: 'devices.ACD-3500.name',
			icon: '../433_generator/assets/ACD-200/socket.svg'
		},
		'AC-3500': {
			icon: '../433_generator/assets/AC-300/icon.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AC-300/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/AC-300/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff'],
			id: 'AC-3500',
			signal: 'kaku',
			class: 'socket',
			alternativeSignal: 'kaku',
			name: 'devices.AC-3500.name',
			images: {
				large: '../433_generator/assets/AC-300/images/large.png',
				small: '../433_generator/assets/AC-300/images/small.png'
			}
		},
		'ASUN-650': {
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ASUN-650/pairbutton.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.blinds.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						title: 'views.generic_imitate.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.blinds.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_switch_2"] .centered-container > #image-container\')'
						}],
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch_2.body',
						svg: '../433_generator/assets/ASUN-650/test.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/ASUN-650/pairbutton.svg',
						title: 'views.generic_program.title',
						body: 'views.generic_program.body',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch.body',
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.blinds.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_switch"] .centered-container > #image-container\')'
						}],
						prepend: [],
						svg: '../433_generator/assets/ASUN-650/test.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ASUN-650/images/large.png',
				small: '../433_generator/assets/ASUN-650/images/small.png'
			},
			id: 'ASUN-650',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/blinds.js',
			signal: 'kaku',
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
			name: 'devices.ASUN-650.name',
			icon: '../433_generator/assets/ASUN-650/icon.svg'
		},
		'AFR-060': {
			icon: '../433_generator/assets/AFR-100/icon.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_program',
					'generic_test_switch',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AFR-100/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'devices.AFR-100.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'devices.AFR-100.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'devices.AFR-100.views.generic_program.body',
						svg: '../433_generator/assets/AFR-100/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'devices.AFR-100.views.generic_test_switch.title',
						body: 'devices.AFR-100.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch'
				}, {
					template: './lib/pair/done.html',
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
			capabilities: ['onoff'],
			id: 'AFR-060',
			signal: 'kakudim',
			class: 'light',
			alternativeSignal: 'kaku',
			name: 'devices.AFR-060.name',
			images: {
				large: '../433_generator/assets/AFR-100/images/large.jpg',
				small: '../433_generator/assets/AFR-100/images/small.jpg'
			}
		},
		'AWMT-003': {
			icon: '../433_generator/assets/AWMT-003/icon.svg',
			debounceTimeout: 500,
			triggers: [{
				id: 'AWMT-003:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.buttons.left'
					}, {
						id: '01',
						label: '433_generator.generic.buttons.right'
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=AWMT-003'
				}]
			}],
			driver: '../433_generator/drivers/kaku/wall_switch.js',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_imitate.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWMT-003/switch_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_test_remote.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_test_remote.body',
						prepend: [],
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
						}],
						svg: '../433_generator/assets/AWMT-003/switch.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'AWMT-003',
			signal: 'kaku',
			class: 'other',
			name: 'devices.AWMT-003.name',
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
					}, {
						id: '180',
						label: 'deviceClasses.wall_switch.settings.rotated.180'
					}]
				}]
			}],
			images: {
				large: '../433_generator/assets/AWMT-003/images/large.jpg',
				small: '../433_generator/assets/AWMT-003/images/small.jpg'
			}
		},
		'TMT-502': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/TMT-502/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/TMT-502/remote.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/TMT-502/images/large.png',
				small: '../433_generator/assets/TMT-502/images/small.png'
			},
			id: 'TMT-502',
			triggers: [{
				id: 'TMT-502:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unitchannel',
					type: 'dropdown',
					values: [{
						id: '0000',
						label: '433_generator.generic.units.1'
					}, {
						id: '1000',
						label: '433_generator.generic.units.2'
					}, {
						id: '0100',
						label: '433_generator.generic.units.3'
					}, {
						id: '1100',
						label: '433_generator.generic.units.4'
					}, {
						id: '0010',
						label: '433_generator.generic.units.5'
					}, {
						id: '1010',
						label: '433_generator.generic.units.6'
					}, {
						id: '0110',
						label: '433_generator.generic.units.7'
					}, {
						id: '1110',
						label: '433_generator.generic.units.8'
					}, {
						id: '0001',
						label: '433_generator.generic.units.9'
					}, {
						id: '1001',
						label: '433_generator.generic.units.10'
					}, {
						id: '0101',
						label: '433_generator.generic.units.11'
					}, {
						id: '1101',
						label: '433_generator.generic.units.12'
					}, {
						id: '0011',
						label: '433_generator.generic.units.13'
					}, {
						id: '1011',
						label: '433_generator.generic.units.14'
					}, {
						id: '0111',
						label: '433_generator.generic.units.15'
					}, {
						id: '1111',
						label: '433_generator.generic.units.16'
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=TMT-502'
				}]
			}],
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/timer_remote',
			signal: 'kakuold',
			name: 'devices.TMT-502.name',
			icon: '../433_generator/assets/TMT-502/icon.svg'
		},
		'AC-1000': {
			images: {
				large: '../433_generator/assets/AC-300/images/large.png',
				small: '../433_generator/assets/AC-300/images/small.png'
			},
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AC-300/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/AC-300/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff'],
			id: 'AC-1000',
			signal: 'kaku',
			class: 'socket',
			alternativeSignal: 'kaku',
			name: 'devices.AC-1000.name',
			icon: '../433_generator/assets/AC-300/icon.svg'
		},
		'ACM-300': {
			icon: '../433_generator/assets/ACM-300/icon.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACM-300/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/ACM-300/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff', 'dim'],
			id: 'ACM-300',
			signal: 'kakudim',
			class: 'socket',
			alternativeSignal: 'kaku',
			name: 'devices.ACM-300.name',
			images: {
				large: '../433_generator/assets/ACM-300/images/large.png',
				small: '../433_generator/assets/ACM-300/images/small.png'
			}
		},
		'AGDR-300': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AGDR-300/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/AGDR-300/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AGDR-300/images/large.jpg',
				small: '../433_generator/assets/AGDR-300/images/small.jpg'
			},
			id: 'AGDR-300',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.AGDR-300.name',
			icon: '../433_generator/assets/AGDR-300/icon.svg'
		},
		'APA2-2300R': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/APA2-2300R/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/APA2-2300R/test.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/APA2-2300R/images/large.jpg',
				small: '../433_generator/assets/APA2-2300R/images/small.jpg'
			},
			id: 'APA2-2300R',
			triggers: [{
				id: 'APA2-2300R:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.buttons.1'
					}, {
						id: '01',
						label: '433_generator.generic.buttons.2'
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=APA2-2300R'
				}]
			}],
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/remote_valueline',
			signal: 'kaku',
			name: 'devices.APA2-2300R.name',
			icon: '../433_generator/assets/APA2-2300R/icon.svg'
		},
		'APIR-2150': {
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/motion_sensor.js',
			capabilities: ['alarm_motion'],
			signal: 'kaku',
			settings: [{
				type: 'group',
				label: 'deviceClasses.motion_sensor.settings.groups.advanced',
				children: [{
					id: 'timeout',
					type: 'dropdown',
					value: '0',
					label: 'deviceClasses.motion_sensor.settings.timeout.label',
					values: [{
						id: '0',
						label: 'deviceClasses.motion_sensor.settings.timeout.0'
					}, {
						id: '1',
						label: 'deviceClasses.motion_sensor.settings.timeout.1'
					}, {
						id: '2',
						label: 'deviceClasses.motion_sensor.settings.timeout.2'
					}, {
						id: '5',
						label: 'deviceClasses.motion_sensor.settings.timeout.5'
					}, {
						id: '10',
						label: 'deviceClasses.motion_sensor.settings.timeout.10'
					}, {
						id: '15',
						label: 'deviceClasses.motion_sensor.settings.timeout.15'
					}, {
						id: '30',
						label: 'deviceClasses.motion_sensor.settings.timeout.30'
					}]
				}]
			}],
			icon: '../433_generator/assets/APIR-2150/icon.svg',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.sensor.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWST-6000/pair.svg',
						title: 'deviceClasses.motion_sensor.views.generic_imitate.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						body: 'deviceClasses.sensor.views.generic_test_remote.body',
						initWithDeviceData: true,
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWST-6000/test.svg',
						title: 'deviceClasses.motion_sensor.views.generic_test_remote.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'APIR-2150',
			name: 'devices.APIR-2150.name',
			class: 'sensor',
			conditions: [{
				id: 'APIR-2150:state',
				title: 'deviceClasses.motion_sensor.conditions.state.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=APIR-2150'
				}]
			}],
			images: {
				large: '../433_generator/assets/APIR-2150/images/large.png',
				small: '../433_generator/assets/APIR-2150/images/small.png'
			}
		},
		'KCT-510': {
			debounceTimeout: 500,
			images: {
				large: '../433_generator/assets/KCT-510/images/large.jpg',
				small: '../433_generator/assets/KCT-510/images/small.jpg'
			},
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/KCT-510/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/KCT-510/test.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'KCT-510',
			driver: '../433_generator/drivers/kakuold/kaku.js',
			signal: 'kakuold',
			class: 'other',
			triggers: [{
				id: 'KCT-510:received',
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
					filter: 'driver_id=KCT-510'
				}]
			}],
			name: 'devices.KCT-510.name',
			icon: '../433_generator/assets/KCT-510/icon.svg'
		},
		'WST-8800': {
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/wall_switch.js',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_imitate.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/WST-8800/switch_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_test_remote.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_test_remote.body',
						prepend: [],
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
						}],
						svg: '../433_generator/assets/WST-8800/switch.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'WST-8800',
			signal: 'kakuold',
			images: {
				large: '../433_generator/assets/WST-8800/images/large.png',
				small: '../433_generator/assets/WST-8800/images/small.png'
			},
			triggers: [{
				id: 'WST-8800:received',
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
					filter: 'driver_id=WST-8800'
				}]
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
					}, {
						id: '180',
						label: 'deviceClasses.wall_switch.settings.rotated.180'
					}]
				}]
			}],
			name: 'devices.WST-8800.name',
			icon: '../433_generator/assets/WST-8800/icon.svg'
		},
		'AC-300N': {
			icon: '../433_generator/assets/AC-300/icon.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AC-300/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/AC-300/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff', 'dim'],
			id: 'AC-300N',
			signal: 'kakudim',
			class: 'socket',
			alternativeSignal: 'kaku',
			name: 'devices.AC-300.name',
			images: {
				large: '../433_generator/assets/AC-300/images/large.png',
				small: '../433_generator/assets/AC-300/images/small.png'
			}
		},
		'AGDR-200': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AGDR-300/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/AGDR-300/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AGDR-300/images/large.jpg',
				small: '../433_generator/assets/AGDR-300/images/small.jpg'
			},
			id: 'AGDR-200',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.AGDR-200.name',
			icon: '../433_generator/assets/AGDR-300/icon.svg'
		},
		'APA2-2300RS': {
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/APA2-2300R/icon.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACD-200/socket.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/APA2-2300R/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.simple_socket.views.generic_program.body',
						svg: '../433_generator/assets/ACD-200/socket.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff'],
			id: 'APA2-2300RS',
			signal: 'kaku',
			class: 'socket',
			images: {
				large: '../433_generator/assets/APA2-2300RS/images/large.jpg',
				small: '../433_generator/assets/APA2-2300RS/images/small.jpg'
			},
			name: 'devices.APA2-2300RS.name',
			icon: '../433_generator/assets/ACD-200/socket.svg'
		},
		'ACM-250': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACM-250/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/ACM-250/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ACM-250/images/large.png',
				small: '../433_generator/assets/ACM-250/images/small.png'
			},
			id: 'ACM-250',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.ACM-250.name',
			icon: '../433_generator/assets/ACM-250/icon.svg'
		},
		'ACM-LV24': {
			icon: '../433_generator/assets/ACM-LV24/icon.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACM-LV24/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/ACM-LV24/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff', 'dim'],
			id: 'ACM-LV24',
			signal: 'kakudim',
			class: 'socket',
			alternativeSignal: 'kaku',
			name: 'devices.ACM-LV24.name',
			images: {
				large: '../433_generator/assets/ACM-LV24/images/large.png',
				small: '../433_generator/assets/ACM-LV24/images/small.png'
			}
		},
		'ACDB-7000C': {
			capabilities: ['alarm_generic'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_button_2',
					'generic_program',
					'generic_test_button',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.doorbell.views.generic_choice.body',
						buttons: [{
							name: 'devices.ACDB-6600.views.generic_choice.buttons.generic_imitate',
							view: 'generic_imitate',
							svg: '../433_generator/assets/ACDB-7000C/doorbell.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACDB-7000C/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.doorbell.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/ACDB-7000C/doorbell.svg',
						title: 'views.generic_imitate.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_button.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.doorbell.views.generic_test_button.title',
						body: 'deviceClasses.doorbell.views.generic_test_button_2.body',
						svg: '../433_generator/assets/ACDB-7000C/bell.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true,
						buttonLabel: 'test'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_button_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/ACDB-7000C/pair.svg',
						title: 'views.generic_program.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_button.html',
					options: {
						title: 'deviceClasses.doorbell.views.generic_test_button.title',
						body: 'deviceClasses.doorbell.views.generic_test_button.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/ACDB-7000C/bell.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false,
						buttonLabel: 'test'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_button'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ACDB-7000C/images/large.png',
				small: '../433_generator/assets/ACDB-7000C/images/small.png'
			},
			id: 'ACDB-7000C',
			debounceTimeout: 1000,
			driver: '../433_generator/drivers/kaku/doorbell.js',
			signal: 'kaku',
			class: 'doorbell',
			triggers: [{
				id: 'ACDB-7000C:received',
				title: 'deviceClasses.doorbell.triggers.received.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=ACDB-7000C'
				}]
			}],
			actions: [{
				id: 'ACDB-7000C:send',
				title: 'deviceClasses.doorbell.triggers.send.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=ACDB-7000C'
				}]
			}],
			name: 'devices.ACDB-7000C.name',
			icon: '../433_generator/assets/ACDB-7000C/icon.svg'
		},
		'ACDB-6600': {
			capabilities: ['alarm_generic'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_button_2',
					'generic_program',
					'generic_test_button',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.doorbell.views.generic_choice.body',
						buttons: [{
							name: 'devices.ACDB-6600.views.generic_choice.buttons.generic_imitate',
							view: 'generic_imitate',
							svg: '../433_generator/assets/ACDB-6600/doorbell.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACDB-6600/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.doorbell.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/ACDB-6600/doorbell.svg',
						title: 'views.generic_imitate.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_button.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.doorbell.views.generic_test_button.title',
						body: 'deviceClasses.doorbell.views.generic_test_button_2.body',
						svg: '../433_generator/assets/ACDB-7000C/bell.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true,
						buttonLabel: 'test'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_button_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/ACDB-6600/pair.svg',
						title: 'views.generic_program.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_button.html',
					options: {
						title: 'deviceClasses.doorbell.views.generic_test_button.title',
						body: 'deviceClasses.doorbell.views.generic_test_button.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/ACDB-7000C/bell.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false,
						buttonLabel: 'test'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_button'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ACDB-6600/images/large.jpg',
				small: '../433_generator/assets/ACDB-6600/images/small.jpg'
			},
			id: 'ACDB-6600',
			debounceTimeout: 1000,
			driver: '../433_generator/drivers/kaku/doorbell.js',
			signal: 'kaku',
			class: 'doorbell',
			triggers: [{
				id: 'ACDB-6600:received',
				title: 'deviceClasses.doorbell.triggers.received.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=ACDB-6600'
				}]
			}],
			actions: [{
				id: 'ACDB-6600:send',
				title: 'deviceClasses.doorbell.triggers.send.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=ACDB-6600'
				}]
			}],
			name: 'devices.ACDB-6600.name',
			icon: '../433_generator/assets/ACDB-6600/icon.svg'
		},
		'YC-3500': {
			images: {
				large: '../433_generator/assets/YC-400/images/large.jpg',
				small: '../433_generator/assets/YC-400/images/small.jpg'
			},
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/kaku.js',
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_codewheel_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/YCT-102/icon.svg'
						}, {
							name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
							view: 'generic_codewheel',
							svg: '../433_generator/assets/YC-400/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/YCT-102/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/codewheel.html',
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
					prepend: ['./../assets/433_generator/css/codewheel.css',
						'./../assets/433_generator/js/codewheel.js'
					],
					append: [],
					id: 'generic_codewheel'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff'],
			id: 'YC-3500',
			signal: 'kakuold',
			class: 'socket',
			name: 'devices.YC-3500.name',
			icon: '../433_generator/assets/YC-400/icon.svg'
		},
		'ACD-300': {
			icon: '../433_generator/assets/ACD-200/socket.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACD-200/socket.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/ACD-200/socket.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff', 'dim'],
			id: 'ACD-300',
			signal: 'kakudim',
			class: 'socket',
			alternativeSignal: 'kaku',
			name: 'devices.ACD-300.name',
			images: {
				large: '../433_generator/assets/ACD-200/images/large.png',
				small: '../433_generator/assets/ACD-200/images/small.png'
			}
		},
		'AKCT-510': {
			debounceTimeout: 500,
			images: {
				large: '../433_generator/assets/AKCT-510/images/large.jpg',
				small: '../433_generator/assets/AKCT-510/images/small.jpg'
			},
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AKCT-510/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/AKCT-510/test.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'AKCT-510',
			driver: '../433_generator/drivers/kaku/kaku.js',
			signal: 'kaku',
			class: 'other',
			triggers: [{
				id: 'AKCT-510:received',
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
					filter: 'driver_id=AKCT-510'
				}]
			}],
			name: 'devices.AKCT-510.name',
			icon: '../433_generator/assets/AKCT-510/icon.svg'
		},
		'AWMR-210': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AWMR-210/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/AWMR-210/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AWMR-210/images/large.png',
				small: '../433_generator/assets/AWMR-210/images/small.png'
			},
			id: 'AWMR-210',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.AWMR-210.name',
			icon: '../433_generator/assets/AWMR-210/icon.svg'
		},
		'AWMD-250': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AWMR-210/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/AWMR-210/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AWMR-210/images/large.png',
				small: '../433_generator/assets/AWMR-210/images/small.png'
			},
			id: 'AWMD-250',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.AWMD-250.name',
			icon: '../433_generator/assets/AWMR-210/icon.svg'
		},
		'AWST-8802': {
			debounceTimeout: 500,
			images: {
				large: '../433_generator/assets/AWST-8802/images/large.jpg',
				small: '../433_generator/assets/AWST-8802/images/small.jpg'
			},
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_imitate.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWST-8802/switch_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_test_remote.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_test_remote.body',
						prepend: [],
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
						}],
						svg: '../433_generator/assets/AWST-8802/switch.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'AWST-8802',
			driver: '../433_generator/drivers/kaku/wall_switch.js',
			signal: 'kaku',
			triggers: [{
				id: 'AWST-8802:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '10',
						label: '433_generator.generic.buttons.left'
					}, {
						id: '11',
						label: '433_generator.generic.buttons.right'
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=AWST-8802'
				}]
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
					}, {
						id: '180',
						label: 'deviceClasses.wall_switch.settings.rotated.180'
					}]
				}]
			}],
			name: 'devices.AWST-8802.name',
			icon: '../433_generator/assets/AWST-8802/icon.svg'
		},
		'WST-8700': {
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/wall_switch.js',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_imitate.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/WST-8700/switch_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_test_remote.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_test_remote.body',
						prepend: [],
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
						}],
						svg: '../433_generator/assets/WST-8700/switch.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'WST-8700',
			signal: 'kakuold',
			images: {
				large: '../433_generator/assets/WST-8700/images/large.jpg',
				small: '../433_generator/assets/WST-8700/images/small.jpg'
			},
			triggers: [{
				id: 'WST-8700:received',
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
					filter: 'driver_id=WST-8700'
				}]
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
					}, {
						id: '180',
						label: 'deviceClasses.wall_switch.settings.rotated.180'
					}]
				}]
			}],
			name: 'devices.WST-8700.name',
			icon: '../433_generator/assets/WST-8700/icon.svg'
		},
		'APA3-1500RS': {
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/APA3-1500R/icon.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/APA3-1500RS/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/APA3-1500R/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.simple_socket.views.generic_program.body',
						svg: '../433_generator/assets/APA3-1500RS/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff'],
			id: 'APA3-1500RS',
			signal: 'kaku',
			class: 'socket',
			images: {
				large: '../433_generator/assets/APA3-1500RS/images/large.jpg',
				small: '../433_generator/assets/APA3-1500RS/images/small.jpg'
			},
			name: 'devices.APA3-1500RS.name',
			icon: '../433_generator/assets/APA3-1500RS/icon.svg'
		},
		'ABST-604': {
			class: 'sensor',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.sensor.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/ABST-604/pair.svg',
						title: 'devices.ABST-604.views.generic_imitate.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						body: 'deviceClasses.sensor.views.generic_test_remote.body',
						initWithDeviceData: true,
						prepend: [],
						append: [],
						svg: '../433_generator/assets/ABST-604/test.svg',
						title: 'devices.ABST-604.views.generic_test_remote.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ABST-604/images/large.png',
				small: '../433_generator/assets/ABST-604/images/small.png'
			},
			id: 'ABST-604',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/sensor.js',
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
			icon: '../433_generator/assets/ABST-604/icon.svg',
			capabilities: ['alarm_night']
		},
		'ACM-100': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACM-100/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/ACM-100/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ACM-100/images/large.png',
				small: '../433_generator/assets/ACM-100/images/small.png'
			},
			id: 'ACM-100',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.ACM-100.name',
			icon: '../433_generator/assets/ACM-100/icon.svg'
		},
		'AWMT-230': {
			icon: '../433_generator/assets/AWMT-230/icon.svg',
			debounceTimeout: 500,
			triggers: [{
				id: 'AWMT-230:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.buttons.left'
					}, {
						id: '01',
						label: '433_generator.generic.buttons.right'
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=AWMT-230'
				}]
			}],
			driver: '../433_generator/drivers/kaku/wall_switch.js',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_imitate.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWMT-003/switch_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_test_remote.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_test_remote.body',
						prepend: [],
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
						}],
						svg: '../433_generator/assets/AWMT-003/switch.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'AWMT-230',
			signal: 'kaku',
			class: 'other',
			name: 'devices.AWMT-230.name',
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
					}, {
						id: '180',
						label: 'deviceClasses.wall_switch.settings.rotated.180'
					}]
				}]
			}],
			images: {
				large: '../433_generator/assets/AWMT-230/images/large.jpg',
				small: '../433_generator/assets/AWMT-230/images/small.jpg'
			}
		},
		'ACM-1000': {
			capabilities: ['onoff'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACM-300/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/ACM-300/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ACM-300/images/large.png',
				small: '../433_generator/assets/ACM-300/images/small.png'
			},
			id: 'ACM-1000',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			signal: 'kaku',
			name: 'devices.ACM-1000.name',
			icon: '../433_generator/assets/ACM-300/icon.svg'
		},
		'AWMR-230': {
			capabilities: ['onoff'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AWMR-210/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/AWMR-210/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AWMR-210/images/large.png',
				small: '../433_generator/assets/AWMR-210/images/small.png'
			},
			id: 'AWMR-230',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			signal: 'kaku',
			name: 'devices.AWMR-230.name',
			icon: '../433_generator/assets/AWMR-210/icon.svg'
		},
		'ACM-LV10': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACM-LV10/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/ACM-LV10/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ACM-LV10/images/large.png',
				small: '../433_generator/assets/ACM-LV10/images/small.png'
			},
			id: 'ACM-LV10',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.ACM-LV10.name',
			icon: '../433_generator/assets/ACM-LV10/icon.svg'
		},
		'AYCT-202': {
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
						label: 'deviceClass.kaku_dimming_remote.generic.dimup'
					}, {
						id: 'dimdown',
						label: 'deviceClass.kaku_dimming_remote.generic.dimdown'
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=AYCT-202'
				}]
			}],
			driver: '../433_generator/drivers/kaku/dimming_remote',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-202/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/AYCT-202/remote.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AYCT-202/images/large.jpg',
				small: '../433_generator/assets/AYCT-202/images/small.jpg'
			},
			name: 'devices.AYCT-202.name',
			icon: '../433_generator/assets/AYCT-202/icon.svg'
		},
		'AC-300': {
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_codewheel_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/YCT-102/icon.svg'
						}, {
							name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
							view: 'generic_codewheel',
							svg: '../433_generator/assets/YC-400/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/YCT-102/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/codewheel.html',
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
					prepend: ['./../assets/433_generator/css/codewheel.css',
						'./../assets/433_generator/js/codewheel.js'
					],
					append: [],
					id: 'generic_codewheel'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/YC-400/images/large.jpg',
				small: '../433_generator/assets/YC-400/images/small.jpg'
			},
			id: 'AC-300',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/kaku.js',
			signal: 'kakuold',
			name: 'devices.YC-400.name',
			icon: '../433_generator/assets/YC-400/icon.svg'
		},
		'ALED-2009': {
			images: {
				large: '../433_generator/assets/ALED-2009/images/large.jpg',
				small: '../433_generator/assets/ALED-2009/images/small.jpg'
			},
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/new_dimmer.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_program',
					'generic_test_switch',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ALED-2709/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'devices.ALED-2709.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'devices.ALED-2709.views.generic_program.body',
						svg: '../433_generator/assets/ALED-2709/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'devices.ALED-2709.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch'
				}, {
					template: './lib/pair/done.html',
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
			capabilities: ['onoff', 'dim'],
			id: 'ALED-2009',
			signal: 'kakudim',
			class: 'light',
			alternativeSignal: 'kaku',
			name: 'devices.ALED-2009.name',
			icon: '../433_generator/assets/ALED-2709/icon.svg'
		},
		'ACM-2300H': {
			capabilities: ['onoff'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACM-2300H/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/ACM-2300H/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ACM-2300H/images/large.png',
				small: '../433_generator/assets/ACM-2300H/images/small.png'
			},
			id: 'ACM-2300H',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			signal: 'kaku',
			name: 'devices.ACM-2300H.name',
			icon: '../433_generator/assets/ACM-2300H/icon.svg'
		},
		'AWST-8800': {
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/wall_switch.js',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_imitate.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWST-8800/switch_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'deviceClasses.generic_wall_switch.views.generic_test_remote.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_test_remote.body',
						prepend: [],
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tvar newSettings = { rotated: this.checked ? \'180\' : \'0\'};\n\t\t\tHomey.emit(\'set_settings\', newSettings, function(){\n\t\t\t\tHomey.highlight(newSettings);\n\t\t\t});\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
						}],
						svg: '../433_generator/assets/AWST-8800/switch.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
			id: 'AWST-8800',
			signal: 'kaku',
			images: {
				large: '../433_generator/assets/AWST-8800/images/large.png',
				small: '../433_generator/assets/AWST-8800/images/small.png'
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
					}, {
						id: '0',
						label: '433_generator.generic.off'
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=AWST-8800'
				}]
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
					}, {
						id: '180',
						label: 'deviceClasses.wall_switch.settings.rotated.180'
					}]
				}]
			}],
			name: 'devices.AWST-8800.name',
			icon: '../433_generator/assets/AWST-8800/icon.svg'
		},
		'KCT-101': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/KCT-101/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/KCT-101/test.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/KCT-101/images/large.jpg',
				small: '../433_generator/assets/KCT-101/images/small.jpg'
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
			driver: '../433_generator/drivers/kakuold/kaku.js',
			signal: 'kakuold',
			name: 'devices.KCT-101.name',
			icon: '../433_generator/assets/KCT-101/icon.svg'
		},
		'AWST-6000': {
			class: 'sensor',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.sensor.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWST-6000/pair.svg',
						title: 'deviceClasses.motion_sensor.views.generic_imitate.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						body: 'deviceClasses.sensor.views.generic_test_remote.body',
						initWithDeviceData: true,
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWST-6000/test.svg',
						title: 'deviceClasses.motion_sensor.views.generic_test_remote.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AWST-6000/images/large.png',
				small: '../433_generator/assets/AWST-6000/images/small.png'
			},
			id: 'AWST-6000',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/motion_sensor.js',
			signal: 'kaku',
			conditions: [{
				id: 'AWST-6000:state',
				title: 'deviceClasses.motion_sensor.conditions.state.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=AWST-6000'
				}]
			}],
			name: 'devices.AWST-6000.name',
			icon: '../433_generator/assets/AWST-6000/icon.svg',
			capabilities: ['alarm_motion'],
			settings: [{
				type: 'group',
				label: 'deviceClasses.motion_sensor.settings.groups.advanced',
				children: [{
					id: 'timeout',
					type: 'dropdown',
					value: '0',
					label: 'deviceClasses.motion_sensor.settings.timeout.label',
					values: [{
						id: '0',
						label: 'deviceClasses.motion_sensor.settings.timeout.0'
					}, {
						id: '1',
						label: 'deviceClasses.motion_sensor.settings.timeout.1'
					}, {
						id: '2',
						label: 'deviceClasses.motion_sensor.settings.timeout.2'
					}, {
						id: '5',
						label: 'deviceClasses.motion_sensor.settings.timeout.5'
					}, {
						id: '10',
						label: 'deviceClasses.motion_sensor.settings.timeout.10'
					}, {
						id: '15',
						label: 'deviceClasses.motion_sensor.settings.timeout.15'
					}, {
						id: '30',
						label: 'deviceClasses.motion_sensor.settings.timeout.30'
					}]
				}]
			}]
		},
		'YC-412': {
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_codewheel_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/YCT-102/icon.svg'
						}, {
							name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
							view: 'generic_codewheel',
							svg: '../433_generator/assets/YC-400/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/YCT-102/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/codewheel.html',
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
					prepend: ['./../assets/433_generator/css/codewheel.css',
						'./../assets/433_generator/js/codewheel.js'
					],
					append: [],
					id: 'generic_codewheel'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/YC-400/images/large.jpg',
				small: '../433_generator/assets/YC-400/images/small.jpg'
			},
			id: 'YC-412',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/kaku.js',
			signal: 'kakuold',
			name: 'devices.YC-412.name',
			icon: '../433_generator/assets/YC-400/icon.svg'
		},
		'PA3-1000R': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/PA3-1000R/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/PA3-1000R/test.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/PA3-1000R/images/large.jpg',
				small: '../433_generator/assets/PA3-1000R/images/small.jpg'
			},
			id: 'PA3-1000R',
			triggers: [{
				id: 'PA3-1000R:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.buttons.1'
					}, {
						id: '01',
						label: '433_generator.generic.buttons.2'
					}, {
						id: '10',
						label: '433_generator.generic.buttons.3'
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=PA3-1000R'
				}]
			}],
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/remote',
			signal: 'kakuold',
			name: 'devices.PA3-1000R.name',
			icon: '../433_generator/assets/PA3-1000R/icon.svg'
		},
		'YCT-102': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/YCT-102/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/YCT-102/test.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/YCT-102/images/large.png',
				small: '../433_generator/assets/YCT-102/images/small.png'
			},
			id: 'YCT-102',
			triggers: [{
				id: 'YCT-102:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'channel',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.channels.I'
					}, {
						id: '01',
						label: '433_generator.generic.channels.II'
					}, {
						id: '10',
						label: '433_generator.generic.channels.III'
					}, {
						id: '11',
						label: '433_generator.generic.channels.IV'
					}]
				}, {
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.buttons.1'
					}, {
						id: '01',
						label: '433_generator.generic.buttons.2'
					}, {
						id: '10',
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=YCT-102'
				}]
			}],
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/remote',
			signal: 'kakuold',
			name: 'devices.YCT-102.name',
			icon: '../433_generator/assets/YCT-102/icon.svg'
		},
		'ATMT-502': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/ATMT-502/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/ATMT-502/remote.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ATMT-502/images/large.png',
				small: '../433_generator/assets/ATMT-502/images/small.png'
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
					}, {
						id: '1000',
						label: '433_generator.generic.units.2'
					}, {
						id: '0100',
						label: '433_generator.generic.units.3'
					}, {
						id: '1100',
						label: '433_generator.generic.units.4'
					}, {
						id: '0010',
						label: '433_generator.generic.units.5'
					}, {
						id: '1010',
						label: '433_generator.generic.units.6'
					}, {
						id: '0110',
						label: '433_generator.generic.units.7'
					}, {
						id: '1110',
						label: '433_generator.generic.units.8'
					}, {
						id: '0001',
						label: '433_generator.generic.units.9'
					}, {
						id: '1001',
						label: '433_generator.generic.units.10'
					}, {
						id: '0101',
						label: '433_generator.generic.units.11'
					}, {
						id: '1101',
						label: '433_generator.generic.units.12'
					}, {
						id: '0011',
						label: '433_generator.generic.units.13'
					}, {
						id: '1011',
						label: '433_generator.generic.units.14'
					}, {
						id: '0111',
						label: '433_generator.generic.units.15'
					}, {
						id: '1111',
						label: '433_generator.generic.units.16'
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=ATMT-502'
				}]
			}],
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/timer_remote',
			signal: 'kaku',
			name: 'devices.ATMT-502.name',
			icon: '../433_generator/assets/ATMT-502/icon.svg'
		},
		'ALED-2709': {
			icon: '../433_generator/assets/ALED-2709/icon.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/new_dimmer.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_program',
					'generic_test_switch',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ALED-2709/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'devices.ALED-2709.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'devices.ALED-2709.views.generic_program.body',
						svg: '../433_generator/assets/ALED-2709/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'devices.ALED-2709.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch'
				}, {
					template: './lib/pair/done.html',
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
			capabilities: ['onoff', 'dim'],
			id: 'ALED-2709',
			signal: 'kakudim',
			class: 'light',
			alternativeSignal: 'kaku',
			name: 'devices.ALED-2709.name',
			images: {
				large: '../433_generator/assets/ALED-2709/images/large.jpg',
				small: '../433_generator/assets/ALED-2709/images/small.jpg'
			}
		},
		'AYCT-102': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/AYCT-102/remote.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AYCT-102/images/large.jpg',
				small: '../433_generator/assets/AYCT-102/images/small.jpg'
			},
			id: 'AYCT-102',
			triggers: [{
				id: 'AYCT-102:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'channel',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.channels.I'
					}, {
						id: '01',
						label: '433_generator.generic.channels.II'
					}, {
						id: '10',
						label: '433_generator.generic.channels.III'
					}, {
						id: '11',
						label: '433_generator.generic.channels.IV'
					}]
				}, {
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.buttons.1'
					}, {
						id: '01',
						label: '433_generator.generic.buttons.2'
					}, {
						id: '10',
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=AYCT-102'
				}]
			}],
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/remote',
			signal: 'kaku',
			name: 'devices.AYCT-102.name',
			icon: '../433_generator/assets/AYCT-102/remote.svg'
		},
		'AILS-3500': {
			capabilities: ['onoff'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AILD-250/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/AILD-250/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AILD-250/images/large.png',
				small: '../433_generator/assets/AILD-250/images/small.png'
			},
			id: 'AILS-3500',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			signal: 'kaku',
			name: 'devices.AILD-3500.name',
			icon: '../433_generator/assets/AILD-250/icon.svg'
		},
		'YC-1000': {
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_codewheel_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/YCT-102/icon.svg'
						}, {
							name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
							view: 'generic_codewheel',
							svg: '../433_generator/assets/YC-400/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/YCT-102/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/codewheel.html',
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
					prepend: ['./../assets/433_generator/css/codewheel.css',
						'./../assets/433_generator/js/codewheel.js'
					],
					append: [],
					id: 'generic_codewheel'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/YC-400/images/large.jpg',
				small: '../433_generator/assets/YC-400/images/small.jpg'
			},
			id: 'YC-1000',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/kaku.js',
			signal: 'kakuold',
			name: 'devices.YC-1000.name',
			icon: '../433_generator/assets/YC-400/icon.svg'
		},
		'ALED-MR2705': {
			icon: '../433_generator/assets/ALED-MR2705/icon.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/new_dimmer.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_program',
					'generic_test_switch',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ALED-MR2705/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'devices.ALED-2709.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'devices.ALED-2709.views.generic_program.body',
						svg: '../433_generator/assets/ALED-MR2705/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'devices.ALED-2709.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch'
				}, {
					template: './lib/pair/done.html',
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
			capabilities: ['onoff', 'dim'],
			id: 'ALED-MR2705',
			signal: 'kakudim',
			class: 'light',
			alternativeSignal: 'kaku',
			name: 'devices.ALED-MR2705.name',
			images: {
				large: '../433_generator/assets/ALED-MR2705/images/large.jpg',
				small: '../433_generator/assets/ALED-MR2705/images/small.jpg'
			}
		},
		'AFR-100': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_program',
					'generic_test_switch',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AFR-100/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'devices.AFR-100.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'devices.AFR-100.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'devices.AFR-100.views.generic_program.body',
						svg: '../433_generator/assets/AFR-100/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'devices.AFR-100.views.generic_test_switch.title',
						body: 'devices.AFR-100.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AFR-100/images/large.jpg',
				small: '../433_generator/assets/AFR-100/images/small.jpg'
			},
			id: 'AFR-100',
			class: 'light',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.AFR-100.name',
			icon: '../433_generator/assets/AFR-100/icon.svg'
		},
		'ACD-1000': {
			icon: '../433_generator/assets/ACD-200/socket.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACD-200/socket.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/ACD-200/socket.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
			capabilities: ['onoff'],
			id: 'ACD-1000',
			signal: 'kaku',
			class: 'socket',
			alternativeSignal: 'kaku',
			name: 'devices.ACD-1000.name',
			images: {
				large: '../433_generator/assets/ACD-200/images/large.png',
				small: '../433_generator/assets/ACD-200/images/small.png'
			}
		},
		'AWMR-300': {
			capabilities: ['onoff'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AWMR-300/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/AWMR-300/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AWMR-300/images/large.png',
				small: '../433_generator/assets/AWMR-300/images/small.png'
			},
			id: 'AWMR-300',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			signal: 'kaku',
			name: 'devices.AWMR-300.name',
			icon: '../433_generator/assets/AWMR-300/icon.svg'
		},
		'AWS-3500': {
			capabilities: ['onoff'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AWS-3500/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/AWS-3500/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AWS-3500/images/large.png',
				small: '../433_generator/assets/AWS-3500/images/small.png'
			},
			id: 'AWS-3500',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			signal: 'kaku',
			name: 'devices.AWS-3500.name',
			icon: '../433_generator/assets/AWS-3500/icon.svg'
		},
		'APA3-1500R': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/APA3-1500R/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/assets/APA3-1500R/test.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/APA3-1500R/images/large.jpg',
				small: '../433_generator/assets/APA3-1500R/images/small.jpg'
			},
			id: 'APA3-1500R',
			triggers: [{
				id: 'APA3-1500R:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00',
						label: '433_generator.generic.buttons.1'
					}, {
						id: '01',
						label: '433_generator.generic.buttons.2'
					}, {
						id: '10',
						label: '433_generator.generic.buttons.3'
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
					}]
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=APA3-1500R'
				}]
			}],
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/remote',
			signal: 'kaku',
			name: 'devices.APA3-1500R.name',
			icon: '../433_generator/assets/APA3-1500R/icon.svg'
		},
		'AMST-606': {
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/contact_sensor.js',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						body: 'devices.AMST-606.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AMST-606/pair.svg',
						title: 'devices.AMST-606.views.generic_imitate.title',
						svgWidth: '50vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						body: 'devices.AMST-606.views.generic_test_remote.body',
						initWithDeviceData: true,
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AMST-606/test.svg',
						title: 'devices.AMST-606.views.generic_test_remote.title',
						svgWidth: '50vw',
						svgHeight: '70vh',
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AMST-606/images/large.png',
				small: '../433_generator/assets/AMST-606/images/small.png'
			},
			name: 'devices.AMST-606.name',
			icon: '../433_generator/assets/AMST-606/icon.svg',
			capabilities: ['alarm_contact']
		},
		'AGDR-3500': {
			capabilities: ['onoff'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AGDR-300/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/AGDR-300/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AGDR-300/images/large.jpg',
				small: '../433_generator/assets/AGDR-300/images/small.jpg'
			},
			id: 'AGDR-3500',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/kaku.js',
			signal: 'kaku',
			alternativeSignal: 'kaku',
			name: 'devices.AGDR-3500.name',
			icon: '../433_generator/assets/AGDR-300/icon.svg'
		},
		'PAR-1000': {
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_codewheel_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/PA3-1000R/icon.svg'
						}, {
							name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
							view: 'generic_codewheel',
							svg: '../433_generator/assets/PAR-1000/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/PA3-1000R/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/codewheel.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						codewheelList: [{
							series: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
							mapOddToDot: false,
							quadrants: ['A', 'B', 'C', 'D']
						}],
						title: 'views.generic_codewheel.title',
						body: 'views.generic_codewheel.body',
						next: true
					},
					prepend: ['./../assets/433_generator/css/codewheel.css',
						'./../assets/433_generator/js/codewheel.js'
					],
					append: [],
					id: 'generic_codewheel'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/PAR-1000/images/large.jpg',
				small: '../433_generator/assets/PAR-1000/images/small.jpg'
			},
			id: 'PAR-1000',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kakuold/codewheel.js',
			signal: 'kakuold',
			name: 'devices.PAR-1000.name',
			icon: '../433_generator/assets/PAR-1000/icon.svg'
		},
		'ALED-G2706': {
			icon: '../433_generator/assets/ALED-G2706/icon.svg',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/new_dimmer.js',
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_program',
					'generic_test_switch',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ALED-G2706/icon.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'devices.ALED-2709.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
				}, {
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'devices.ALED-2709.views.generic_program.body',
						svg: '../433_generator/assets/ALED-G2706/icon.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'devices.ALED-2709.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch'
				}, {
					template: './lib/pair/done.html',
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
			capabilities: ['onoff', 'dim'],
			id: 'ALED-G2706',
			signal: 'kakudim',
			class: 'light',
			alternativeSignal: 'kaku',
			name: 'devices.ALED-G2706.name',
			images: {
				large: '../433_generator/assets/ALED-G2706/images/large.jpg',
				small: '../433_generator/assets/ALED-G2706/images/small.jpg'
			}
		},
		'ACD-200': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/ACD-200/socket.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.socket.views.generic_program.body',
						svg: '../433_generator/assets/ACD-200/socket.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/ACD-200/images/large.png',
				small: '../433_generator/assets/ACD-200/images/small.png'
			},
			id: 'ACD-200',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.ACD-200.name',
			icon: '../433_generator/assets/ACD-200/socket.svg'
		},
		'AILD-250': {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done'
				],
				views: [{
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'views.generic_choice.buttons.copy',
							view: 'generic_imitate',
							svg: '../433_generator/assets/AYCT-102/remote.svg'
						}, {
							name: 'views.generic_choice.buttons.generate',
							view: 'generic_program',
							svg: '../433_generator/assets/AILD-250/pair.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.build_in.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AYCT-102/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
						svg: '../433_generator/assets/AILD-250/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: true,
						previous: true,
						next: true,
						sendToggleOnInit: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				large: '../433_generator/assets/AILD-250/images/large.png',
				small: '../433_generator/assets/AILD-250/images/small.png'
			},
			id: 'AILD-250',
			class: 'socket',
			debounceTimeout: 500,
			driver: '../433_generator/drivers/kaku/dimmer.js',
			signal: 'kakudim',
			alternativeSignal: 'kaku',
			name: 'devices.AILD-250.name',
			icon: '../433_generator/assets/AILD-250/icon.svg'
		}
	}
};
