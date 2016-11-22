'use strict';

module.exports = {
	views: {},
	deviceClasses: {
		defaults: {
			debounceTimeout: 300,
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
				id: 'kakuold',
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
				id: 'kaku',
				sof: [225, 2774], // Start of frame
				eof: [236], // End of frame
				words: [
					[240, 308, 240, 1348],	// 0
					[240, 1338, 240, 320],	// 1
				],
				interval: 10150, // Time between two messages
				sensitivity: 0.9,
				repetitions: 20,
				minimalLength: 32,
				maximalLength: 32,
			},
		},
		dimmer: {
			extends: ['socket'],
			driver: './drivers/kaku/dimmer.js',
			capabilities: ['onoff', 'dim'],
			signal: {
				id: 'kakudim',
				sof: [225, 2774], // Start of frame
				eof: [236], // End of frame
				words: [
					[240, 308, 240, 1348],	// 0
					[240, 1338, 240, 320],	// 1
					[240, 308, 240, 308],  // 2 <-- used for dim
				],
				interval: 10150, // Time between two messages
				sensitivity: 0.9,
				repetitions: 20,
				minimalLength: 32,
				maximalLength: 36,
			},
			alternativeSignal: 'kaku',
		},
		socket: {
			extends: ['generic_socket', 'kaku'],
			capabilities: ['onoff'],
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
					generic_imitate: {
						body: 'deviceClasses.socket.views.generic_imitate.body',
					},
				},
			},
		},
		simple_socket: {
			extends: ['socket'],
			pair: {
				// Disabled since during testing simple sockets only worked with the address of the shipped remote
				// viewOrder: [
				// 	'generic_imitate',
				// 	'generic_test_switch_2',
				// 	'generic_choose_slave_2',
				// 	'generic_done',
				// ],
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
			extends: ['generic_wall_switch'],
			driver: './drivers/kaku/wall_switch',
			pair: {
				viewOptions: {
					generic_test_remote: {
						append: {
							scripts: `
$('<div>').append(
	$('<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">')
		.on('change', function(){ 
			var newSettings = { rotated: this.checked ? '180' : '0'};
			Homey.emit('set_settings', newSettings, function(){
				Homey.highlight(newSettings);
			});
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
			debounceTimeout: 1000,
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
		contact_sensor: {
			extends: 'sensor',
			driver: './drivers/kaku/contact_sensor.js',
			signal: {
				id: 'kakulong',
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
				maximalLength: 36,
			},
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
					generic_imitate: {
						body: 'deviceClasses.blinds.views.generic_imitate.body',
					},
					generic_test_switch: {
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch.body',
						append: {
							scripts: `
$('<div>').append(
	$('<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">')
		.on('change', function(){ 
			var newSettings = { rotated: this.checked ? '180' : '0'};
			Homey.emit('set_settings', newSettings, function(){
				Homey.highlight(newSettings);
			});
		}),
	$('<label for="invert-checkbox" style="padding: 0 1em;">')
		.html(__('deviceClasses.blinds.settings.rotated.label'))
).insertAfter('[data-id="generic_test_switch"] .centered-container > #image-container')`,
						},
					},
					generic_test_switch_2: {
						title: 'deviceClasses.blinds.views.generic_test_switch.title',
						body: 'deviceClasses.blinds.views.generic_test_switch_2.body',
						append: {
							scripts: `
$('<div>').append(
	$('<input id="invert-checkbox" type="checkbox" style="position: relative; bottom: 1px; vertical-align: middle;">')
		.on('change', function(){ 
			var newSettings = { rotated: this.checked ? '180' : '0'};
			Homey.emit('set_settings', newSettings, function(){
				Homey.highlight(newSettings);
			});
		}),
	$('<label for="invert-checkbox" style="padding: 0 1em;">')
		.html(__('deviceClasses.blinds.settings.rotated.label'))
).insertAfter('[data-id="generic_test_switch_2"] .centered-container > #image-container')`,
						},
					},
				},
			},
			settings: [
				{
					type: 'group',
					label: 'deviceClasses.wall_switch.settings.groups.general',
					children: [
						{
							id: 'rotated',
							type: 'radio',
							value: '0',
							label: 'deviceClasses.blinds.settings.rotated.label',
							values: [
								{
									id: '0',
									label: 'deviceClasses.blinds.settings.rotated.0',
								},
								{
									id: '180',
									label: 'deviceClasses.blinds.settings.rotated.180',
								},
							],
						},
					],
				},
			],
		},
		old_blinds: {
			extends: ['generic_codewheel_switch', 'blinds', 'kaku_old'],
			driver: './drivers/kakuold/blinds.js',
			pair: {
				viewOrder: [
					'generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_codewheel',
					'generic_test_switch',
					'generic_done',
				],
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
							},
							{
								name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
								view: 'generic_codewheel',
							},
						],
					},
					generic_imitate: {
						body: 'deviceClasses.old_blinds.views.generic_imitate.body',
					},
					generic_codewheel: {
						codewheelList: [
							{
								series: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
								mapOddToDot: true,
							},
							{
								series: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
								mapOddToDot: true,
							},
						],
					},
				},
			},
		},
		old_socket: {
			extends: ['generic_codewheel_socket', 'kaku_old'],
			capabilities: ['onoff'],
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{ name: 'views.generic_choice.buttons.copy', view: 'generic_imitate' },
							{
								name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
								view: 'generic_codewheel',
							},
						],
					},
					generic_codewheel: {
						codewheelList: [
							{
								series: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
								mapOddToDot: true,
							},
							{
								series: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
								mapOddToDot: true,
							},
						],
					},
				},
			},
		},
		simple_codewheel: {
			driver: './drivers/kakuold/codewheel.js',
			pair: {
				viewOptions: {
					generic_codewheel: {
						codewheelList: [
							{
								series: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
								mapOddToDot: false,
								quadrants: ['A', 'B', 'C', 'D'],
							},
						],
					},
				},
			},
		},
		build_in: {
			pair: {
				viewOptions: {
					generic_imitate: {
						body: 'deviceClasses.build_in.views.generic_imitate.body',
					},
					generic_program: {
						title: 'deviceClasses.build_in.views.generic_program.title',
						body: 'deviceClasses.build_in.views.generic_program.body',
					},
					generic_test_switch: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch.body',
					},
					generic_test_switch_2: {
						title: 'deviceClasses.build_in.views.generic_test_switch.title',
						body: 'deviceClasses.build_in.views.generic_test_switch_2.body',
					},
				},
			},
		},
		motion_sensor: {
			driver: './drivers/kaku/motion_sensor.js',
			capabilities: ['alarm_motion'],
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AWST-6000/pair.svg',
						title: 'deviceClasses.motion_sensor.views.generic_imitate.title',
					},
					generic_test_remote: {
						svg: './assets/AWST-6000/test.svg',
						title: 'deviceClasses.motion_sensor.views.generic_test_remote.title',
					},
				},
			},
			conditions: [
				{
					id: 'state',
					title: 'deviceClasses.motion_sensor.conditions.state.title',
				},
			],
			settings: [
				{
					type: 'group',
					label: 'deviceClasses.motion_sensor.settings.groups.advanced',
					children: [
						{
							id: 'timeout',
							type: 'dropdown',
							value: '0',
							label: 'deviceClasses.motion_sensor.settings.timeout.label',
							values: [
								{
									id: '0',
									label: 'deviceClasses.motion_sensor.settings.timeout.0',
								},
								{
									id: '1',
									label: 'deviceClasses.motion_sensor.settings.timeout.1',
								},
								{
									id: '2',
									label: 'deviceClasses.motion_sensor.settings.timeout.2',
								},
								{
									id: '5',
									label: 'deviceClasses.motion_sensor.settings.timeout.5',
								},
								{
									id: '10',
									label: 'deviceClasses.motion_sensor.settings.timeout.10',
								},
								{
									id: '15',
									label: 'deviceClasses.motion_sensor.settings.timeout.15',
								},
								{
									id: '30',
									label: 'deviceClasses.motion_sensor.settings.timeout.30',
								},
							],
						},
					],
				},
			],
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
		'AWMT-003': {
			extends: 'AWST-8802',
			name: 'devices.AWMT-003.name',
			images: {
				large: './assets/AWMT-003/images/large.jpg',
				small: './assets/AWMT-003/images/small.jpg',
			},
			icon: './assets/AWMT-003/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/AWMT-003/switch_pair.svg',
					},
					generic_test_remote: {
						svg: './assets/AWMT-003/switch.svg',
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
								{ id: '00', label: '433_generator.generic.buttons.left' },
								{ id: '01', label: '433_generator.generic.buttons.right' },
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
		'AWMT-230': {
			extends: 'AWMT-003',
			name: 'devices.AWMT-230.name',
			icon: './assets/AWMT-230/icon.svg',
			images: {
				large: './assets/AWMT-230/images/large.jpg',
				small: './assets/AWMT-230/images/small.jpg',
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
		'AWST-6000': {
			extends: ['ABST-604', 'motion_sensor'],
			name: 'devices.AWST-6000.name',
			images: {
				large: './assets/AWST-6000/images/large.png',
				small: './assets/AWST-6000/images/small.png',
			},
			icon: './assets/AWST-6000/icon.svg',
		},
		'APIR-2150': {
			extends: 'AWST-6000',
			name: 'devices.APIR-2150.name',
			images: {
				large: './assets/APIR-2150/images/large.png',
				small: './assets/APIR-2150/images/small.png',
			},
			icon: './assets/APIR-2150/icon.svg',
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
		'AMST-606': {
			extends: 'contact_sensor',
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
		// TODO new icon
		// TODO implement dim functionality
		// This device is mistakingly using the old kaku signal and is therefore reused to be an YC-400
		'PAR-1000': {
			extends: ['old_socket', 'simple_codewheel'],
			name: 'devices.PAR-1000.name',
			images: {
				large: './assets/PAR-1000/images/large.jpg',
				small: './assets/PAR-1000/images/small.jpg',
			},
			icon: './assets/PAR-1000/icon.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'views.generic_choice.buttons.copy',
								view: 'generic_imitate',
								svg: './assets/PA3-1000R/icon.svg',
							},
							{
								name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
								view: 'generic_codewheel',
								svg: './assets/PAR-1000/icon.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/PA3-1000R/pair.svg',
					},
				},
			},
		},
		'AC-300': {
			extends: 'old_socket',
			name: 'devices.YC-400.name',
			images: {
				large: './assets/YC-400/images/large.jpg',
				small: './assets/YC-400/images/small.jpg',
			},
			icon: './assets/YC-400/icon.svg',
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
								name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
								view: 'generic_codewheel',
								svg: './assets/YC-400/icon.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/YCT-102/pair.svg',
					},
				},
			},
		},
		'YC-412': {
			extends: 'AC-300',
			name: 'devices.YC-412.name',
		},
		'YC-1000': {
			extends: 'YC-412',
			name: 'devices.YC-1000.name',
		},
		'YC-3500': {
			extends: 'YC-412',
			name: 'devices.YC-3500.name',
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
		'ACD-300': {
			extends: 'ACD-200',
			name: 'devices.ACD-300.name',
		},
		'ACD-1000': {
			extends: ['ACD-200', 'socket'],
			name: 'devices.ACD-1000.name',
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
				},
			},
		},
		'ACD-3500': {
			extends: 'ACD-1000',
			name: 'devices.ACD-3500.name',
		},
		'AWS-3500': {
			extends: ['socket', 'build_in'],
			name: 'devices.AWS-3500.name',
			icon: './assets/AWS-3500/icon.svg',
			images: {
				large: './assets/AWS-3500/images/large.png',
				small: './assets/AWS-3500/images/small.png',
			},
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
								svg: './assets/AWS-3500/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/AWS-3500/pair.svg',
					},
				},
			},
		},
		'AWMR-230': {
			extends: ['socket', 'build_in'],
			name: 'devices.AWMR-230.name',
			icon: './assets/AWMR-210/icon.svg',
			images: {
				large: './assets/AWMR-210/images/large.png',
				small: './assets/AWMR-210/images/small.png',
			},
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
								svg: './assets/AWMR-210/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/AWMR-210/pair.svg',
					},
				},
			},
		},
		'AWMR-210': {
			extends: ['dimmer', 'build_in'],
			name: 'devices.AWMR-210.name',
			icon: './assets/AWMR-210/icon.svg',
			images: {
				large: './assets/AWMR-210/images/large.png',
				small: './assets/AWMR-210/images/small.png',
			},
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
								svg: './assets/AWMR-210/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/AWMR-210/pair.svg',
					},
				},
			},
		},
		'AWMD-250': {
			extends: 'AWMR-210',
			name: 'devices.AWMD-250.name',
		},
		'ACM-250': {
			extends: ['dimmer', 'build_in'],
			name: 'devices.ACM-250.name',
			icon: './assets/ACM-250/icon.svg',
			images: {
				large: './assets/ACM-250/images/large.png',
				small: './assets/ACM-250/images/small.png',
			},
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
								svg: './assets/ACM-250/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/ACM-250/pair.svg',
					},
				},
			},
		},
		'ACM-300': {
			extends: 'ACM-250',
			name: 'devices.ACM-300.name',
			icon: './assets/ACM-300/icon.svg',
			images: {
				large: './assets/ACM-300/images/large.png',
				small: './assets/ACM-300/images/small.png',
			},
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
								svg: './assets/ACM-300/pair.svg',
							},
						],
					},
					generic_program: {
						svg: './assets/ACM-300/pair.svg',
					},
				},
			},
		},
		'ACM-1000': {
			extends: ['socket', 'build_in'],
			name: 'devices.ACM-1000.name',
			icon: './assets/ACM-300/icon.svg',
			images: {
				large: './assets/ACM-300/images/large.png',
				small: './assets/ACM-300/images/small.png',
			},
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
								svg: './assets/ACM-300/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/ACM-300/pair.svg',
					},
				},
			},
		},
		'AILD-250': {
			extends: ['dimmer', 'build_in'],
			name: 'devices.AILD-250.name',
			icon: './assets/AILD-250/icon.svg',
			images: {
				large: './assets/AILD-250/images/large.png',
				small: './assets/AILD-250/images/small.png',
			},
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
								svg: './assets/AILD-250/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/AILD-250/pair.svg',
					},
				},
			},
		},
		'AILS-3500': {
			extends: ['socket', 'build_in'],
			name: 'devices.AILD-3500.name',
			icon: './assets/AILD-250/icon.svg',
			images: {
				large: './assets/AILD-250/images/large.png',
				small: './assets/AILD-250/images/small.png',
			},
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
								svg: './assets/AILD-250/pair.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
					},
					generic_program: {
						svg: './assets/AILD-250/pair.svg',
					},
				},
			},
		},
		// TODO ACM-100
		// TODO AWMR-300
		// This is the AC-300 implementation using the new kaku signal
		'AC-300N': {
			extends: 'ACD-200',
			name: 'devices.AC-300.name',
			images: {
				large: './assets/AC-300/images/large.png',
				small: './assets/AC-300/images/small.png',
			},
			icon: './assets/AC-300/icon.svg',
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
								svg: './assets/AC-300/icon.svg',
							},
						],
					},
					generic_program: {
						svg: './assets/AC-300/pair.svg',
					},
				},
			},
		},
		'AC-1000': {
			extends: ['AC-300N', 'socket'],
			name: 'devices.AC-1000.name',
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
								svg: './assets/AC-300/icon.svg',
							},
						],
					},
				},
			},
		},
		'AC-3500': {
			extends: 'AC-1000',
			name: 'devices.AC-3500.name',
		},
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
		'AGDR-3500': {
			extends: ['AGDR-300', 'socket'],
			name: 'devices.AGDR-3500.name',
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
				},
			},
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
		'APA2-2300RS': {
			extends: ['simple_socket'],
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
		'AFR-060': {
			extends: 'AFR-100',
			name: 'devices.AFR-060.name',
			capabilities: ['onoff'],
			driver: './drivers/kaku/kaku.js',
		},
		'ALED-2709': {
			extends: 'AFR-100',
			name: 'devices.ALED-2709.name',
			images: {
				large: './assets/ALED-2709/images/large.jpg',
				small: './assets/ALED-2709/images/small.jpg',
			},
			icon: './assets/ALED-2709/icon.svg',
			driver: './drivers/kaku/new_dimmer.js',
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
								svg: './assets/ALED-2709/icon.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/AYCT-102/remote_pair.svg',
						body: 'devices.ALED-2709.views.generic_imitate.body',
					},
					generic_program: {
						svg: './assets/ALED-2709/icon.svg',
						body: 'devices.ALED-2709.views.generic_program.body',
					},
					generic_test_switch: {
						title: 'devices.ALED-2709.views.generic_test_switch.title',
						body: 'devices.ALED-2709.views.generic_test_switch.body',
					},
					generic_test_switch_2: {
						body: 'devices.ALED-2709.views.generic_test_switch_2.body',
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
					},
					generic_test_switch_2: {
						svg: './assets/ASUN-650/test.svg',
					},
				},
			},
		},
		// Should have been SUN-500 but has already been deployed with wrong ID so SUN-500 === SUN-650
		'SUN-650': {
			extends: 'old_blinds',
			name: 'devices.SUN-500.name',
			images: {
				large: './assets/SUN-500/images/large.jpg',
				small: './assets/SUN-500/images/small.jpg',
			},
			icon: './assets/SUN-500/icon.svg',
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
								name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
								view: 'generic_codewheel',
								svg: './assets/SUN-500/icon.svg',
							},
						],
					},
					generic_imitate: {
						svg: './assets/YCT-102/pair.svg',
					},
					generic_test_switch: {
						svg: './assets/ASUN-650/test.svg',
					},
					generic_test_switch_2: {
						svg: './assets/ASUN-650/test.svg',
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
		'KCT-101': {
			extends: ['tiny_remote', 'kaku_old'],
			name: 'devices.KCT-101.name',
			images: {
				large: './assets/KCT-101/images/large.jpg',
				small: './assets/KCT-101/images/small.jpg',
			},
			icon: './assets/KCT-101/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './assets/KCT-101/pair.svg',
					},
					generic_test_remote: {
						svg: './assets/KCT-101/test.svg',
					},
				},
			},
		},
		// TODO needs new pair ui
		// 'PAR-1000': {
		//
		// }
	},
	// TODO remove these deprecated old drivers
	drivers: [
		{
			id: 'switch',
			name: {
				en: '[Deprecated] Socket',
				nl: '[Verouderd] Stopcontact',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'dimmer',
			name: {
				en: '[Deprecated] Dimmer',
				nl: '[Verouderd] Dimmer',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'blinds',
			name: {
				en: '[Deprecated] Blinds',
				nl: '[Verouderd] Zonwering',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'remote',
			name: {
				en: '[Deprecated] Remote',
				nl: '[Verouderd] Afstandbediening',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'wallSwitch',
			name: {
				en: '[Deprecated] Wallswitch',
				nl: '[Verouderd] Muurschakelaar',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'doorbell',
			name: {
				en: '[Deprecated] Doorbell',
				nl: '[Verouderd] Deurbel',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'nightSensor',
			name: {
				en: '[Deprecated] Night sensor',
				nl: '[Verouderd] Nacht sensor',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'motionSensor',
			name: {
				en: '[Deprecated] Motion sensor',
				nl: '[Verouderd] Bewegings sensor',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'contactSensor',
			name: {
				en: '[Deprecated] Contact sensor',
				nl: '[Verouderd] Contact sensor',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'kakuOldSwitch',
			name: {
				en: '[Deprecated] Old socket',
				nl: '[Verouderd] Oud stopcontact',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
		{
			id: 'kakuOldRemote',
			name: {
				en: '[Deprecated] Old remote',
				nl: '[Verouderd] Oude afstandbediening',
			},
			images: {
				large: './assets/deprecated/images/large.png',
				small: './assets/deprecated/images/small.png',
			},
			class: 'other',
			capabilities: [],
		},
	],
};
