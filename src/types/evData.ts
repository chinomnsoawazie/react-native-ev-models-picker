export type SupportedLangues = "en" | "fr";
export type TranslationCopy = {
	carMake: string;
	carModel: string;
	carYear: string;
	carTrim: string;
};
export type CarMake = "Telsa" | "Rivian" | "Ford" | "Others" | 'none'

type CarMakeItemType = {
	label?: CarMake;
	value?: CarMake;
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
		label: "Others",
		value: "Others",
		disabled: false
	}
];


type TeslaModels =
	| "Cybertruck"
	| "Model 3"
	| "Model S"
	| "Model X"
	| "Model Y"
	| "Tesla Semi";
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
	| "Standard Range Plus"
	| "Standard"
	| "RWD";
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
	| "2024";

type RivianModels = "R1T" | "R1S";
export type RivianYears = "2022" | "2023" | "2024";
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
	| "Adventure Performance Dual-Motor Max Pack";

type FordModels = "E-Transit" | "F-150 Lightning" | 'Mustang Mach-E'
export type FordYears = "2021" | "2022" | "2023" | "2024";
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

export type CarYearsType = RivianYears | TeslaYears | FordYears | "none";
export type CarModelsType = RivianModels | TeslaModels | FordModels | "none";
export type CarTrimType = RivianTrims | TeslaTrims | FordTrims | "none";

export type Car = {
	make: CarMake | null;
	model: CarModelsType | null;
	trim: CarTrimType | null;
	year: CarYearsType | null;
};

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

type TeslaMakes = {
	model: TeslaModels;
	yearTrims: TeslaModelYearTrims[];
};

type RivianMakes = {
	model: RivianModels;
	yearTrims: RivianModelYearTrims[];
};

type FordMakes = {
	model: FordModels;
	yearTrims: FordModelYearTrims[];
};

export type CarModelYearTrims = TeslaModelYearTrims[] | RivianModelYearTrims[];
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

export const teslaModels: TeslaMakes[] = [
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
				trims: ["Long Range", "Plaid"]
			},
			{
				year: "2023",
				trims: ["AWD", "Standard Range", "Plaid"]
			},
			{
				year: "2024",
				trims: ["AWD", "Plaid AWD"]
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
				trims: ["Long Range", "Plaid"]
			},
			{
				year: "2023",
				trims: ["Standard Range", "Plaid", "AWD"]
			},
			{
				year: "2024",
				trims: ["Plaid", "AWD"]
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
			{year: "2022", trims: ["Base", "Long Range", "Performance"]},
			{year: "2023", trims: ["RWD", "Long Range AWD", "Performance AWD"]},
			{year: "2024", trims: ["RWD", "Long Range AWD"]}
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
				trims: ["Long Range AWD", "Performance AWD", "AWD", "RWD"]
			},
			{
				year: "2024",
				trims: ["Long Range AWD", "Performance AWD", "RWD"]
			}
		]
	}
];

export const rivianModels: RivianMakes[] = [
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
	}
];

export const fordModels: FordMakes[] = [
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
