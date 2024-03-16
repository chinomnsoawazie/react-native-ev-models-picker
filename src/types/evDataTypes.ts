export type SupportedLangues = "en" | "fr";
export type TranslationCopy = {
	carMake: string;
	carModel: string;
	carYear: string;
	carTrim: string;
};
export type CarMake =
	"Telsa"
	| "Rivian"
	| "Ford"
	| 'Hyundai'
	| "Volvo"
	| 'Volkswagen'
	| 'VinFast'
	| 'Toyota'
	| 'Scout'
	| 'Subaru'
	| 'Smart'
	| 'Rolls-Royce'
	| 'Ram'
	| 'Porsche'
	| 'Polestar'
	| 'Nissan'
	| 'Mitsubishi'
	| 'Mini'
	| 'Mercedes-Maybach'
	| "Others"
	| 'none'

type CarMakeItemType = {
	label: CarMake;
	value: CarMake;
	disabled?: boolean;
};
export const evMakes: CarMakeItemType[] = [
	{
		label: "Telsa",
		value: "Telsa",
		disabled: false
	},
	{
		label: "Rivian",
		value: "Rivian",
		disabled: false
	},
	{
		label: "Ford",
		value: "Ford",
		disabled: false
	},
	{
		label: "Hyundai",
		value: "Hyundai",
		disabled: false
	},
	{
		label: "Volvo",
		value: "Volvo",
		disabled: false
	},
	{
		label: "Volkswagen",
		value: "Volkswagen",
		disabled: false
	},
	{
		label: "VinFast",
		value: "VinFast",
		disabled: false
	},
	{
		label: "Toyota",
		value: "Toyota",
		disabled: false
	},
	{
		label: "Scout",
		value: "Scout",
		disabled: false
	},
	{
		label: "Subaru",
		value: "Subaru",
		disabled: false
	},
	{
		label: "Smart",
		value: "Smart",
		disabled: false
	},
	{
		label: "Rolls-Royce",
		value: "Rolls-Royce",
		disabled: false
	},
	{
		label: "Ram",
		value: "Ram",
		disabled: false
	},
	{
		label: "Porsche",
		value: "Porsche",
		disabled: false
	},
	{
		label: "Polestar",
		value: "Polestar",
		disabled: false
	},
	{
		label: "Nissan",
		value: "Nissan",
		disabled: false
	},
	{
		label: "Mitsubishi",
		value: "Mitsubishi",
		disabled: false
	},
	{
		label: "Mini",
		value: "Mini",
		disabled: false
	},
	{
		label: "Mercedes-Maybach",
		value: "Mercedes-Maybach",
		disabled: false
	},
	{
		label: "Others",
		value: "Others",
		disabled: false
	}
];


export type TeslaModels =
	| "Cybertruck"
	| "Model 3"
	| "Model S"
	| "Model X"
	| "Model Y"
	| 'Roadster'
export type TeslaTrims =
	| "100D"
	| "60 RWD"
	| "60 kWh"
	| "60"
	| "60D"
	| "70 kWh"
	| "70"
	| "70D RWD"
	| "70D"
	| "75"
	| "75D AWD"
	| "75D"
	| "85 RWD"
	| "85 kWh"
	| "85"
	| "85D"
	| "90D AWD"
	| "90D"
	| "AWD"
	| "Base"
	| "DUAL MOTOR AWD 100 KWH"
	| "Long Range Plus"
	| "Long Range"
	| "Long Range AWD"
	| "Mid Range"
	| "P100 AWD"
	| "P100D"
	| "P85+"
	| "P85D AWD"
	| "P85D"
	| "P90D AWD"
	| "P90D"
	| "PLAID TRI MOTOR AWD 100 KWH"
	| "Performance"
	| "Performance AWD"
	| "Plaid AWD"
	| "Plaid"
	| "Plaid+"
	| "Signature Performance"
	| "Signature"
	| "Standard Range"
	| "Standard Range RWD"
	| "Standard Range Plus"
	| "Standard"
	| "RWD"
	| 'Model S'
	| 'Model S Plaid'
	| "Founder's Edition"
	| 'Model X'
	| 'Model X Plaid'
	| "Beast"
	| "Dual Motor"
export type TeslaYears =
	| "2012"
	| "2013"
	| "2014"
	| "2015"
	| "2016"
	| "2017"
	| "2018"
	| "2019"
	| "2020"
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| '2026'


export type RivianModels =
	| "R1T"
	| "R1S"
	| 'R2'
	| 'R3'
	| 'Commercial Van'
export type RivianYears =
	| "2022"
	| "2023"
	| "2024"
	| '2026'
	| '2027'
export type RivianTrims =
	| "Explore Package"
	| "Adventure Package"
	| "Launch Edition"
	| "Adventure Dual-Motor Standard Pack"
	| "Adventure Dual-Motor Standard+ Pack"
	| "Adventure Dual-Motor Large Pack"
	| "Adventure Performance Dual-Motor Large Pack"
	| "Adventure Performance Dual-Motor Standard+ Pack"
	| "Launch Edition Quad-Motor Large Pack"
	| "Adventure Quad-Motor Large Pack"
	| "Adventure Dual-Motor Max Pack"
	| "Adventure Performance Dual-Motor Max Pack"
	| 'Adventure'
	| 'Adventure All-Terrain'
	| 'R3'
	| 'R3X'
	| 'Delivery 500'
	| 'Delivery 700'

export type FordModels =
	| "E-Transit"
	| "F-150 Lightning"
	| 'Mustang Mach-E'
export type FordYears =
	| "2021"
	| "2022"
	| "2023"
	| "2024";
export type FordTrims =
	| "Cargo Van"
	| "Cutaway"
	| "Chassis Cab"
	| "XLT"
	| "XLT Extended Range"
	| 'Pro'
	| 'Flash Extended Range'
	| 'Lariat'
	| 'Lariat Extended Range'
	| 'Platinum Extended Range'
	| "Platinum Black Extended Range"
	| 'Select'
	| 'Premium'
	| 'California Route 1'
	| 'GT'
	| 'GT Performance Edition'
	| 'GT Bronze'
	| 'Rally'


export type HyundaiModels =
	| "Ioniq 5"
	| "Ioniq 5 N"
	| 'Ioniq 6'
	| 'Ioniq 7'
	| 'Kona'
	| 'Nexo'
	| 'Ioniq Electric';
export type HyundaiYears =
	| "2019"
	| "2020"
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| '2025'
export type HyundaiTrims =
	| "SE"
	| "SE Standard Range"
	| "SE Long Range"
	| "SEL"
	| "SEL Long Range"
	| "SEL Long Range AWD"
	| "SE Long Range AWD"
	| "Limited"
	| "Limited Long Range"
	| "Limited Long Range AWD"
	| "Blue"
	| "Ultimate"
	| "Ioniq 5 N"
	| 'N Line'
	| 'Kona'
	| 'Nexo'

export type VolvoModels =
	| "EC40"
	| 'ES90'
	| 'EX30'
	| 'EX40'
	| 'EX90'
	| 'XC40'
	| 'XC40 Recharge'
export type VolvoYears =
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| '2025'
	| '2026'
export type VolvoTrims =
	| "Single Motor Core"
	| 'Core Single Motor'
	| 'Plus Single Motor'
	| 'Plus Twin Motor'
	| 'Single Motor Performance'
	| 'Single Motor Plus'
	| 'Single Motor Ultimate'
	| 'Single Motor'
	| 'Twin Motor Core'
	| 'Twin Motor Performance'
	| 'Twin Motor Performance Plus'
	| 'Twin Motor Plus'
	| 'Twin Motor Ultimate'
	| 'Twin Motor'
	| 'Ultra Single Motor'
	| 'Ultra Twin Motor'
	| 'Ultimate'
	| 'Core'
	| 'Plus'
	| 'Twin'
	| 'Twin Plus'
	| "Twin Ultimate"
	| 'XC40 Recharge'
	| 'Twin Motor Ultra'

export type VolkswagenModels =
	| 'ID.4'
	| 'ID.7'
	| 'ID.8'
	| 'ID.Buzz Microbus'
	| 'e-Golf'
export type VolkswagenYears =
	| '2017'
	| '2018'
	| '2019'
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| '2025'
	| '2026'
export type VolkswagenTrims =
	| 'ID.Buzz'
	| 'SE'
	| 'SEL Premium'
	| 'Base'
	| 'Pro'
	| 'Pro S'
	| 'Pro S Plus'
	| 'Standard'
	| 'Standard S'
	| '1st Edition'
	| 'SEL'
	| 'Limited Edition'

export type VinFastModels =
	| 'VF3'
	| 'VF6'
	| 'VF7'
	| 'VF8'
	| 'VF9'
	| 'VF Wild'
export type VinFastYears =
	| '2026'
	| '2024'
	| '2023'
export type VinFastTrims =
	| 'VF Wild'
	| 'Eco'
	| 'Plus'
	| 'City Edition Eco'
	| 'City Edition Plus'
	| 'VF3'

export type ToyotaModels =
	| 'bZ3X'
	| 'bZ4X'
	| 'bZ5X'
	| 'Compact Cruiser EV'
	| 'Tacoma Electric'
export type ToyotaYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
export type ToyotaTrims =
	| 'SR5'
	| 'TRD Off-Road'
	| 'Limited'
	| 'LE'
	| 'XLE'

export type ScoutModels =
	| 'SUV'
	| 'Pickup'
export type ScoutYears =
	| '2026'
export type ScoutTrims =
	| 'SUV'
	| 'Pickup'

export type SubaruModels =
	| 'Solterra'
export type SubaruYears =
	| '2023'
export type SubaruTrims =
	| 'Premium'
	| 'Limited'
	| 'Touring'

export type SmartModels = 'EQ Fortwo'
export type SmartYears = '2018'
export type SmartTrims = 'EQ Fortwo'

export type RollsRoyceModels = 'Spectre'
export type RollsRoyceYears = '2024'
export type RollsRoyceTrims = 'Spectre'

export type RamModels =
	| 'ProMaster EV'
	| '1500 EV'
export type RamYears =
	| '2025'
	| '2024'
export type RamTrims =
	| 'High Roof'
	| 'Super High Roof'
	| 'Tradesman'
	| 'Big Horn'
	| 'Laramie'
	| 'Rebel'
	| 'Longhorn'
	| 'Limited'
	| 'Tungsten'

export type PorscheModels =
	| '718 EV'
	| 'Cayenne EV'
	| 'Macan EV'
	| 'Taycan'
	| 'Taycan Cross Turismo'
export type PorscheYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
export type PorscheTrims =
	| '4'
	| '4S'
	| 'Base'
	| 'Turbo'
	| 'S'
	| 'GTS'
	| 'Turbo S'
	| 'Turbo GT'
	| 'Cross Turismo 4'
	| 'Cross Turismo 4S'
	| 'Sport Turismo GTS'
	| 'Cross Turismo Turbo'
	| 'Cross Turismo Turbo S'
	| 'Taycan'
	| 'Taycan Cross Turismo 4'
	| 'Taycan Cross Turismo 4S'
	| 'Taycan Sport Turismo GTS'
	| 'Taycan Cross Turismo Turbo'
	| 'Taycan Cross Turismo Turbo S'
	| 'GTS Sport Turismo'
	| 'Cayenne EV'
	| 'Cayenne EV S'
	| 'Cayenne EV GTS'

export type PolestarModels =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
export type PolestarYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
export type PolestarTrims =
	| 'Polestar 1'
	| 'Single Motor'
	| 'Single Motor Plus'
	| 'Base'
	| 'Dual Motor'
	| 'Dual Motor Plus'
	| 'Launch Edition'
	| 'Performance Package'
	| 'Dual Motor Performance'
	| 'Dual Motor Performance Plus'
	| 'BST Edition 270'
	| 'Long Range Dual Motor'
	| 'Long Range Dual Motor Performance'
	| 'Long Range RWD'
	| 'Long Range AWD'
	| 'Long Range with Performance Pack'

export type NissanModels =
	| 'Leaf'
	| 'Ariya'
export type NissanYears =
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
	| '2019'
	| '2018'
	| '2017'
export type NissanTrims =
	| 'S'
	| 'SV'
	| 'SL'
	| 'S Plus'
	| 'SL Plus'
	| 'SV Plus'
	| 'Engage'
	| 'Engage+'
	| 'Engage e-4ORCE'
	| 'Engage+ e-4ORCE'
	| 'Venture+'
	| 'Empower+'
	| "Evolve+"
	| 'Evolve+ e-4ORCE'
	| 'Premiere'
	| 'Premiere+ e-4ORCE'
	| 'Platinum+'
	| 'Platinum+ e-4ORCE'

export type MitsubishiModels =
	'i-MiEV'
export type MitsubishiYears =
	|'2017'
export type MitsubishiTrims =
	'i-MiEV'

export type MiniModels =
	| 'Countryman Electric'
	| 'Cooper Electric'
	| 'Aceman'
export type MiniYears =
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
export type MiniTrims =
	| 'Classic'
	| 'Signature'
	| 'Iconic'
	| 'Signature Plus'
	| 'Cooper E Classic'
	| 'Cooper SE Classic'
	| 'Cooper E Signature'
	| 'Cooper SE Signature'
	| 'Cooper E Iconic'
	| 'Cooper SE Iconic'
	| 'Countryman S E All4'

export type MercedesMaybachModels =
	|'EQS SUV'
export type MercedesMaybachYears =
	|'2024'
export type MercedesMaybachTrims =
	| 'EQS680'
	| 'EQS680 Night Series'


export type CarYearsType =
	| RivianYears
	| TeslaYears
	| FordYears
	| HyundaiYears
	| VolvoYears
	| VolkswagenYears
	| VinFastYears
	| ToyotaYears
	| ScoutYears
	| SubaruYears
	| SmartYears
	| RollsRoyceYears
	| RamYears
	| PorscheYears
	| PolestarYears
	| NissanYears
	| MitsubishiYears
	| MiniYears
	| MercedesMaybachYears
	| "none";
export type CarModelsType =
	| RivianModels
	| TeslaModels
	| FordModels
	| HyundaiModels
	| VolvoModels
	| VolkswagenModels
	| VinFastModels
	| ToyotaModels
	| ScoutModels
	| SubaruModels
	| SmartModels
	| RollsRoyceModels
	| RamModels
	| PorscheModels
	| PolestarModels
	| NissanModels
	| MitsubishiModels
	| MiniModels
	| MercedesMaybachModels
	| "none";
export type CarTrimType =
	| RivianTrims
	| TeslaTrims
	| FordTrims
	| HyundaiTrims
	| VolvoTrims
	| VolkswagenTrims
	| VinFastTrims
	| ToyotaTrims
	| ScoutTrims
	| SubaruTrims
	| SmartTrims
	| RollsRoyceTrims
	| RamTrims
	| PorscheTrims
	| PolestarTrims
	| NissanTrims
	| MitsubishiTrims
	| MiniTrims
	| MercedesMaybachTrims
	| "none";


export type ComponentInputItems = {
	carModels: CarMakeModelsForInputItems[];
	carTrims: CarTrimsForInputType[];
	carYears: CarYearsForInputItems[];
};
export type TeslaModelYearTrims = {
	year: TeslaYears;
	trims: TeslaTrims[];
};
export type RivianModelYearTrims = {
	year: RivianYears;
	trims: RivianTrims[];
};
export type FordModelYearTrims = {
	year: FordYears;
	trims: FordTrims[];
};
export type HyundaiModelYearTrims = {
	year: HyundaiYears;
	trims: HyundaiTrims[];
};

export type VolvoModelYearTrims = {
	year: VolvoYears;
	trims: VolvoTrims[];
}
export type VolkswagenModelYearTrims = {
	year: VolkswagenYears;
	trims: VolkswagenTrims[];
}
export type VinFastModelYearTrims = {
	year: VinFastYears;
	trims: VinFastTrims[];
}
export type ToyotaModelYearTrims = {
	year: ToyotaYears;
	trims: ToyotaTrims[];
}
export type ScoutModelYearTrims = {
	year: ScoutYears;
	trims: ScoutTrims[];
}
export type SubaruModelYearTrims = {
	year: SubaruYears;
	trims: SubaruTrims[];
}
export type SmartModelYearTrims = {
	year: SmartYears;
	trims: SmartTrims[];
}
export type RollsRoyceModelYearTrims = {
	year: RollsRoyceYears;
	trims: RollsRoyceTrims[];
}
export type RamModelYearTrims = {
	year: RamYears;
	trims: RamTrims[];
}
export type PorscheModelYearTrims = {
	year: PorscheYears;
	trims: PorscheTrims[];
}
export type PolestarModelYearTrims = {
	year: PolestarYears;
	trims: PolestarTrims[];
}
export type NissanModelYearTrims = {
	year: NissanYears;
	trims: NissanTrims[];
}
export type MitsubishiModelYearTrims = {
	year: MitsubishiYears;
	trims: MitsubishiTrims[];
}

export type MiniModelYearTrims = {
	year: MiniYears;
	trims: MiniTrims[];
}

export type MercedesMaybachModelYearTrims = {
	year: MercedesMaybachYears;
	trims: MercedesMaybachTrims[];
}

/**ModelsItems*/

export type TeslaModelsItem = {
	model: TeslaModels;
	yearTrims: TeslaModelYearTrims[];
};

export type RivianModelsItem = {
	model: RivianModels;
	yearTrims: RivianModelYearTrims[];
};

export type FordModelsItem = {
	model: FordModels;
	yearTrims: FordModelYearTrims[];
};

export type HyundaiModelsItem = {
	model: HyundaiModels;
	yearTrims: HyundaiModelYearTrims[];
};

export type VolvoModelsItem = {
	model: VolvoModels;
	yearTrims: VolvoModelYearTrims[];
};

export type VolkswagenModelsItem = {
	model: VolkswagenModels;
	yearTrims: VolkswagenModelYearTrims[];
};

export type VinFastModelsItem = {
	model: VinFastModels;
	yearTrims: VinFastModelYearTrims[];
};

export type ToyotaModelsItem = {
	model: ToyotaModels;
	yearTrims: ToyotaModelYearTrims[];
};

export type ScoutModelsItem = {
	model: ScoutModels;
	yearTrims: ScoutModelYearTrims[];
};

export type SubaruModelsItem = {
	model: SubaruModels;
	yearTrims: SubaruModelYearTrims[];
};

export type SmartModelsItem = {
	model: SmartModels;
	yearTrims: SmartModelYearTrims[];
};

export type RollsRoyceModelsItem = {
	model: RollsRoyceModels;
	yearTrims: RollsRoyceModelYearTrims[];
};

export type RamModelsItem = {
	model: RamModels;
	yearTrims: RamModelYearTrims[];
};

export type PorscheModelsItem = {
	model: PorscheModels;
	yearTrims: PorscheModelYearTrims[];
};

export type PolestarModelsItem = {
	model: PolestarModels;
	yearTrims: PolestarModelYearTrims[];
};

export type NissanModelsItem = {
	model: NissanModels;
	yearTrims: NissanModelYearTrims[];
};

export type MitsubishiModelsItem = {
	model: MitsubishiModels;
	yearTrims: MitsubishiModelYearTrims[];
};

export type MiniModelsItem = {
	model: MiniModels;
	yearTrims: MiniModelYearTrims[];
};

export type MercedesMaybachModelsItem = {
	model: MercedesMaybachModels;
	yearTrims: MercedesMaybachModelYearTrims[];
};

export type CarModelsArray =
	| FordModelsItem[]
	| HyundaiModelsItem[]
	| RivianModelsItem[]
	| TeslaModelsItem[]
	| VolvoModelsItem[]
	| VolkswagenModelsItem[]
	| VinFastModelsItem[]
	| ToyotaModelsItem[]
	| ScoutModelsItem[]
	| SubaruModelsItem[]
	| SmartModelsItem[]
	| RollsRoyceModelsItem[]
	| RamModelsItem[]
	| PorscheModelsItem[]
	| PolestarModelsItem[]
	| NissanModelsItem[]
	| MitsubishiModelsItem[]
	| MiniModelsItem[]
	| MercedesMaybachModelsItem[];

export type CarMakeModelsForInputItems = {
	label: CarModelsType;
	value: CarModelsType;
};
export type CarYearsForInputItems = {
	label: CarYearsType;
	value: CarYearsType;
};
export type CarTrimsForInputType = {
	label: CarTrimType;
	value: CarTrimType;
};
