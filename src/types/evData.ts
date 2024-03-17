import {
	AcuraModelsItem,
	AfeelaModlesItem,
	AudiModelsItem,
	BMWModelsItem,
	BuickModelsItem,
	BytonModelsItem,
	CadillacModelsItem,
	ChevroletModelsItem,
	ChryslerModelsItem,
	DodgeModelsItem,
	FiatModelsItem,
	FiskerModelsItem,
	FordModelsItem,
	GenesisModelsItem,
	GMCModelsItem,
	HondaModelsItem,
	HyundaiModelsItem,
	JaguaModelsItem,
	JeepModelsItem,
	KiaModelsItem,
	LamborghiniModelsItem,
	LandRoverModelsItem,
	LexusModelsItem,
	LincolnModelsItem,
	LordstownModelsItem,
	LotusModelsItem,
	LucidModelsItem,
	MaseratiModelsItem,
	MazdaModelsItem,
	MercedesAMGModelsItem,
	MercedesBenzModelsItem,
	MercedesMaybachModelsItem,
	MiniModelsItem,
	MitsubishiModelsItem,
	NissanModelsItem,
	PolestarModelsItem,
	PorscheModelsItem,
	RamModelsItem,
	RivianModelsItem,
	RollsRoyceModelsItem,
	ScoutModelsItem,
	SmartModelsItem,
	SubaruModelsItem,
	TeslaModelsItem,
	ToyotaModelsItem,
	VinFastModelsItem,
	VolkswagenModelsItem,
	VolvoModelsItem
} from "./evDataTypes";

export const teslaModels: TeslaModelsItem[] = [
	{
		model: "Model S",
		yearTrims: [
			{
				year: "2012",
				trims: ["Base", "Signature", "Signature Performance", "Performance"]
			},
			{
				year: "2013",
				trims: ["Base", "Performance"]
			},
			{
				year: "2014",
				trims: ["Base", "Performance", "P85+", "P85D", "60", "85"]
			},
			{
				year: "2015",
				trims: ["P85D", "P90D", "60", "70", "70D", "85", "85D", "90D"]
			},
			{
				year: "2016",
				trims: [
					"P85D",
					"P90D",
					"P100D",
					"60",
					"60D",
					"70",
					"70D",
					"75",
					"75D",
					"85D",
					"90D"
				]
			},
			{
				year: "2017",
				trims: ["P100D", "60", "60D", "75", "75D", "90D", "100D"]
			},
			{
				year: "2018",
				trims: ["P100D", "75D", "100D"]
			},
			{
				year: "2019",
				trims: [
					"Base",
					"Performance",
					"P100D",
					"Standard Range",
					"75D",
					"Long Range",
					"100D"
				]
			},
			{
				year: "2020",
				trims: ["Long Range Plus", "Long Range", "Performance"]
			},
			{
				year: "2021",
				trims: [
					"Plaid",
					"Plaid+",
					"Long Range",
					"Long Range Plus",
					"Performance"
				]
			},
			{
				year: "2022",
				trims: ["Long Range", "Plaid", 'Model S', 'Model S Plaid']
			},
			{
				year: "2023",
				trims: ["AWD", "Standard Range", "Plaid", 'Long Range']
			},
			{
				year: "2024",
				trims: ["AWD", "Plaid AWD", 'Plaid', 'Model S', "Long Range"]
			}
		]
	},
	{
		model: "Model X",
		yearTrims: [
			{
				year: "2016",
				trims: ["P90D", "P100D", "60D", "70D", "75D", "90D"]
			},
			{
				year: "2017",
				trims: ["P100D", "100D", "75D", "90D"]
			},
			{
				year: "2018",
				trims: ["P100D", "100D", "75D"]
			},
			{
				year: "2019",
				trims: [
					"P100D",
					"100D",
					"70D",
					"Performance",
					"Standard Range",
					"Base",
					"Long Range"
				]
			},
			{
				year: "2020",
				trims: ["Performance", "Long Range", "Long Range Plus"]
			},
			{
				year: "2021",
				trims: ["Performance", "Long Range", "Long Range Plus", "Plaid"]
			},
			
			{
				year: "2022",
				trims: ["Long Range", "Plaid", "Model X", "Model X Plaid"]
			},
			{
				year: "2023",
				trims: ["Standard Range", "Plaid", "AWD", 'Model X Plaid', 'Long Range']
			},
			{
				year: "2024",
				trims: ["Plaid", "AWD", 'Model X', 'Long Range']
			}
		]
	},
	{
		model: "Model 3",
		yearTrims: [
			{year: "2017", trims: ["75", "Standard", "Long Range"]},
			{
				year: "2018",
				trims: ["Standard", "Mid Range", "Long Range", "Performance"]
			},
			{
				year: "2019",
				trims: [
					"Standard Range",
					"Standard Range Plus",
					"Mid Range",
					"Long Range",
					"Performance"
				]
			},
			{
				year: "2020",
				trims: [
					"Standard Range",
					"Standard Range Plus",
					"Long Range",
					"Performance"
				]
			},
			{
				year: "2021",
				trims: ["Standard Range Plus", "Long Range", "Performance"]
			},
			{year: "2022", trims: ["Base", "RWD", "Long Range", "Performance"]},
			{year: "2023", trims: ["RWD", "Long Range AWD", "Performance AWD", 'Standard Range RWD', 'Long Range']},
			{year: "2024", trims: ["Standard Range RWD", 'RWD', "Long Range AWD", 'Performance']}
		]
	},
	{
		model: "Model Y",
		yearTrims: [
			{
				year: "2020",
				trims: ["Long Range", "Performance"]
			},
			{
				year: "2021",
				trims: ["Long Range", "Performance", "Standard Range"]
			},
			{
				year: "2022",
				trims: ["Long Range", "Performance"]
			},
			{
				year: "2023",
				trims: ["Long Range AWD", "Performance AWD", "AWD", "RWD", 'Standard Range', "Long Range", "Performance"]
			},
			{
				year: "2024",
				trims: ["Long Range AWD", "Performance AWD", "RWD", 'Standard Range RWD']
			}
		]
	},
	{
		model: 'Roadster',
		yearTrims: [
			{
				year: "2026",
				trims: ["Base", "Founder's Edition"]
			}
		]
	},
	{
		model: 'Cybertruck',
		yearTrims: [
			{
				year: "2024",
				trims: ["Beast", "Dual Motor"]
			}
		]
	}
];

export const rivianModels: RivianModelsItem[] = [
	{
		model: "R1S",
		yearTrims: [
			{
				year: "2022",
				trims: ["Explore Package", "Adventure Package", "Launch Edition"]
			},
			{
				year: "2023",
				trims: [
					"Adventure Dual-Motor Standard Pack",
					"Adventure Dual-Motor Large Pack",
					"Adventure Performance Dual-Motor Large Pack",
					"Launch Edition Quad-Motor Large Pack",
					"Adventure Quad-Motor Large Pack",
					"Adventure Dual-Motor Max Pack",
					"Adventure Performance Dual-Motor Max Pack"
				]
			},
			{
				year: "2024",
				trims: [
					"Adventure Dual-Motor Standard Pack",
					"Adventure Dual-Motor Standard+ Pack",
					"Adventure Performance Dual-Motor Standard+ Pack",
					"Adventure Dual-Motor Large Pack",
					"Adventure Performance Dual-Motor Large Pack",
					"Adventure Quad-Motor Large Pack",
					"Launch Edition Quad-Motor Large Pack",
					"Adventure Dual-Motor Max Pack",
					"Adventure Performance Dual-Motor Max Pack"
				]
			}
		]
	},
	{
		model: "R1T",
		yearTrims: [
			{
				year: "2022",
				trims: ["Explore Package", "Adventure Package", "Launch Edition"]
			},
			{
				year: "2023",
				trims: [
					"Adventure Dual-Motor Standard Pack",
					"Adventure Dual-Motor Large Pack",
					"Adventure Performance Dual-Motor Large Pack",
					"Launch Edition Quad-Motor Large Pack",
					"Adventure Quad-Motor Large Pack",
					"Adventure Dual-Motor Max Pack",
					"Adventure Performance Dual-Motor Max Pack"
				]
			},
			{
				year: "2024",
				trims: [
					"Adventure Dual-Motor Standard Pack",
					"Adventure Dual-Motor Standard+ Pack",
					"Adventure Performance Dual-Motor Standard+ Pack",
					"Adventure Dual-Motor Large Pack",
					"Adventure Performance Dual-Motor Large Pack",
					"Adventure Quad-Motor Large Pack",
					"Launch Edition Quad-Motor Large Pack",
					"Adventure Dual-Motor Max Pack",
					"Adventure Performance Dual-Motor Max Pack"
				]
			}
		]
	},
	{
		model: 'R2',
		yearTrims: [
			{
				year: "2026",
				trims: ["Adventure", "Adventure All-Terrain", "Launch Edition"]
			}
		]
	},
	{
		model: 'R3',
		yearTrims: [
			{
				year: "2027",
				trims: ["R3", "R3X"]
			}
		]
	},
	{
		model: 'Commercial Van',
		yearTrims: [
			{
				year: "2024",
				trims: ["Delivery 500", 'Delivery 700']
			}
		]
	}
];

export const fordModels: FordModelsItem[] = [
	{
		model: "E-Transit",
		yearTrims: [
			{
				year: "2022",
				trims: ["Cutaway", "Chassis Cab", "Cargo Van"]
			},
			{
				year: "2023",
				trims: ["Cutaway", "Chassis Cab", "Cargo Van"]
			},
			{
				year: "2024",
				trims: ["Cutaway", "Chassis Cab", "Cargo Van"]
			}
		]
	},
	{
		model: "F-150 Lightning",
		yearTrims: [
			{
				year: "2022",
				trims: ["Pro", "XLT", "Lariat", 'XLT Extended Range', 'Platinum Extended Range']
			},
			{
				year: "2023",
				trims: ['Pro', 'XLT', 'Lariat', 'XLT Extended Range', 'Platinum Extended Range']
			},
			{
				year: "2024",
				trims: ['Pro', 'XLT', 'Flash Extended Range', 'Lariat Extended Range', 'Platinum Extended Range', 'Platinum Black Extended Range']
			}
		]
	},
	{
		model: "Mustang Mach-E",
		yearTrims: [
			{
				year: "2021",
				trims: ["Select", "Premium", "California Route 1", 'GT', 'GT Performance Edition']
			},
			{
				year: "2022",
				trims: ['Select', 'Premium', 'California Route 1', 'GT', 'GT Performance Edition']
			},
			{
				year: "2023",
				trims: ['Select', 'Premium', 'California Route 1', 'GT', 'GT Performance Edition']
			},
			{
				year: "2024",
				trims: ['Select', 'Premium', 'GT', 'GT Performance Edition', 'GT Bronze', 'Rally']
			}
		]
	}
];

export const hyundaiModels: HyundaiModelsItem[] = [
	{
		model: 'Ioniq 5',
		yearTrims: [
			{
				year: '2022',
				trims: [
					'SE Standard Range',
					'SE Long Range',
					'SEL Long Range',
					'SEL Long Range AWD',
					"Limited Long Range",
					"Limited Long Range AWD"]
			},
			{
				year: '2023',
				trims: ['SE', 'SEL', 'Limited']
			}, {
				year: '2024',
				trims: ['SE', 'SEL', 'Limited']
			}, {
				year: '2025',
				trims: ['SE', 'SEL', 'N Line', 'Limited']
				
			}]
	},
	{
		model: 'Ioniq 5 N',
		yearTrims: [
			{
				year: '2025',
				trims: ['Ioniq 5 N']
			}
		]
	},
	{
		model: 'Ioniq 6',
		yearTrims: [
			{
				year: '2023',
				trims: ['SE Standard Range', "SE Long Range", "SEL", "Limited"]
			},
			{
				year: '2024',
				trims: ['SE Standard Range', "SE Long Range", "SEL", "Limited"]
			}
		]
	},
	{
		model: 'Ioniq 7',
		yearTrims: [
			{
				year: '2025',
				trims: ['SE', "SEL", "Limited"]
			}
		]
	},
	{
		model: 'Kona',
		yearTrims: [
			{
				year: '2019',
				trims: ["Kona"]
			},
			{
				year: '2020',
				trims: ["SEL", "Limited", "Ultimate"]
			},
			{
				year: '2021',
				trims: ["SEL", "Limited", "Ultimate"]
			},
			{
				year: '2022',
				trims: ["SEL", "Limited"]
			}, {
				year: '2023',
				trims: ["SE", "SEL", "Limited"]
			}, {
				year: '2024',
				trims: ["SE", "SEL", "Limited"]
			}
		
		]
	}, {
		model: 'Nexo',
		yearTrims: [
			{
				year: '2019',
				trims: ["Nexo"]
			},
			{
				year: '2020',
				trims: ["Blue", "Limited"]
			},
			{
				year: '2021',
				trims: ["Blue", "Limited"]
			},
			{
				year: '2022',
				trims: ["Blue", "Limited"]
			},
			{
				year: '2023',
				trims: ["Blue", "Limited"]
			},
			{
				year: '2024',
				trims: ["Blue", "Limited"]
			}
		]
	},
	{
		model: 'Ioniq Electric',
		yearTrims: [
			{
				year: '2020',
				trims: ["SE", "Limited"]
			},
			{
				year: '2021',
				trims: ["SE", "Limited"]
			}
		]
	}
]

export const volvoModels: VolvoModelsItem[] = [
	{
		model: 'EC40',
		yearTrims: [
			{
				year: '2022',
				trims: ['Ultimate']
			},
			{
				year: '2023',
				trims: ['Core', 'Plus', 'Ultimate']
			},
			{
				year: '2024',
				trims: [
					'Single Motor Core',
					'Twin Motor Core',
					'Single Motor Plus',
					'Twin Motor Plus',
					'Single Motor Ultimate',
					'Twin Motor Ultimate'
				]
			},
			{
				year: '2025',
				trims: [
					'Single Motor Core',
					'Twin Motor Core',
					'Single Motor Plus',
					'Twin Motor Plus',
					'Single Motor Ultimate',
					'Twin Motor Ultimate'
				]
			}
		]
	},
	{
		model: 'ES90',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Single Motor',
					'Single Motor Performance',
					"Twin Motor",
					"Twin Motor Ultimate"
				]
			}
		]
	},
	{
		model: 'EX30',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Core Single Motor',
					'Plus Single Motor',
					"Ultra Single Motor",
					"Plus Twin Motor",
					'Ultra Twin Motor'
				]
			}
		]
	},
	{
		model: 'EX40',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Single Motor Core',
					'Twin Motor Core',
					"Single Motor Plus",
					"Twin Motor Plus",
					'Single Motor Ultimate'
				]
			}
		
		]
	},
	{
		model: 'XC40',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Single Motor Core',
					'Twin Motor Core',
					"Single Motor Plus",
					"Twin Motor Plus",
					'Single Motor Ultimate',
					'Twin Motor Ultimate'
				]
			},
			{
				year: '2023',
				trims: [
					'Twin',
					'Twin Plus',
					"Twin Ultimate"
				]
			},
			{
				year: '2022',
				trims: [
					'Twin',
					'Twin Plus',
					"Twin Ultimate"
				]
			}
		]
	},
	{
		model: 'XC40 Recharge',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Single Motor Core',
					'Twin Motor Core',
					"Single Motor Plus",
					"Twin Motor Plus",
					'Single Motor Ultimate'
				]
			},
			{
				year: '2024',
				trims: [
					'Single Motor Core',
					'Twin Motor Core',
					"Single Motor Plus",
					"Twin Motor Plus",
					'Single Motor Ultimate',
					'Twin Motor Ultimate'
				]
			},
			{
				year: '2023',
				trims: [
					'Twin',
					'Twin Plus',
					"Twin Ultimate"
				]
			},
			{
				year: '2022',
				trims: [
					'Twin',
					'Twin Plus',
					"Twin Ultimate"
				]
			},
			{
				year: '2021',
				trims: [
					'XC40 Recharge'
				]
			}
		]
	},
	{
		model: 'EX90',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Twin Motor Plus',
					'Twin Motor Ultra',
					"Twin Motor Performance Plus"
				]
			}
		]
	}
]

export const volkswagenModels: VolkswagenModelsItem[] = [
	{
		model: 'ID.4',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Standard',
					'Standard S',
					'Pro',
					'Pro S',
					'Pro S Plus'
				]
			},
			{
				year: '2023',
				trims: [
					'Standard',
					'Standard S',
					'Pro',
					'Pro S',
					'Pro S Plus'
				]
			},
			{
				year: '2022',
				trims: [
					'Pro',
					'Pro S'
				]
			},
			{
				year: '2021',
				trims: [
					'Pro',
					'Pro S',
					'1st Edition'
				]
			}
		]
	},
	{
		model: 'ID.7',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Base',
					'Pro',
					'Pro S',
					'Pro S Plus'
				]
			}
		]
	},
	{
		model: 'ID.8',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Base',
					'Pro',
					'Pro S'
				]
			}
		]
	},
	{
		model: 'ID.Buzz Microbus',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'ID.Buzz'
				]
			}
		]
	},
	{
		model: 'e-Golf',
		yearTrims: [
			{
				year: '2017',
				trims: [
					'SE',
					'SEL',
					'Limited Edition'
				]
			},
			{
				year: '2018',
				trims: [
					'SE',
					'SEL',
					'SEL Premium'
				]
			},
			{
				year: '2019',
				trims: [
					'SE',
					'SEL Premium'
				]
			}
		]
	}
]

export const vinFastModels: VinFastModelsItem[] = [
	{
		model: 'VF3',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'VF3'
				]
			}
		]
		
	},
	{
		model: 'VF6',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Eco',
					'Plus'
				]
			}
		]
	},
	{
		model: 'VF7',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Eco',
					'Plus'
				]
			}
		]
	},
	{
		model: 'VF8',
		yearTrims: [
			{
				year: '2023',
				trims: [
					'City Edition Eco',
					'City Edition Plus'
				]
			},
			{
				year: '2024',
				trims: [
					'Eco',
					'Plus'
				]
			}
		]
	},
	{
		model: 'VF9',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Eco',
					'Plus'
				]
			}
		]
	},
	{
		model: 'VF Wild',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'VF Wild'
				]
			}
		]
	}
]

export const toyotaModels: ToyotaModelsItem[] = [
	{
		model: 'bZ3X',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'XLE',
					'Limited'
				]
			}
		]
	},
	{
		model: 'bZ4X',
		yearTrims: [
			{
				year: '2023',
				trims: [
					'XLE',
					'Limited'
				]
			},
			{
				year: '2024',
				trims: [
					'XLE',
					'Limited'
				]
			}
		]
	},
	{
		model: 'bZ5X',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'XLE',
					'Limited'
				]
			}
		]
	},
	{
		model: 'Compact Cruiser EV',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'XLE',
					'Limited',
					'LE'
				]
			}
		]
	},
	{
		model: 'Tacoma Electric',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'SR5',
					'Limited',
					'TRD Off-Road'
				]
			}
		]
	}
]

export const scoutModels: ScoutModelsItem[] = [
	{
		model: 'SUV',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'SUV'
				]
			}
		]
	},
	{
		model: 'Pickup',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Pickup'
				]
			}
		]
	}
]

export const subaruModels: SubaruModelsItem[] = [
	{
		model: 'Solterra',
		yearTrims: [
			{
				year: '2023',
				trims: [
					'Premium',
					'Limited',
					'Touring'
				]
			}
		]
	}
]

export const smartModels: SmartModelsItem[] = [{
	model: 'EQ Fortwo',
	yearTrims: [
		{
			year: '2018',
			trims: [
				'EQ Fortwo'
			]
		}
	]
}]

export const rollsRoyceModels: RollsRoyceModelsItem[] = [
	{
		model: 'Spectre',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Spectre'
				]
			}
		]
	}
]

export const ramModels: RamModelsItem[] = [
	{
		model: '1500 EV',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Tradesman',
					'Big Horn',
					'Laramie',
					'Rebel',
					'Longhorn',
					'Limited',
					'Tungsten'
				]
			}
		]
	},
	{
		model: 'ProMaster EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'High Roof',
					'Super High Roof'
				]
			}
		]
	}

]

export const porscheModels: PorscheModelsItem[] = [
	{
		model: '718 EV',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Base',
					'S',
					'GTS'
				]
			}
		]
	},
	{
		model: 'Cayenne EV',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Cayenne EV',
					'Cayenne EV S',
					'Cayenne EV GTS'
				]
			}
		]
	},
	{
		model: 'Macan EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'4',
					'Turbo'
				]
			}
		]
	},
	{
		model: 'Taycan',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Taycan',
					'4S',
					'Turbo',
					'Turbo S',
					'Turbo GT'
				
				]
			},
			{
				year: '2024',
				trims: [
					'Base',
					'4S',
					'Turbo',
					'Turbo S',
					'GTS'
				]
			},
			{
				year: '2023',
				trims: [
					'Base',
					'4S',
					'Turbo',
					'Turbo S',
					'GTS'
				]
			},
			{
				year: '2022',
				trims: [
					'Base',
					'4S',
					'Turbo',
					'Turbo S',
					'GTS'
				]
			},
			{
				year: '2021',
				trims: [
					'Base',
					'4S',
					'Turbo',
					'Turbo S'
				]
			},
			{
				year: '2020',
				trims: [
					'4S',
					'Turbo',
					'Turbo S'
				]
			}
		]
	},
	{
		model: 'Taycan Cross Turismo',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'4',
					'4S',
					'Turbo',
					'Turbo S'
				]
			},
			{
				year: '2024',
				trims: [
					'Cross Turismo 4',
					'Cross Turismo 4S',
					'Sport Turismo GTS',
					'Cross Turismo Turbo',
					'Cross Turismo Turbo S'
				]
			},
			{
				year: '2023',
				trims: [
					'Taycan Cross Turismo 4',
					'Taycan Cross Turismo 4S',
					'Taycan Sport Turismo GTS',
					'Taycan Cross Turismo Turbo',
					'Taycan Cross Turismo Turbo S'
				]
			},
			{
				year: '2022',
				trims: [
					'4',
					'4S',
					'GTS Sport Turismo',
					'Turbo',
					'Turbo S'
				]
			},
			{
				year: '2021',
				trims: [
					'4',
					'4S',
					'Turbo',
					'Turbo S'
				]
			}
		]
	}
]

export const polestarModels: PolestarModelsItem[] = [
	{
		model: '2',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Long Range RWD',
					'Long Range AWD',
					'Long Range with Performance Pack'
				]
			},
			{
				year: '2023',
				trims: [
					'Single Motor',
					'Dual Motor',
					'Single Motor Plus',
					'Dual Motor Plus',
					'Dual Motor Performance',
					'Dual Motor Performance Plus',
					'BST Edition 270'
				]
			},
			{
				year: '2022',
				trims: [
					'Single Motor',
					'Dual Motor'
				]
			},
			{
				year: '2021',
				trims: [
					'Launch Edition',
					'Performance Package'
				]
			}
		]
	},
	{
		model: '5',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Base'
				]
			}
		]
	},
	{
		model: '6',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Dual Motor'
				]
			}
		]
	},
	{
		model: '1',
		yearTrims: [
			{
				year: '2020',
				trims: [
					'Polestar 1'
				]
			},
			{
				year: '2021',
				trims: [
					'Polestar 1'
				]
			}
		]
	},
	{
		model: '4',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Single Motor',
					"Dual Motor"
				]
			}
		]
	},
	{
		model: '3',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Long Range Dual Motor',
					'Long Range Dual Motor Performance'
				]
			}
		]
	}
]

export const nissanModels: NissanModelsItem[] = [
	{
		model: 'Leaf',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'S',
					'SV Plus'
				]
			},
			{
				year: '2023',
				trims: [
					'S',
					'SV Plus'
				]
			},
			{
				year: '2022',
				trims: [
					'S',
					'SV',
					'S Plus',
					'SV Plus',
					'SL Plus'
				]
			},
			{
				year: '2021',
				trims: [
					'S',
					'SV',
					'S Plus',
					'SV Plus',
					'SL Plus'
				]
			},
			{
				year: '2020',
				trims: [
					'S',
					'SV',
					'S Plus',
					'SV Plus',
					'SL Plus'
				]
			},
			{
				year: '2019',
				trims: [
					'S',
					'SL',
					'SV',
					'S Plus',
					'SV Plus',
					'SL Plus'
				]
			},
			{
				year: '2018',
				trims: [
					'S',
					'SL',
					'SV'
				]
			},
			{
				year: '2017',
				trims: [
					'S',
					'SL',
					'SV'
				]
			}
		]
	},
	{
		model: 'Ariya',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Engage',
					'Venture+',
					'Evolve+',
					'Engage+',
					'Empower+',
					'Platinum+'
				]
			},
			{
				year: '2023',
				trims: [
					'Engage',
					'Engage e-4ORCE',
					'Venture+',
					'Evolve+',
					'Engage+ e-4ORCE',
					'Evolve+ e-4ORCE',
					'Premiere',
					'Platinum+ e-4ORCE'
				]
			}
		]
	}
]

export const mitsubishiModels: MitsubishiModelsItem[] = [
	{
		model: 'i-MiEV',
		yearTrims: [
			{
				year: '2017',
				trims: [
					'i-MiEV'
				]
			}
		]
	}
]

export const miniModels: MiniModelsItem[] = [
	{
		model: 'Countryman Electric',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Countryman S E All4'
				]
			}
		]
	},
	{
		model: 'Cooper Electric',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Cooper E Classic',
					'Cooper SE Classic',
					'Cooper E Signature',
					'Cooper SE Signature',
					'Cooper E Iconic',
					"Cooper SE Iconic"
				]
			},
			{
				year: '2024',
				trims: [
					'Classic',
					'Signature',
					'Iconic'
				]
			},
			{
				year: '2023',
				trims: [
					'Signature',
					'Signature Plus',
					'Iconic'
				]
			},
			{
				year: '2022',
				trims: [
					'Signature',
					'Signature Plus',
					'Iconic'
				]
			},
			{
				year: '2021',
				trims: [
					'Signature',
					'Signature Plus',
					'Iconic'
				]
			},
			{
				year: '2020',
				trims: [
					'Signature',
					'Signature Plus',
					'Iconic'
				]
			}
		]
	},
	{
		model: 'Aceman',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Classic',
					'Iconic',
					'Signature'
				]
			}
		]
	}
]

export const mercedesMaybachModels: MercedesMaybachModelsItem[] = [
	{
		model: 'EQS SUV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'EQS680',
					'EQS680 Night Series'
				]
			}
		]
	}
]

export const mercedesBenzModels: MercedesBenzModelsItem[] = [
	{
		model: 'B-Class Electric Drive',
		yearTrims: [
			{
				year: '2017',
				trims: [
					'B-Class'
				]
			}
		]
	},
	{
		model: 'eSprinter',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Cargo Van High Output',
					'Cargo Van Standard Output'
				]
			}
		]
	},
	{
		model: 'EQS SUV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'EQS450+ Premium',
					'EQS450 4Matic Premium',
					'EQS450+ Exclusive',
					'EQS450 4Matic Exclusive',
					'EQS450+ Pinnacle',
					'EQS450 4Matic Pinnacle',
					'EQS580 4Matic Premium',
					'EQS580 4Matic Exclusive',
					'EQS580 4Matic Pinnacle'
				]
			},
			{
				year: '2023',
				trims: [
					'EQS450+ Premium',
					'EQS450 4Matic Premium',
					'EQS450+ Exclusive',
					'EQS450 4Matic Exclusive',
					'EQS450+ Pinnacle',
					'EQS450 4Matic Pinnacle',
					'EQS580 4Matic Premium',
					'EQS580 4Matic Exclusive',
					'EQS580 4Matic Pinnacle'
				]
			}
		]
	},
	{
		model: 'EQS',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'EQS450+ Premium',
					'EQS450 4Matic Premium',
					'EQS450+ Exclusive',
					'EQS450 4Matic Exclusive',
					'EQS450+ Pinnacle',
					'EQS450 4Matic Pinnacle',
					'EQS580 4Matic Premium',
					'EQS580 4Matic Exclusive',
					'EQS580 4Matic Pinnacle'
				]
			},
			{
				year: '2023',
				trims: [
					'EQS450+',
					'EQS450 4Matic',
					'EQS580 4Matic'
				]
			},
			{
				year: '2022',
				trims: [
					'EQS450+ Premium',
					'EQS450+ Exclusive',
					'EQS450+ Pinnacle',
					'EQS580 Premium',
					'EQS580 Exclusive',
					'EQS580 Pinnacle'
				]
			}
		]
	},
	{
		model: 'EQG',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'EQG'
				]
			}
		]
	},
	{
		model: 'EQE SUV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'EQE350 4Matic Premium',
					'EQE350 4Matic Exclusive',
					'EQE350 4Matic Pinnacle',
					'EQE350+ Exclusive',
					'EQE350+ Pinnacle',
					'EQE500 Premium',
					'EQE500 4Matic Exclusive',
					'EQE500 4Matic Pinnacle'
				]
			},
			{
				year: '2023',
				trims: [
					'EQE350 4Matic Premium',
					'EQE350 4Matic Exclusive',
					'EQE350 4Matic Pinnacle',
					'EQE350+ Exclusive',
					'EQE350+ Pinnacle',
					'EQE350+ Premium',
					'EQE500 4Matic Premium',
					'EQE500 4Matic Exclusive',
					'EQE500 4Matic Pinnacle'
				]
			}
		]
	},
	{
		model: 'EQE',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'EQE350 4Matic Premium',
					'EQE350 4Matic Exclusive',
					'EQE350 4Matic Pinnacle',
					'EQE350+ Exclusive',
					'EQE350+ Pinnacle',
					'EQE350+ Premium',
					'EQE500 4Matic Premium',
					'EQE500 4Matic Exclusive',
					'EQE500 4Matic Pinnacle'
				]
			},
			{
				year: '2023',
				trims: [
					'EQE350+',
					'EQE350',
					'EQE500'
				]
			}
		]
	},
	{
		model: 'EQB',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'EQB250+ Premium',
					'EQB300 Premium',
					'EQB350 Premium'
				]
			},
			{
				year: '2023',
				trims: [
					'EQB250+ Premium',
					'EQB250+ Pinnacle',
					'EQB250+ Exclusive',
					'EQB300 Premium',
					'EQB300 Pinnacle',
					'EQB300 Exclusive',
					'EQB350 Premium',
					'EQB350 Pinnacle',
					'EQB350 Exclusive'
				]
			},
			{
				year: '2022',
				trims: [
					'EQB300 Exclusive',
					'EQB350 Exclusive',
					'EQB300 Pinnacle',
					'EQB350 Pinnacle'
				]
			}
		]
	},
	{
		model: 'CLA-Class EV',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Premium',
					'Exclusive',
					'Pinnacle'
				]
			}
		]
	}
]

export const mercedesAMGModels: MercedesAMGModelsItem[] = [
	{
		model: 'EQE53',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Exclusive',
					'Pinnacle'
				]
			},
			{
				year: '2023',
				trims: [
					'EQE53'
				]
			}
		]
	},
	{
		model: 'EQE SUV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'EQE53',
					'EQE53 Pinnacle',
					'EQE53 Dynamic Plus',
					'EQE53 Dynamic Plus Pinnacle'
				]
			}
		
		]
	},
	{
		model: 'EQS',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Premium',
					'Exclusive',
					'Pinnacle'
				]
			},
			{
				year: '2023',
				trims: [
					'Premium',
					'Exclusive',
					'Pinnacle'
				]
			},
			{
				year: '2022',
				trims: [
					'Premium',
					'Exclusive',
					'Pinnacle'
				]
			}
		
		]
	}
];

export const mazdaModels: MazdaModelsItem[] = [
	{
		model: 'MX-30',
		yearTrims: [
			{
				year: '2023',
				trims: [
					'Base',
					'Premium Plus'
				]
			},
			{
				year: '2022',
				trims: [
					'Base',
					'Premium Plus'
				]
			}
		]
	}
]

export const maseratiModels: MaseratiModelsItem[] = [
	{
		model: 'Grecale Folgore',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'GT',
					'Modena',
					'Trofeo'
				]
			}
		]
		
	},
	{
		model: 'GranTurismo Folgore',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Folgore'
				]
			}
		]
	}
]

export const lucidModels: LucidModelsItem[] = [
	{
		model: 'Gravity',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Pure',
					'Touring',
					'Grand Touring',
					'Dream Edition',
					'Sapphire'
				]
			}
		]
	},
	{
		model: 'Air',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Pure RWD',
					'Touring AWD',
					'Grand Touring AWD',
					'Sapphire'
				]
			},
			{
				year: '2023',
				trims: [
					'Pure',
					'Touring',
					'Grand Touring',
					'Grand Touring Performance',
					'Sapphire'
				]
			},
			{
				year: '2022',
				trims: [
					'Pure',
					'Touring',
					'Grand Touring',
					'Grand Touring Performance',
					'Dream Edition',
					'Dream Edition Performance'
				]
			}
		]
	}
]

export const lotusModels: LotusModelsItem[] = [
	{
		model: 'Type 135',
		yearTrims: [
			{
				year: '2028',
				trims: [
					'Base',
					'S',
					'R'
				]
			}
		]
	},
	{
		model: 'Evija',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Evija'
				]
			},
			{
				year: '2023',
				trims: [
					'Evija'
				]
			}
		]
	},
	{
		model: 'Emeya',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Base',
					'S',
					'R'
				]
			}
		]
	},
	{
		model: 'Eletre',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Base',
					'S',
					'R'
				]
			}
		]
	}
]

export const lordstownModels: LordstownModelsItem[] = [
	{
		model: 'Endurance',
		yearTrims: [
			{
				year: '2023',
				trims: [
					'Endurance'
				]
			}
		]
	}
]

export const lincolnModels: LincolnModelsItem[] = [
	{
		model: 'Star',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Standard',
					'Reserve',
					'Black Label'
				]
			}
		]
	}
]

export const lexusModels: LexusModelsItem[] = [
	{
		model: 'TZ',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'TZ450e',
					'TZ550e'
				]
			}
		]
	},
	{
		model: 'RZ',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'RZ300e Premium',
					'RZ450e Premium',
					'RZ300e Luxury',
					'RZ450e Luxury'
				]
			},
			{
				year: '2023',
				trims: [
					'Premium',
					'Luxury'
				]
			}
		]
	}, {
		model: 'Electrified Sports',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Base'
				]
			}
		]
	}
]

export const landRoverModels: LandRoverModelsItem[] = [
	{
		model: 'Range Rover EV',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'SE',
					'HSE',
					'Autobiography'
				]
			}
		]
	},
	{
		model: 'Defender Sport',
		yearTrims: [
			{
				year: '2027',
				trims: [
					'Base',
					'S',
					'SE',
					'HSE'
				]
			}
		]
	}

]

export const lamborghiniModels: LamborghiniModelsItem[] = [
	{
		model: 'Lanzador',
		yearTrims: [
			{
				year: '2028',
				trims: [
					'Lanzador'
				]
			}
		]
	}
]

export const kiaModels: KiaModelsItem[] = [
	{
		model: 'EV3',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Light',
					'Wind',
					'Land',
					'GT-Line'
				]
			}
		]
	},
	{
		model: 'EV4',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Light Standard Range',
					'Light Long Range',
					'Wind',
					'GT-Line'
				]
			}
		]
	},
	{
		model: 'EV5',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Light RWD',
					'Light Long Range RWD',
					'Wind e-AWD',
					'Land e-AWD',
					'GT-Line e-AWD'
				]
			}
		]
	}, {
		model: 'EV6',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Light',
					'Wind',
					'GT-Line',
					'GT'
				]
			},
			{
				year: '2023',
				trims: [
					'Light',
					'Wind',
					'Wind AWD',
					'GT-Line',
					'GT-Line AWD',
					'Limited Edition',
					'GT AWD'
				]
			}, {
				year: '2022',
				trims: [
					'Light RWD',
					'Wind RWD',
					'Wind AWD',
					'GT-Line RWD',
					'GT-Line AWD'
				]
			}
		]
	},
	{
		model: 'EV9',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Light RWD',
					'Light Long Range RWD',
					'Wind e-AWD',
					'Land e-AWD',
					'GT-Line e-AWD'
				]
			}
		]
	},
	{
		model: 'Niro EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Wind',
					'Wave'
				]
			},
			{
				year: '2023',
				trims: [
					'Wind',
					'Wave'
				]
			},
			{
				year: '2022',
				trims: [
					'S',
					'EX',
					'EX Premium'
				]
			},
			{
				year: '2021',
				trims: [
					'EX',
					'EX Premium'
				]
			},
			{
				year: '2020',
				trims: [
					'EX',
					'EX Premium'
				]
			}
		]
	}
]

export const jeepModels: JeepModelsItem[] = [
	{
		model: 'Wagoneer S',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Series I',
					'Series II',
					'Series III'
				]
			}
		]
	},
	{
		model: 'Recon EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Sport',
					'Willys',
					'Rubicon',
					'Sahara',
					'Sahara High Altitude'
				]
			}
		]
	}
]

export const jaguarModels: JaguaModelsItem[] = [
	{
		model: 'I-Pace',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'R-Dynamic HSE'
				]
			},
			{
				year: '2023',
				trims: [
					'HSE'
				]
			},
			{
				year: '2022',
				trims: [
					'HSE'
				]
			},
			{
				year: '2020',
				trims: [
					'S',
					'SE',
					'HSE'
				]
			},
			{
				year: '2019',
				trims: [
					'I-Pace'
				]
			}
		]
	}
]

export const hondaModels: HondaModelsItem[] = [
	{
		model: 'Fit EV',
		yearTrims: [
			{
				year: '2014',
				trims: [
					'Fit EV'
				]
			}
		]
	},
	{
		model: 'Prologue',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'EX FWD',
					'EX AWD',
					'Touring FWD',
					'Touring AWD',
					'Elite AWD'
				]
			}
		]
	},
	{
		model: 'CR-V',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'CR-V Fuel Cell'
				]
			}
		]
	}
]

export const gmcModels: GMCModelsItem[] = [
	{
		model: 'Sierra EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Denali Edition 1'
				]
			}
		]
	},
	{
		model: 'Hummer EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Hummer EV2',
					'Hummer EV2X',
					'Edition 1',
					'Hummer EV3X'
				]
			}
		]
	},
	{
		model: 'Hummer EV Pickup',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Hummer EV2',
					'Hummer EV3X'
				]
			}
		]
	}
]

export const genesisModels: GenesisModelsItem[] = [
	{
		model: 'GV60',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Standard',
					'Advanced',
					'Prestige'
				]
			},
			{
				year: '2023',
				trims: [
					'Advanced',
					'Prestige'
				]
			}
		]
	},
	{
		model: 'GT90',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Prestige'
				]
			}
		]
	},
	{
		model: 'GV70',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Advanced',
					'Prestige'
				]
			},
			{
				year: '2023',
				trims: [
					'Advanced',
					'Prestige'
				]
			}
		]
	},
	{
		model: 'G80',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Advanced',
					'Prestige'
				]
			},
			{
				year: '2023',
				trims: [
					'Prestige'
				]
			}
		]
	}
]

export const fiskerModels: FiskerModelsItem[] = [
	{
		model: 'Alaska',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Sport',
					'Ultra',
					'Extreme',
					'One'
				]
			}
		]
	},
	{
		model: 'Pear',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Sport',
					'Ultra',
					'Extreme',
					'One'
				]
			}
		]
	},
	{
		model: 'Ocean',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Sport',
					'Ultra',
					'Extreme',
					'Force E'
				]
			},
			{
				year: '2023',
				trims: [
					'Sport',
					'Ultra',
					'Extreme',
					'One'
				]
			}
		]
	},
	{
		model: 'Rōnin',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Rōnin'
				
				]
			}
		
		]
	}
]

export const fiatModels: FiatModelsItem[] = [
	{
		model: '500e',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'INSPI(RED)',
					'Inspired by Beauty',
					'Inspired by Music'
				]
			},
			{
				year: '2019',
				trims: [
					'500e'
				]
			}
		]
	}
]

export const dodgeModels: DodgeModelsItem[] = [
	{
		model: 'Charger Daytona EV',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Daytona R/T',
					'Daytona Scat Pack'
				]
			}, {
				year: '2024',
				trims: [
					'Daytona R/T',
					'Daytona Scat Pack'
				]
			}
		]
	}
]

export const chryslerModels: ChryslerModelsItem[] = [
	{
		model: 'Airflow',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Touring',
					'Limited',
					'Pinnacle'
				]
			}
		]
	}
]

export const chevroletModels: ChevroletModelsItem[] = [
	{
		model: 'Corvette EV',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'1LT',
					'2LT',
					'3LT'
				]
			}
		]
	},
	{
		model: 'Equinox EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'1LT',
					'2LT',
					'3LT',
					'2RS',
					'3RS'
				]
			}
		]
	},
	{
		model: 'Silverado EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'3WT',
					'4WT',
					'RST First Edition'
				]
			}
		]
	},
	{
		model: 'Camaro EV',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'1LT',
					'2LT',
					'3LT'
				]
			}
		]
	},
	{
		model: 'Blazer EV',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'LT eAWD',
					'RS eAWD',
					'RS RWD',
					'SS'
				]
			}
		]
	}
]

export const cadillacModels: CadillacModelsItem[] = [
	{
		model: 'Celestiq',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Celestiq'
				]
			}
		]
	},
	{
		model: 'Escalade IQ/IQL',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Escalade IQ',
					'Escalade IQ First Edition'
				]
			}
		]
	},
	{
		model: 'Lyriq',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Tech',
					'Luxury',
					'Sport'
				]
			},
			{
				year: '2023',
				trims: [
					'Debut Edition',
					'Single Motor RWD',
					'Dual Motor AWD'
				]
			}
		]
	},
	{
		model: 'Optiq',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Tech',
					'Luxury',
					'Sport']
			}
		]
	},
	{
		model: 'Vistiq',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Tech',
					'Luxury',
					'Sport'
				]
			}
		
		]
	}
]

export const bytonModels: BytonModelsItem[] = [
	{
		model: 'M-Byte',
		yearTrims: [
			{
				year: '2022',
				trims: [
					'Standard Range',
					'Long Range'
				]
			}
		]
	}
]

export const buickModels: BuickModelsItem[] = [
	{
		model: 'Electra E5',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Preferred',
					'Essence',
					'Avenir'
				]
			}
		]
	}
]

export const bmwModels: BMWModelsItem[] = [
	{
		model: 'i3',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'i3'
				]
			},
			{
				year: '2021',
				trims: [
					'i3',
					'i3s',
					'i3 with Range Extender',
					'i3s with Range Extender'
				]
			},
			{
				year: '2020',
				trims: [
					'120 Ah',
					's 120 Ah',
					'120 Ah w/Range Extender',
					's 120 Ah w/Range Extender'
				]
			},
			{
				year: '2019',
				trims: [
					'i3',
					'i3s',
					'i3 with Range Extender',
					'i3s with Range Extender'
				]
			},
			{
				year: '2018',
				trims: [
					'i3 94 Ah',
					'i3s 94 Ah',
					'i3 94 Ah w/Range Extender',
					'i3s 94 Ah w/Range Extender'
				]
			},
			{
				year: '2017',
				trims: [
					'Base'
				]
			}
		]
	},
	{
		model: 'i4',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'eDrive35',
					'eDrive40',
					'xDrive40',
					'M50'
				]
			},
			{
				year: '2023',
				trims: [
					'eDrive35',
					'eDrive40',
					'M50'
				]
			},
			{
				year: '2022',
				trims: [
					'eDrive40',
					'M50'
				]
			}
		]
	},
	{
		model: 'i5',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'eDrive40',
					'xDrive40',
					'M60 xDrive'
				]
			},
			{
				year: '2024',
				trims: [
					'xDrive40',
					'M60 xDrive'
				]
			}
		]
	},
	{
		model: 'i7',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'eDrive50',
					'xDrive60',
					'M70'
				]
			},
			{
				year: '2023',
				trims: [
					'xDrive60'
				]
			}
		]
	},
	{
		model: 'iX',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'xDrive50',
					'M60'
				]
			},
			{
				year: '2024',
				trims: [
					'xDrive50',
					'M60'
				]
			},
			{
				year: '2023',
				trims: [
					'xDrive50',
					'M60'
				]
			},
			{
				year: '2022',
				trims: [
					'xDrive50'
				]
			}
		]
	},
	{
		model: 'iX3',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'eDrive40',
					'xDrive40',
					'M50'
				]
			}
		
		]
	}
]

export const acuraModels: AcuraModelsItem[] = [
	{
		model: 'ZDX',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'A-Spec',
					'Type S'
				]
			}
		]
	}
]

export const audiModels: AudiModelsItem[] = [
	{
		model: 'SQ8 e-tron',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Premium Plus',
					'Premium Plus Sportback',
					'Prestige',
					'Prestige Sportback'
				]
			}
		]
	},
	{
		model: 'SQ6 e-tron',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Premium',
					'Premium Plus',
					'Sportback Premium',
					'Sportback Premium Plus',
					'Prestige',
					'Sportback Prestige'
				]
			}
		]
	},
	{
		model: 'Q8 e-tron',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Premium',
					'Premium Plus',
					'Sportback Premium',
					'Sportback Premium Plus',
					'Prestige',
					'Sportback Prestige'
				]
			},
			{
				year: '2023',
				trims: [
					'Premium',
					'Premium Plus',
					'Sportback Premium',
					'Sportback Premium Plus',
					'Chronos Edition',
					'Sportback Prestige'
				]
			},
			{
				year: '2022',
				trims: [
					'Premium',
					'Premium Plus',
					'Sportback Premium',
					'Sportback Premium Plus',
					'Chronos Edition',
					'Sportback Prestige'
				]
			},
			{
				year: '2021',
				trims: [
					'Premium',
					'Premium Plus',
					'Sportback Premium',
					'Sportback Premium Plus',
					'Prestige',
					'Sportback Prestige'
				]
			},
			{
				year: '2020',
				trims: [
					'Premium Plus Sportback',
					'Premium Plus',
					'Prestige',
					'Prestige Sportback'
				]
			},
			{
				year: '2019',
				trims: [
					'e-tron'
				]
			}
		]
	},
	{
		model: 'Q6 e-tron',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Premium',
					'Premium Plus',
					'Sportback Premium',
					'Sportback Premium Plus',
					'Sportback Prestige',
					'Prestige'
				]
			}
		]
	},
	{
		model: 'Q4 e-tron',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Premium 40',
					'Premium Plus 40',
					'Premium 50',
					'Premium 55',
					'Sportback Premium 55',
					'Sportback Premium 50',
					'Premium Plus 50',
					'Premium Plus 50',
					'Premium Plus 55',
					'Prestige 55',
					'Prestige 50',
					'Sportback Premium Plus 55',
					'Sportback Premium Plus 50',
					'Sportback Prestige 50',
					'Sportback Prestige 55'
				]
			},
			{
				year: '2023',
				trims: [
					'Premium 40',
					'Premium Plus 40',
					'Premium 50',
					'Premium Plus 50',
					'Sportback Premium 50',
					'Prestige 50',
					'Sportback Premium Plus 50',
					'Sportback Prestige 50'
				]
			},
			{
				year: '2022',
				trims: [
					'Premium',
					'Sportback Premium',
					'Premium Plus',
					'Sportback Premium Plus',
					'Prestige',
					'Sportback Prestige'
				]
			}
		]
	},
	{
		model: 'e-tron GT',
		yearTrims: [
			{
				year: '2024',
				trims: [
					'Premium Plus',
					'Prestige',
					'RS'
				]
			},
			{
				year: '2023',
				trims: [
					'Premium Plus',
					'Prestige',
					'RS'
				]
			},
			{
				year: '2022',
				trims: [
					'Premium Plus',
					'Prestige',
					'RS'
				]
			}
		]
	},
	{
		model: 'A6 e-tron',
		yearTrims: [
			{
				year: '2025',
				trims: [
					'Premium',
					'Premium Plus',
					'Prestige',
					'RS'
				]
			}
		
		]
	}
]

export const afeelaModels: AfeelaModlesItem[] = [
	{
		model: 'EV Sedan',
		yearTrims: [
			{
				year: '2026',
				trims: [
					'Base'
				]
			}
		]
	}
]
