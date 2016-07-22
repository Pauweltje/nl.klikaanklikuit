'use strict';

module.exports = {
	views: {},
	deviceClasses: {
		defaults: {
			pair: {
				viewOptions: {
					generic_done: {
						title: 'views.generic_done.title',
					},
				},
			},
		},
		kaku_old: {
			extends: 'defaults',
			driver: './drivers/kakuold/kaku.js',
			signal: {
				sof: [],
				eof: [312],
				words: [
					[312, 1090, 312, 1090],	// 0
					[312, 1090, 990, 400],	// 1
					[312, 1090, 312, 380],   // 2
				],
				interval: 11000,
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 12,
				maximalLength: 12,
			},
		},
		kaku: {
			extends: 'defaults',
			driver: './drivers/kaku/kaku.js',
			signal: {
				sof: [210, 2724], // Start of frame
				eof: [210], // End of frame
				words: [
					[210, 320, 210, 1320],	// 0
					[210, 1320, 210, 320],	// 1
				],
				interval: 10150, // Time between two messages
				sensitivity: 0.9,
				repetitions: 10,
				minimalLength: 32,
				maximalLength: 32,
			},
		},
		dimmer: {
			extends: ['socket'],
			driver: './drivers/kaku/dimmer.js',
			signal: {
				sof: [210, 2724], // Start of frame
				eof: [210], // End of frame
				words: [
					[210, 320, 210, 1320],	// 0
					[210, 1320, 210, 320],	// 1
					[210, 320, 210, 320],  // 2 <-- used for dim
				],
				interval: 10150, // Time between two messages
				sensitivity: 0.9,
				repetitions: 10,
				minimalLength: 32,
				maximalLength: 36,
			},
			alternativeSignal: {
				sof: [210, 2724], // Start of frame
				eof: [210], // End of frame
				words: [
					[210, 320, 210, 1320],	// 0
					[210, 1320, 210, 320],	// 1
				],
				interval: 10150, // Time between two messages
				sensitivity: 0.9,
				repetitions: 10,
				minimalLength: 32,
				maximalLength: 32,
			},
		},
		socket: {
			extends: ['generic_socket', 'kaku'],
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{ name: 'views.generic_choice.buttons.copy', view: 'generic_imitate' },
							{ name: 'views.generic_choice.buttons.generate', view: 'generic_program' },
						],
					},
					generic_program: {
						body: 'deviceClasses.socket.views.generic_program.body',
					},
				},
			},
			capabilities: ['onoff'],
		},
		simple_socket: {
			extends: ['socket'],
			pair: {
				viewOptions: {
					generic_program: {
						body: 'deviceClasses.simple_socket.views.generic_program.body',
					},
				},
			},
		},
		remote: {
			extends: ['generic_remote'],
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'channel',
							type: 'dropdown',
							values: [
								{ id: '00', label: '433_generator.generic.channels.I' },
								{ id: '01', label: '433_generator.generic.channels.II' },
								{ id: '10', label: '433_generator.generic.channels.III' },
								{ id: '11', label: '433_generator.generic.channels.IV' },
							],
						},
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '00', label: '433_generator.generic.buttons.1' },
								{ id: '01', label: '433_generator.generic.buttons.2' },
								{ id: '10', label: '433_generator.generic.buttons.3' },
								{ id: '11', label: '433_generator.generic.buttons.4' },
								{ id: 'g', label: '433_generator.generic.buttons.G' },
							],
						},
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: '433_generator.generic.on' },
								{ id: '0', label: '433_generator.generic.off' },
							],
						},
					],
				},
			],
			// Actions for remotes are disabled for now since it could lead to confusion
			// actions: [
			// 	{
			// 		id: 'send',
			// 		title: 'deviceClasses.remote.triggers.send.title',
			// 		args: [
			// 			{
			// 				name: 'channel',
			// 				type: 'dropdown',
			// 				values: [
			// 					{ id: '00', label: '433_generator.generic.channels.I' },
			// 					{ id: '01', label: '433_generator.generic.channels.II' },
			// 					{ id: '10', label: '433_generator.generic.channels.III' },
			// 					{ id: '11', label: '433_generator.generic.channels.IV' },
			// 				],
			// 			},
			// 			{
			// 				name: 'unit',
			// 				type: 'dropdown',
			// 				values: [
			// 					{ id: '00', label: '433_generator.generic.buttons.1' },
			// 					{ id: '01', label: '433_generator.generic.buttons.2' },
			// 					{ id: '10', label: '433_generator.generic.buttons.3' },
			// 					{ id: '11', label: '433_generator.generic.buttons.4' },
			// 					{ id: 'g', label: '433_generator.generic.buttons.G' },
			// 				],
			// 			},
			// 			{
			// 				name: 'state',
			// 				type: 'dropdown',
			// 				values: [
			// 					{ id: '1', label: '433_generator.generic.on' },
			// 					{ id: '0', label: '433_generator.generic.off' },
			// 				],
			// 			},
			// 		],
			// 	},
			// ],
		},
		tiny_remote: {
			extends: 'remote',
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: '433_generator.generic.on' },
								{ id: '0', label: '433_generator.generic.off' },
							],
						},
					],
				},
			],
		},
		kaku_remote: {
			extends: ['remote', 'kaku'],
			driver: './drivers/kaku/remote',
		},
		kaku_remote_old: {
			extends: ['remote', 'kaku_old'],
			driver: './drivers/kakuold/remote',
		},
		wall_switch_single: {
			extends: ['wall_switch'],
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: '433_generator.generic.on' },
								{ id: '0', label: '433_generator.generic.off' },
							],
						},
					],
				},
			],
			// Actions for remotes are disabled for now since it could lead to confusion
			// actions: [
			// 	{
			// 		id: 'send',
			// 		title: 'deviceClasses.remote.triggers.send.title',
			// 		args: [
			// 			{
			// 				name: 'state',
			// 				type: 'dropdown',
			// 				values: [
			// 					{ id: '1', label: '433_generator.generic.on' },
			// 					{ id: '0', label: '433_generator.generic.off' },
			// 				],
			// 			},
			// 		],
			// 	},
			// ],
		},
		wall_switch: {
			extends: ['generic_wall_switch', 'remote'],
			driver: './drivers/kaku/wall_switch',
			pair: {
				viewOptions: {
					generic_test_remote: {
						append: {
							scripts: `
$('<div>').append(
	$('<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">')
		.on('change', function(){ 
			Homey.emit('set_settings', { rotated: this.checked ? '180' : '0'}, function(){
				Homey.emit('settings_change');
			})
		}),
	$('<label for="invert-checkbox" style="padding: 0 1em;">')
		.html(__('deviceClasses.wall_switch.settings.rotated.label'))
).insertAfter('[data-id="generic_test_remote"] .centered-container > #image-container')`,
						},
					},
				},
			},
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '10', label: '433_generator.generic.buttons.left' },
								{ id: '11', label: '433_generator.generic.buttons.right' },
							],
						},
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: '433_generator.generic.on' },
								{ id: '0', label: '433_generator.generic.off' },
							],
						},
					],
				},
			],
			// Actions for remotes are disabled for now since it could lead to confusion
			// actions: [
			// 	{
			// 		id: 'send',
			// 		title: 'deviceClasses.remote.triggers.send.title',
			// 		args: [
			// 			{
			// 				name: 'unit',
			// 				type: 'dropdown',
			// 				values: [
			// 					{ id: '10', label: 'deviceClasses.wall_switch.triggers.received.left' },
			// 					{ id: '11', label: 'deviceClasses.wall_switch.triggers.received.right' },
			// 				],
			// 			},
			// 			{
			// 				name: 'state',
			// 				type: 'dropdown',
			// 				values: [
			// 					{ id: '1', label: '433_generator.generic.on' },
			// 					{ id: '0', label: '433_generator.generic.off' },
			// 				],
			// 			},
			// 		],
			// 	},
			// ],
			settings: [
				{
					type: 'group',
					label: 'deviceClasses.wall_switch.settings.groups.general',
					children: [
						{
							id: 'rotated',
							type: 'radio',
							value: '0',
							label: 'deviceClasses.wall_switch.settings.rotated.label',
							values: [
								{
									id: '0',
									label: 'deviceClasses.wall_switch.settings.rotated.0',
								},
								{
									id: '180',
									label: 'deviceClasses.wall_switch.settings.rotated.180',
								},
							],
						},
					],
				},
			],
		},
		wall_switch_new: {
			extends: ['kaku', 'wall_switch'],
			driver: './drivers/kaku/wall_switch.js',
		},
		wall_switch_single_new: {
			extends: ['kaku', 'wall_switch_single'],
			driver: './drivers/kaku/wall_switch.js',
		},
		wall_switch_single_old: {
			extends: ['kaku_old', 'wall_switch_single'],
			driver: './drivers/kakuold/wall_switch.js',
		},
		doorbell: {
			extends: ['generic_toggle', 'kaku'],
			driver: './drivers/kaku/doorbell.js',
			class: 'doorbell',
			capabilities: ['alarm_generic'],
			pair: {
				viewOptions: {
					generic_choice: {
						body: 'deviceClasses.doorbell.views.generic_choice.body',
						buttons: [
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
							},
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_program',
								view: 'generic_program',
							},
						],
					},
					generic_program: {
						body: 'deviceClasses.socket.views.generic_program.body',
					},
					generic_imitate: {
						body: 'deviceClasses.doorbell.views.generic_imitate.body',
					},
					generic_test_button: {
						title: 'deviceClasses.doorbell.views.generic_test_button.title',
						body: 'deviceClasses.doorbell.views.generic_test_button.body',
					},
					generic_test_button_2: {
						title: 'deviceClasses.doorbell.views.generic_test_button.title',
						body: 'deviceClasses.doorbell.views.generic_test_button_2.body',
					},
				},
			},
			triggers: [
				{
					id: 'received',
					title: 'deviceClasses.doorbell.triggers.received.title',
				},
			],
			actions: [
				{
					id: 'send',
					title: 'deviceClasses.doorbell.triggers.send.title',
				},
			],
		},
		sensor: {
			extends: ['generic_sensor', 'kaku'],
			driver: './drivers/kaku/sensor.js',
			pair: {
				viewOptions: {
					generic_imitate: {
						body: 'deviceClasses.sensor.views.generic_imitate.body',
					},
					generic_test_remote: {
						body: 'deviceClasses.sensor.views.generic_test_remote.body',
						initWithDeviceData: true,
					},
				},
			},
			conditions: [
				{
					id: 'state',
					title: 'deviceClasses.sensor.conditions.state.title',
				},
			],
		},
		blinds: {
			extends: ['generic_switch', 'kaku'],
			driver: './drivers/kaku/blinds.js',
			class: 'windowcoverings',
			capabilities: ['windowcoverings_state'],
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
							},
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_program',
								view: 'generic_program',
							},
						],
					},
					generic_program: {
						body: 'deviceClasses.blinds.views.generic_program.body',
					},
					generic_imitate: {
						body: 'deviceClasses.blinds.views.generic_imitate.body',
					},
					generic_test_switch: {
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch.body',
					},
					generic_test_switch_2: {
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch_2.body',
					},
				},
			},
		},
	},
	devices: {
		'AYCT-102': {
			extends: 'kaku_remote',
			name: 'devices.AYCT-102.name',
			images: {
				large: './assets/AYCT-102/images/large.jpg',
				small: './assets/AYCT-102/images/small.jpg',
			},
			icon: './assets/AYCT-102/remote.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_test_remote: {
						svg: './assets/AYCT-102/remote.svg',
					},
				},
			},
		},
		'YCT-102': {
			extends: 'kaku_remote_old',
			name: 'devices.YCT-102.name',
			images: {
				large: './assets/YCT-102/images/large.png',
				small: './assets/YCT-102/images/small.png',
			},
			icon: './assets/YCT-102/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/YCT-102/pair.svg',
					},
					generic_test_remote: {
						svg: './assets/YCT-102/test.svg',
					},
				},
			},
		},
		'PA3-1000R': {
			extends: 'kaku_remote_old',
			name: 'devices.PA3-1000R.name',
			images: {
				large: './assets/PA3-1000R/images/large.jpg',
				small: './assets/PA3-1000R/images/small.jpg',
			},
			icon: './assets/PA3-1000R/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/PA3-1000R/pair.svg',
					},
					generic_test_remote: {
						svg: './assets/PA3-1000R/test.svg',
					},
				},
			},
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '00', label: '433_generator.generic.buttons.1' },
								{ id: '01', label: '433_generator.generic.buttons.2' },
								{ id: '10', label: '433_generator.generic.buttons.3' },
							],
						},
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: '433_generator.generic.on' },
								{ id: '0', label: '433_generator.generic.off' },
							],
						},
					],
				},
			],
		},
		'AKCT-510': {
			extends: ['kaku', 'tiny_remote'],
			name: 'devices.AKCT-510.name',
			images: {
				large: './assets/AKCT-510/images/large.jpg',
				small: './assets/AKCT-510/images/small.jpg',
			},
			icon: './assets/AKCT-510/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AKCT-510/pair.svg',
					},
					generic_test_remote: {
						svg: './assets/AKCT-510/test.svg',
					},
				},
			},
		},
		'KCT-510': {
			extends: ['kaku_old', 'tiny_remote'],
			name: 'devices.KCT-510.name',
			images: {
				large: './assets/KCT-510/images/large.jpg',
				small: './assets/KCT-510/images/small.jpg',
			},
			icon: './assets/KCT-510/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/KCT-510/pair.svg',
					},
					generic_test_remote: {
						svg: './assets/KCT-510/test.svg',
					},
				},
			},
		},
		// TODO enable when homey client device selector ui is fixed
		// 'KCT-101': {
		// 	extends: ['tiny_remote', 'kaku_old'],
		// 	name: 'devices.KCT-101.name',
		// 	images: {
		// 		large: './assets/KCT-101/images/large.png',
		// 		small: './assets/KCT-101/images/small.png',
		// 	},
		// 	icon: './assets/KCT-101/icon.svg',
		// 	pair: {
		// 		viewOptions: {
		// 			generic_imitate: {
		// 				svg: './assets/KCT-101/pair.svg',
		// 			},
		// 			generic_test_remote: {
		// 				svg: './assets/KCT-101/test.svg',
		// 			},
		// 		},
		// 	},
		// },
		'APA2-2300R': {
			extends: 'kaku_remote',
			driver: './drivers/kaku/remote_valueline',
			name: 'devices.APA2-2300R.name',
			images: {
				large: './assets/APA2-2300R/images/large.jpg',
				small: './assets/APA2-2300R/images/small.jpg',
			},
			icon: './assets/APA2-2300R/icon.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/APA2-2300R/pair.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/APA2-2300R/icon.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/APA2-2300R/pair.svg',
					},
					generic_test_remote: {
						svg: './assets/APA2-2300R/test.svg',
					},
				},
			},
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '00', label: '433_generator.generic.buttons.1' },
								{ id: '01', label: '433_generator.generic.buttons.2' },
								{ id: 'g', label: '433_generator.generic.buttons.G' },
							],
						},
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: '433_generator.generic.on' },
								{ id: '0', label: '433_generator.generic.off' },
							],
						},
					],
				},
			],
		},
		'APA3-1500R': {
			extends: 'kaku_remote',
			name: 'devices.APA3-1500R.name',
			images: {
				large: './assets/APA3-1500R/images/large.jpg',
				small: './assets/APA3-1500R/images/small.jpg',
			},
			icon: './assets/APA3-1500R/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/APA3-1500R/pair.svg',
					},
					generic_test_remote: {
						svg: './assets/APA3-1500R/test.svg',
					},
				},
			},
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '00', label: '433_generator.generic.buttons.1' },
								{ id: '01', label: '433_generator.generic.buttons.2' },
								{ id: '10', label: '433_generator.generic.buttons.3' },
								{ id: 'g', label: '433_generator.generic.buttons.G' },
							],
						},
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: '433_generator.generic.on' },
								{ id: '0', label: '433_generator.generic.off' },
							],
						},
					],
				},
			],
		},
		'APA3-1500RS': {
			extends: ['simple_socket'],
			name: 'devices.APA3-1500RS.name',
			images: {
				large: './assets/APA3-1500RS/images/large.jpg',
				small: './assets/APA3-1500RS/images/small.jpg',
			},
			icon: './assets/APA3-1500RS/icon.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/APA3-1500R/icon.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/APA3-1500RS/icon.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/APA3-1500R/pair.svg',
					},
					generic_program: {
						svg: './assets/APA3-1500RS/pair.svg',
					},
				},
			},
		},
		'AWST-8802': {
			extends: 'wall_switch_new',
			name: 'devices.AWST-8802.name',
			images: {
				large: './assets/AWST-8802/images/large.jpg',
				small: './assets/AWST-8802/images/small.jpg',
			},
			icon: './assets/AWST-8802/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AWST-8802/switch_pair.svg',
					},
					generic_test_remote: {
						svg: './assets/AWST-8802/switch.svg',
					},
				},
			},
		},
		'AWST-8800': {
			extends: 'wall_switch_single_new',
			name: 'devices.AWST-8800.name',
			images: {
				large: './assets/AWST-8800/images/large.png',
				small: './assets/AWST-8800/images/small.png',
			},
			icon: './assets/AWST-8800/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AWST-8800/switch_pair.svg',
					},
					generic_test_remote: {
						svg: './assets/AWST-8800/switch.svg',
					},
				},
			},
		},
		'WST-8700': {
			extends: 'wall_switch_single_old',
			name: 'devices.WST-8700.name',
			images: {
				large: './assets/WST-8700/images/large.jpg',
				small: './assets/WST-8700/images/small.jpg',
			},
			icon: './assets/WST-8700/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/WST-8700/switch_pair.svg',
					},
					generic_test_remote: {
						svg: './assets/WST-8700/switch.svg',
					},
				},
			},
		},
		'WST-8800': {
			extends: 'wall_switch_single_old',
			name: 'devices.WST-8800.name',
			images: {
				large: './assets/WST-8800/images/large.png',
				small: './assets/WST-8800/images/small.png',
			},
			icon: './assets/WST-8800/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/WST-8800/switch_pair.svg',
					},
					generic_test_remote: {
						svg: './assets/WST-8800/switch.svg',
					},
				},
			},
		},
		'ACD-200': {
			extends: 'dimmer',
			name: 'devices.ACD-200.name',
			images: {
				large: './assets/ACD-200/images/large.png',
				small: './assets/ACD-200/images/small.png',
			},
			icon: './assets/ACD-200/socket.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/AYCT-102/remote.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/ACD-200/socket.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/ACD-200/socket.svg',
					},
				},
			},
		},
		// TODO needs new pair ui
		// 'PAR-1000': {
		//
		// }
		'AGDR-300': {
			extends: 'dimmer',
			name: 'devices.AGDR-300.name',
			images: {
				large: './assets/AGDR-300/images/large.jpg',
				small: './assets/AGDR-300/images/small.jpg',
			},
			icon: './assets/AGDR-300/icon.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/AYCT-102/remote.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/AGDR-300/icon.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/AGDR-300/pair.svg',
					},
				},
			},
		},
		'AFR-100': {
			extends: ['dimmer', 'generic_switch'],
			name: 'devices.AFR-100.name',
			capabilities: ['onoff', 'dim'],
			images: {
				large: './assets/AFR-100/images/large.jpg',
				small: './assets/AFR-100/images/small.jpg',
			},
			class: 'light',
			icon: './assets/AFR-100/icon.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/AYCT-102/remote.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/AFR-100/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
						body: 'devices.AFR-100.views.generic_imitate.body',
					},
					generic_program: {
						svg: './assets/AFR-100/pair.svg',
						body: 'devices.AFR-100.views.generic_program.body',
					},
					generic_test_switch: {
						title: 'devices.AFR-100.views.generic_test_switch.title',
						body: 'devices.AFR-100.views.generic_test_switch.body',
					},
					generic_test_switch_2: {
						body: 'devices.AFR-100.views.generic_test_switch_2.body',
					},
				},
			},
		},
		'ACDB-7000C': {
			extends: 'doorbell',
			name: 'devices.ACDB-7000C.name',
			images: {
				large: './assets/ACDB-7000C/images/large.png',
				small: './assets/ACDB-7000C/images/small.png',
			},
			icon: './assets/ACDB-7000C/icon.svg',
			debounceTimeout: 3000,
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'devices.ACDB-6600.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
								svg: './assets/ACDB-7000C/doorbell.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/ACDB-7000C/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/ACDB-7000C/doorbell.svg',
					},
					generic_program: {
						svg: './assets/ACDB-7000C/pair.svg',
					},
					generic_test_button: {
						svg: './assets/ACDB-7000C/bell.svg',
					},
					generic_test_button_2: {
						svg: './assets/ACDB-7000C/bell.svg',
					},
				},
			},
		},
		'ACDB-6600': {
			extends: 'doorbell',
			name: 'devices.ACDB-6600.name',
			images: {
				large: './assets/ACDB-6600/images/large.jpg',
				small: './assets/ACDB-6600/images/small.jpg',
			},
			icon: './assets/ACDB-6600/icon.svg',
			debounceTimeout: 3000,
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'devices.ACDB-6600.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
								svg: './assets/ACDB-6600/doorbell.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/ACDB-6600/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/ACDB-6600/doorbell.svg',
					},
					generic_program: {
						svg: './assets/ACDB-6600/pair.svg',
					},
					generic_test_button: {
						svg: './assets/ACDB-7000C/bell.svg',
					},
					generic_test_button_2: {
						svg: './assets/ACDB-7000C/bell.svg',
					},
				},
			},
		},
		'AC-300': {
			extends: ['socket', 'kaku_old'],
			name: 'devices.AC-300.name',
			images: {
				large: './assets/AC-300/images/large.png',
				small: './assets/AC-300/images/small.png',
			},
			icon: './assets/ACD-200/socket.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/YCT-102/icon.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/ACD-200/socket.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/YCT-102/pair.svg',
					},
					generic_program: {
						svg: './assets/ACD-200/socket.svg',
					},
				},
			},
		},
		'APA2-2300RS': {
			extends: 'socket',
			name: 'devices.APA2-2300RS.name',
			images: {
				large: './assets/APA2-2300RS/images/large.jpg',
				small: './assets/APA2-2300RS/images/small.jpg',
			},
			icon: './assets/ACD-200/socket.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/APA2-2300R/icon.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/ACD-200/socket.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/APA2-2300R/pair.svg',
					},
					generic_program: {
						svg: './assets/ACD-200/socket.svg',
					},
				},
			},
		},
		'AMST-606': {
			extends: 'sensor',
			name: 'devices.AMST-606.name',
			images: {
				large: './assets/AMST-606/images/large.png',
				small: './assets/AMST-606/images/small.png',
			},
			icon: './assets/AMST-606/icon.svg',
			capabilities: ['alarm_contact'],
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AMST-606/pair.svg',
						title: 'devices.AMST-606.views.generic_imitate.title',
						body: 'devices.AMST-606.views.generic_imitate.body',
						svgWidth: '50vw',
						svgHeight: '70vh',
					},
					generic_test_remote: {
						svg: './assets/AMST-606/test.svg',
						title: 'devices.AMST-606.views.generic_test_remote.title',
						body: 'devices.AMST-606.views.generic_test_remote.body',
						svgWidth: '50vw',
						svgHeight: '70vh',
					},
				},
			},
			conditions: [
				{
					id: 'state',
					title: 'devices.AMST-606.conditions.state.title',
				},
			],
		},
		'ALMST-2000': {
			extends: 'AMST-606',
			name: 'devices.ALMST-2000.name',
			images: {
				large: './assets/ALMST-2000/images/large.jpg',
				small: './assets/ALMST-2000/images/small.jpg',
			},
			icon: './assets/ALMST-2000/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/ALMST-2000/pair.svg',
					},
					generic_test_remote: {
						svg: './assets/ALMST-2000/test.svg',
					},
				},
			},
		},
		'ABST-604': {
			extends: 'sensor',
			name: 'devices.ABST-604.name',
			images: {
				large: './assets/ABST-604/images/large.png',
				small: './assets/ABST-604/images/small.png',
			},
			icon: './assets/ABST-604/icon.svg',
			capabilities: ['alarm_night'],
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/ABST-604/pair.svg',
						title: 'devices.ABST-604.views.generic_imitate.title',
					},
					generic_test_remote: {
						svg: './assets/ABST-604/test.svg',
						title: 'devices.ABST-604.views.generic_test_remote.title',
					},
				},
			},
			conditions: [
				{
					id: 'state',
					title: 'devices.ABST-604.conditions.state.title',
				},
			],
		},
		'AWST-6000': {
			extends: 'ABST-604',
			name: 'devices.AWST-6000.name',
			images: {
				large: './assets/AWST-6000/images/large.png',
				small: './assets/AWST-6000/images/small.png',
			},
			icon: './assets/AWST-6000/icon.svg',
			capabilities: ['alarm_motion'],
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AWST-6000/pair.svg',
						title: 'devices.AWST-6000.views.generic_imitate.title',
					},
					generic_test_remote: {
						svg: './assets/AWST-6000/test.svg',
						title: 'devices.AWST-6000.views.generic_test_remote.title',
					},
				},
			},
			conditions: [
				{
					id: 'state',
					title: 'devices.AWST-6000.conditions.state.title',
				},
			],
		},
		'APIR-2150': {
			extends: 'AWST-6000',
			name: 'devices.APIR-2150.name',
			images: {
				large: './assets/APIR-2150/images/large.png',
				small: './assets/APIR-2150/images/small.png',
			},
			icon: './assets/APIR-2150/icon.svg',
			capabilities: ['alarm_motion'],
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AWST-6000/pair.svg',
						title: 'devices.AWST-6000.views.generic_imitate.title',
					},
				},
			},
		},
		'ASUN-650': {
			extends: 'blinds',
			name: 'devices.ASUN-650.name',
			images: {
				large: './assets/ASUN-650/images/large.png',
				small: './assets/ASUN-650/images/small.png',
			},
			icon: './assets/ASUN-650/icon.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/AYCT-102/remote.svg',
							},
							{
								name: 'views.generic_choice.buttons.generate',
								view: 'generic_program',
								svg: './assets/ASUN-650/pairbutton.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/ASUN-650/pairbutton.svg',
					},
					generic_test_switch: {
						svg: './assets/ASUN-650/test.svg',
						svgHeight: '60vh',
					},
					generic_test_switch_2: {
						svg: './assets/ASUN-650/test.svg',
						svgHeight: '60vh',
					},
				},
			},
		},
	},
	// TODO remove these depricated old drivers
	drivers: [
		{
			id: 'switch',
			name: {
				en: '[Depricated] Socket',
				nl: '[Verouderd] Stopcontact',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff'],
		},
		{
			id: 'dimmer',
			name: {
				en: '[Depricated] Dimmer',
				nl: '[Verouderd] Dimmer',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff', 'dim'],
		},
		{
			id: 'blinds',
			name: {
				en: '[Depricated] Blinds',
				nl: '[Verouderd] Zonwering',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'windowcoverings',
			capabilities: ['windowcoverings_state'],
			settings: [
				{
					id: 'invert',
					type: 'checkbox',
					label: {
						en: 'Invert directions',
						nl: 'Keer de richtingen om',
					},
				},
			],
		},
		{
			id: 'remote',
			name: {
				en: '[Depricated] Remote',
				nl: '[Verouderd] Afstandbediening',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'wallSwitch',
			name: {
				en: '[Depricated] Wallswitch',
				nl: '[Verouderd] Muurschakelaar',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'doorbell',
			name: {
				en: '[Depricated] Doorbell',
				nl: '[Verouderd] Deurbel',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'nightSensor',
			name: {
				en: '[Depricated] Night sensor',
				nl: '[Verouderd] Nacht sensor',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'sensor',
			capabilities: ['alarm_night'],
		},
		{
			id: 'motionSensor',
			name: {
				en: '[Depricated] Motion sensor',
				nl: '[Verouderd] Bewegings sensor',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'sensor',
			capabilities: ['alarm_motion'],
		},
		{
			id: 'contactSensor',
			name: {
				en: '[Depricated] Contact sensor',
				nl: '[Verouderd] Contact sensor',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'sensor',
			capabilities: ['alarm_contact'],
		},
		{
			id: 'kakuOldSwitch',
			name: {
				en: '[Depricated] Old socket',
				nl: '[Verouderd] Oud stopcontact',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff'],
		},
		{
			id: 'kakuOldRemote',
			name: {
				en: '[Depricated] Old remote',
				nl: '[Verouderd] Oude afstandbediening',
			},
			images: {
				large: './assets/depricated/images/large.png',
				small: './assets/depricated/images/small.png',
			},
			class: 'remote',
			capabilities: ['onoff'],
		},
	],
	triggers: [
		{
			id: 'remote',
			title: {
				en: '[Depricated] The following button is being pressed:',
				nl: '[Verouderd] De volgende knop wordt ingedrukt:',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=remote',
					placeholder: { en: 'Which remote?', nl: 'Welke afstandbediening?' },
				},
				{
					name: 'channel',
					type: 'dropdown',
					values: [
						{ id: '00', label: { en: 'Channel: I', nl: 'Kanaal I' } },
						{ id: '01', label: { en: 'Channel: II', nl: 'Kanaal II' } },
						{ id: '10', label: { en: 'Channel: III', nl: 'Kanaal III' } },
						{ id: '11', label: { en: 'Channel: IV', nl: 'Kanaal IV' } },
					],
				},
				{
					name: 'unit',
					type: 'dropdown',
					values: [
						{ id: '00', label: { en: 'Button: 1', nl: 'Knop 1' } },
						{ id: '01', label: { en: 'Button: 2', nl: 'Knop 2' } },
						{ id: '10', label: { en: 'Button: 3', nl: 'Knop 3' } },
						{ id: '11', label: { en: 'Button: 4', nl: 'Knop 4' } },
						{ id: '22', label: { en: 'Button: G', nl: 'Knop G' } },
					],
				},
				{
					name: 'state',
					type: 'dropdown',
					values: [
						{ id: '1', label: { en: 'On', nl: 'Aan' } },
						{ id: '0', label: { en: 'Off', nl: 'Uit' } },
					],
				},
			],
		},
		{
			id: 'doorbell',
			title: {
				en: '[Depricated] The doorbell is pressed',
				nl: '[Verouderd] De deurbel wordt ingedrukt',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=doorbell',
					placeholder: { en: 'Which remote?', nl: 'Welke afstandbediening?' },
				},
			],
		},
		{
			id: 'wallSwitch',
			title: {
				en: '[Depricated] Wallswitch is switched on',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=wallSwitch',
					placeholder: { en: 'Which wallswitch?', nl: 'Welke wandschakelaar?' },
				},
				{
					name: 'unit',
					type: 'dropdown',
					values: [
						{ id: '01', label: { en: 'Single', nl: 'Enkel' } },
						{ id: '10', label: { en: 'Left', nl: 'Links' } },
						{ id: '11', label: { en: 'Right', nl: 'Rechts' } },
					],
				},
				{
					name: 'state',
					type: 'dropdown',
					values: [
						{ id: '1', label: { en: 'On', nl: 'Aan' } },
						{ id: '0', label: { en: 'Off', nl: 'Uit' } },
					],
				},
			],
		},
		{
			id: 'oldRemote',
			title: {
				en: '[Depricated] The following button is being pressed:',
				nl: '[Verouderd] De volgende knop wordt ingedrukt:',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=kakuOldRemote',
					placeholder: { en: 'Which remote?', nl: 'Welke afstandbediening?' },
				},
				{
					name: 'channel',
					type: 'dropdown',
					values: [
						{ id: '00', label: { en: 'Channel: I', nl: 'Kanaal I' } },
						{ id: '01', label: { en: 'Channel: II', nl: 'Kanaal II' } },
						{ id: '10', label: { en: 'Channel: III', nl: 'Kanaal III' } },
						{ id: '11', label: { en: 'Channel: IV', nl: 'Kanaal IV' } },
					],
				},
				{
					name: 'unit',
					type: 'dropdown',
					values: [
						{ id: '00', label: { en: 'Button: 1', nl: 'Knop 1' } },
						{ id: '01', label: { en: 'Button: 2', nl: 'Knop 2' } },
						{ id: '10', label: { en: 'Button: 3', nl: 'Knop 3' } },
						{ id: '11', label: { en: 'Button: 4', nl: 'Knop 4' } },
						{ id: '22', label: { en: 'Button: G', nl: 'Knop G' } },
					],
				},
				{
					name: 'state',
					type: 'dropdown',
					values: [
						{ id: '1', label: { en: 'On', nl: 'Aan' } },
						{ id: '0', label: { en: 'Off', nl: 'Uit' } },
					],
				},
			],
		},
	],
	conditions: [
		{
			id: 'motionSensorOn',
			title: {
				en: '[Depricated] !{{Motion|No motion}} detected',
				nl: '[Verouderd] !{{Beweging|Geen beweging}} gedetecteerd',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=motionSensor',
					placeholder: { en: 'Which sensor?', nl: 'Welke sensor?' },
				},
			],
		},
		{
			id: 'nightSensorOn',
			title: {
				en: '[Depricated] !{{Darkness|Light}} detected',
				nl: '[Verouderd] !{{Geen licht|Licht}} gedetecteerd',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=nightSensor',
					placeholder: { en: 'Which sensor?', nl: 'Welke sensor?' },
				},
			],
		},
		{
			id: 'contactSensorOn',
			title: {
				en: '[Depricated] Contact sensor !{{open|closed}}',
				nl: '[Verouderd] Contakt sensor !{{geopend|gesloten}}',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=contactSensor',
					placeholder: { en: 'Which sensor?', nl: 'Welke sensor?' },
				},
			],
		},
	],
	actions: [
		{
			id: 'windowcoveringUp',
			title: {
				en: '[Depricated] Open the blinds',
				nl: '[Verouderd] Open het zonnescherm',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=blinds',
					placeholder: { en: 'Which blinds?', nl: 'Welk zonnescherm?' },
				},
			],
		},
		{
			id: 'windowcoveringDown',
			title: {
				en: '[Depricated] Close the blinds',
				nl: '[Verouderd] Sluit het zonnescherm',
			},
			args: [
				{
					name: 'device',
					type: 'device',
					filter: 'driver_id=blinds',
					placeholder: { en: 'Which blinds?', nl: 'Welk zonnescherm?' },
				},
			],
		},
	],
};
