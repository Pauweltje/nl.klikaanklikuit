'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		'AWST-8800': {
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
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
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tHomey.emit(\'set_settings\', { rotated: this.checked ? \'180\' : \'0\'}, function(){\n\t\t\t\tHomey.emit(\'settings_change\');\n\t\t\t})\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/AWST-8800/images/large.png',
				small: '../433_generator/assets/AWST-8800/images/small.png'
			},
			id: 'AWST-8800',
			driver: '../433_generator/drivers/kaku/wall_switch.js',
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
		'AWST-6000': {
			icon: '../433_generator/assets/AWST-6000/icon.svg',
			driver: '../433_generator/drivers/kaku/sensor.js',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.sensor.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWST-6000/pair.svg',
						title: 'devices.AWST-6000.views.generic_imitate.title',
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
						title: 'devices.AWST-6000.views.generic_test_remote.title',
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			id: 'AWST-6000',
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
			class: 'sensor',
			conditions: [{
				id: 'AWST-6000:state',
				title: 'devices.AWST-6000.conditions.state.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=AWST-6000'
				}]
			}],
			name: 'devices.AWST-6000.name',
			capabilities: ['alarm_motion'],
			images: {
				large: '../433_generator/assets/AWST-6000/images/large.png',
				small: '../433_generator/assets/AWST-6000/images/small.png'
			}
		},
		'APA2-2300RS': {
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
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
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
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/APA2-2300RS/images/large.jpg',
				small: '../433_generator/assets/APA2-2300RS/images/small.jpg'
			},
			id: 'APA2-2300RS',
			class: 'socket',
			driver: '../433_generator/drivers/kaku/kaku.js',
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
			name: 'devices.APA2-2300RS.name',
			icon: '../433_generator/assets/ACD-200/socket.svg'
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kakuold/remote',
			signal: {
				sof: [],
				eof: [312],
				words: [
					[312, 1090, 312, 1090],
					[312, 1090, 990, 400],
					[312, 1090, 312, 380]
				],
				interval: 11000,
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 12,
				maximalLength: 12
			},
			name: 'devices.PA3-1000R.name',
			icon: '../433_generator/assets/PA3-1000R/icon.svg'
		},
		'AWST-8802': {
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
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
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tHomey.emit(\'set_settings\', { rotated: this.checked ? \'180\' : \'0\'}, function(){\n\t\t\t\tHomey.emit(\'settings_change\');\n\t\t\t})\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/AWST-8802/images/large.jpg',
				small: '../433_generator/assets/AWST-8802/images/small.jpg'
			},
			id: 'AWST-8802',
			driver: '../433_generator/drivers/kaku/wall_switch.js',
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
			class: 'other',
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kakuold/remote',
			signal: {
				sof: [],
				eof: [312],
				words: [
					[312, 1090, 312, 1090],
					[312, 1090, 990, 400],
					[312, 1090, 312, 380]
				],
				interval: 11000,
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 12,
				maximalLength: 12
			},
			name: 'devices.YCT-102.name',
			icon: '../433_generator/assets/YCT-102/icon.svg'
		},
		'WST-8700': {
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
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
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tHomey.emit(\'set_settings\', { rotated: this.checked ? \'180\' : \'0\'}, function(){\n\t\t\t\tHomey.emit(\'settings_change\');\n\t\t\t})\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/WST-8700/images/large.jpg',
				small: '../433_generator/assets/WST-8700/images/small.jpg'
			},
			id: 'WST-8700',
			driver: '../433_generator/drivers/kakuold/wall_switch.js',
			signal: {
				sof: [],
				eof: [312],
				words: [
					[312, 1090, 312, 1090],
					[312, 1090, 990, 400],
					[312, 1090, 312, 380]
				],
				interval: 11000,
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 12,
				maximalLength: 12
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kaku/remote',
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
			name: 'devices.AYCT-102.name',
			icon: '../433_generator/assets/AYCT-102/remote.svg'
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
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tHomey.emit(\'set_settings\', { rotated: this.checked ? \'180\' : \'0\'}, function(){\n\t\t\t\tHomey.emit(\'settings_change\');\n\t\t\t})\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.blinds.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_switch_2"] .centered-container > #image-container\')'
						}],
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch_2.body',
						svg: '../433_generator/assets/ASUN-650/test.svg',
						svgHeight: '60vh',
						svgWidth: '80vw',
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
						body: 'deviceClasses.blinds.views.generic_program.body',
						svg: '../433_generator/assets/ASUN-650/pairbutton.svg',
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
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch.body',
						append: [{
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tHomey.emit(\'set_settings\', { rotated: this.checked ? \'180\' : \'0\'}, function(){\n\t\t\t\tHomey.emit(\'settings_change\');\n\t\t\t})\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.blinds.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_switch"] .centered-container > #image-container\')'
						}],
						prepend: [],
						svg: '../433_generator/assets/ASUN-650/test.svg',
						svgHeight: '60vh',
						svgWidth: '80vw',
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kaku/blinds.js',
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
		'AFR-100': {
			driver: '../433_generator/drivers/kaku/dimmer.js',
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
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			capabilities: ['onoff', 'dim'],
			id: 'AFR-100',
			signal: {
				sof: [210, 2724],
				eof: [210],
				words: [
					[210, 320, 210, 1320],
					[210, 1320, 210, 320],
					[210, 320, 210, 320]
				],
				interval: 10150,
				sensitivity: 0.9,
				repetitions: 10,
				minimalLength: 32,
				maximalLength: 36
			},
			class: 'light',
			images: {
				large: '../433_generator/assets/AFR-100/images/large.jpg',
				small: '../433_generator/assets/AFR-100/images/small.jpg'
			},
			alternativeSignal: {
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
			name: 'devices.AFR-100.name',
			icon: '../433_generator/assets/AFR-100/icon.svg'
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
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true,
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kaku/doorbell.js',
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
			icon: '../433_generator/assets/ACDB-7000C/icon.svg',
			debounceTimeout: 3000
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
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true,
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kaku/doorbell.js',
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
			icon: '../433_generator/assets/ACDB-6600/icon.svg',
			debounceTimeout: 3000
		},
		'APA3-1500RS': {
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
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
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
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/APA3-1500RS/images/large.jpg',
				small: '../433_generator/assets/APA3-1500RS/images/small.jpg'
			},
			id: 'APA3-1500RS',
			class: 'socket',
			driver: '../433_generator/drivers/kaku/kaku.js',
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
			name: 'devices.APA3-1500RS.name',
			icon: '../433_generator/assets/APA3-1500RS/icon.svg'
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kaku/remote',
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
			name: 'devices.APA3-1500R.name',
			icon: '../433_generator/assets/APA3-1500R/icon.svg'
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kaku/sensor.js',
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
		'AMST-606': {
			class: 'sensor',
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/AMST-606/images/large.png',
				small: '../433_generator/assets/AMST-606/images/small.png'
			},
			id: 'AMST-606',
			driver: '../433_generator/drivers/kaku/contact_sensor.js',
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
				maximalLength: 36
			},
			conditions: [{
				id: 'AMST-606:state',
				title: 'devices.AMST-606.conditions.state.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=AMST-606'
				}]
			}],
			name: 'devices.AMST-606.name',
			icon: '../433_generator/assets/AMST-606/icon.svg',
			capabilities: ['alarm_contact']
		},
		'AGDR-300': {
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
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
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
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			capabilities: ['onoff', 'dim'],
			id: 'AGDR-300',
			signal: {
				sof: [210, 2724],
				eof: [210],
				words: [
					[210, 320, 210, 1320],
					[210, 1320, 210, 320],
					[210, 320, 210, 320]
				],
				interval: 10150,
				sensitivity: 0.9,
				repetitions: 10,
				minimalLength: 32,
				maximalLength: 36
			},
			class: 'socket',
			images: {
				large: '../433_generator/assets/AGDR-300/images/large.jpg',
				small: '../433_generator/assets/AGDR-300/images/small.jpg'
			},
			alternativeSignal: {
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
						prepend: [],
						append: []
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
			driver: '../433_generator/drivers/kaku/remote_valueline',
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
			name: 'devices.APA2-2300R.name',
			icon: '../433_generator/assets/APA2-2300R/icon.svg'
		},
		'APIR-2150': {
			icon: '../433_generator/assets/APIR-2150/icon.svg',
			driver: '../433_generator/drivers/kaku/sensor.js',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						body: 'deviceClasses.sensor.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/assets/AWST-6000/pair.svg',
						title: 'devices.AWST-6000.views.generic_imitate.title',
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
						title: 'devices.AWST-6000.views.generic_test_remote.title',
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			id: 'APIR-2150',
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
			class: 'sensor',
			conditions: [{
				id: 'APIR-2150:state',
				title: 'devices.AWST-6000.conditions.state.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=APIR-2150'
				}]
			}],
			name: 'devices.APIR-2150.name',
			capabilities: ['alarm_motion'],
			images: {
				large: '../433_generator/assets/APIR-2150/images/large.png',
				small: '../433_generator/assets/APIR-2150/images/small.png'
			}
		},
		'KCT-510': {
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/KCT-510/images/large.jpg',
				small: '../433_generator/assets/KCT-510/images/small.jpg'
			},
			id: 'KCT-510',
			driver: '../433_generator/drivers/kakuold/kaku.js',
			signal: {
				sof: [],
				eof: [312],
				words: [
					[312, 1090, 312, 1090],
					[312, 1090, 990, 400],
					[312, 1090, 312, 380]
				],
				interval: 11000,
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 12,
				maximalLength: 12
			},
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
		'AKCT-510': {
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/AKCT-510/images/large.jpg',
				small: '../433_generator/assets/AKCT-510/images/small.jpg'
			},
			id: 'AKCT-510',
			driver: '../433_generator/drivers/kaku/kaku.js',
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
		'ACD-200': {
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
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
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
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			capabilities: ['onoff', 'dim'],
			id: 'ACD-200',
			signal: {
				sof: [210, 2724],
				eof: [210],
				words: [
					[210, 320, 210, 1320],
					[210, 1320, 210, 320],
					[210, 320, 210, 320]
				],
				interval: 10150,
				sensitivity: 0.9,
				repetitions: 10,
				minimalLength: 32,
				maximalLength: 36
			},
			class: 'socket',
			images: {
				large: '../433_generator/assets/ACD-200/images/large.png',
				small: '../433_generator/assets/ACD-200/images/small.png'
			},
			alternativeSignal: {
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
			name: 'devices.ACD-200.name',
			icon: '../433_generator/assets/ACD-200/socket.svg'
		},
		'WST-8800': {
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
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
							scripts: '\n$(\'<div>\').append(\n\t$(\'<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">\')\n\t\t.on(\'change\', function(){ \n\t\t\tHomey.emit(\'set_settings\', { rotated: this.checked ? \'180\' : \'0\'}, function(){\n\t\t\t\tHomey.emit(\'settings_change\');\n\t\t\t})\n\t\t}),\n\t$(\'<label for="invert-checkbox" style="padding: 0 1em;">\')\n\t\t.html(__(\'deviceClasses.wall_switch.settings.rotated.label\'))\n).insertAfter(\'[data-id="generic_test_remote"] .centered-container > #image-container\')'
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/WST-8800/images/large.png',
				small: '../433_generator/assets/WST-8800/images/small.png'
			},
			id: 'WST-8800',
			driver: '../433_generator/drivers/kakuold/wall_switch.js',
			signal: {
				sof: [],
				eof: [312],
				words: [
					[312, 1090, 312, 1090],
					[312, 1090, 990, 400],
					[312, 1090, 312, 380]
				],
				interval: 11000,
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 12,
				maximalLength: 12
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
		'AC-300': {
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
							svg: '../433_generator/assets/YCT-102/icon.svg'
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
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
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
						prepend: [],
						append: []
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			images: {
				large: '../433_generator/assets/AC-300/images/large.png',
				small: '../433_generator/assets/AC-300/images/small.png'
			},
			id: 'AC-300',
			class: 'socket',
			driver: '../433_generator/drivers/kakuold/kaku.js',
			signal: {
				sof: [],
				eof: [312],
				words: [
					[312, 1090, 312, 1090],
					[312, 1090, 990, 400],
					[312, 1090, 312, 380]
				],
				interval: 11000,
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 12,
				maximalLength: 12
			},
			name: 'devices.AC-300.name',
			icon: '../433_generator/assets/ACD-200/socket.svg'
		}
	}
};
