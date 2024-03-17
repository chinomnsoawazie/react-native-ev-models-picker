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
	| 'Mercedes-Benz'
	| 'Mercedes-AMG'
	| 'Mazda'
	| 'Maserati'
	| "Lucid"
	| 'Lotus'
	| 'Lordstown'
	| 'Lincoln'
	| 'Lexus'
	| 'Land Rover'
	| 'Lamborghini'
	| 'Kia'
	| 'Jeep'
	| 'Jaguar'
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
		label: "Mercedes-Benz",
		value: "Mercedes-Benz",
		disabled: false
	},
	{
		label: "Mercedes-AMG",
		value: "Mercedes-AMG",
		disabled: false
	},
	{
		label: "Mazda",
		value: "Mazda",
		disabled: false
	},
	{
		label: "Maserati",
		value: "Maserati",
		disabled: false
	},
	{
		label: "Lucid",
		value: "Lucid",
		disabled: false
	},
	{
		label: "Lotus",
		value: "Lotus",
		disabled: false
	},
	{
		label: "Lordstown",
		value: "Lordstown",
		disabled: false
	},
	{
		label: "Lincoln",
		value: "Lincoln",
		disabled: false
	},
	{
		label: "Lexus",
		value: "Lexus",
		disabled: false
	},
	{
		label: "Land Rover",
		value: "Land Rover",
		disabled: false
	},
	{
		label: "Lamborghini",
		value: "Lamborghini",
		disabled: false
	},
	{
		label: "Kia",
		value: "Kia",
		disabled: false
	},
	{
		label: "Jeep",
		value: "Jeep",
		disabled: false
	},
	{
		label: "Jaguar",
		value: "Jaguar",
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

export type MercedesBenzModels =
	| 'B-Class Electric Drive'
	| 'eSprinter'
	| 'EQS SUV'
	| 'EQS'
	| 'EQG'
	| "EQE SUV"
	| 'EQE'
	| 'EQB'
	| 'CLA-Class EV'
export type MercedesBenzYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2017'
export type MercedesBenzTrims =
	| 'Premium'
	| 'Exclusive'
	| 'Pinnacle'
	| 'B-Class'
	| 'EQB250+ Premium'
	| 'EQB250+ Exclusive'
	| 'EQB250+ Pinnacle'
	| 'EQB300 Premium'
	| 'EQB300 Exclusive'
	| 'EQB300 Pinnacle'
	| 'EQB350 Premium'
	| 'EQB350 Exclusive'
	| 'EQB350 Pinnacle'
	| 'EQE350'
	| 'EQE350+'
	| 'EQE350+ Premium'
	| 'EQE350+ Exclusive'
	| 'EQE350+ Pinnacle'
	| 'EQE350 4Matic Premium'
	| 'EQE350 4Matic Exclusive'
	| 'EQE350 4Matic Pinnacle'
	| 'EQE500'
	| 'EQE500 Premium'
	| 'EQE500 4Matic Premium'
	| 'EQE500 4Matic Exclusive'
	| 'EQE500 4Matic Pinnacle'
	| 'EQG'
	| 'EQS450+'
	| 'EQS450+ Premium'
	| 'EQS450+ Exclusive'
	| 'EQS450+ Pinnacle'
	| 'EQS450 4Matic'
	| 'EQS450 4Matic Premium'
	| 'EQS450 4Matic Exclusive'
	| 'EQS450 4Matic Pinnacle'
	| 'EQS580 4Matic'
	| 'EQS580 Premium'
	| 'EQS580 Exclusive'
	| 'EQS580 Pinnacle'
	| 'EQS580 4Matic Premium'
	| 'EQS580 4Matic Exclusive'
	| 'EQS580 4Matic Pinnacle'
	| 'Cargo Van Standard Output'
	| 'Cargo Van High Output'

export type MercedesAMGModels =
	| 'EQS'
	| 'EQE SUV'
	| 'EQE53'
export type MercedesAMGYears =
	| '2024'
	| '2023'
	| '2022'
export type MercedesAMGTrims =
	| 'Premium'
	| 'Exclusive'
	| 'Pinnacle'
	| 'EQE53'
	| 'EQE53 Pinnacle'
	| 'EQE53 Dynamic Plus'
	| 'EQE53 Dynamic Plus Premium'
	| 'EQE53 Dynamic Plus Pinnacle'

export type MazdaModels =
	| 'MX-30'
export type MazdaYears =
	| '2023'
	| '2022'
export type MazdaTrims =
	| 'Base'
	| 'Premium Plus'

export type MaseratiModels =
	| 'GranTurismo Folgore'
	| 'Grecale Folgore'
export type MaseratiYears =
	| '2024'
export type MaseratiTrims =
	| 'Folgore'
	| 'GT'
	| 'Modena'
	| 'Trofeo'

export type LucidModels =
	| 'Gravity'
	| 'Air'
export type LucidYears =
	| '2025'
	| '2024'
	| '2023'
	| '2022'
export type LucidTrims =
	| 'Pure'
	| 'Pure RWD'
	| 'Touring'
	| 'Touring AWD'
	| 'Dream Edition'
	| 'Dream Edition Performance'
	| 'Grand Touring'
	| 'Grand Touring AWD'
	| 'Grand Touring Performance'
	| 'Sapphire'

export type LotusModels =
	| 'Eletre'
	| 'Emeya'
	| 'Evija'
	| 'Type 135'
export type LotusYears =
	| '2028'
	| '2025'
	| '2024'
	| '2023'
export type LotusTrims =
	| 'Base'
	| 'S'
	| 'R'
	| 'Evija'

export type LordstownModels =
	| 'Endurance'
export type LordstownYears =
	|'2023'
export type LordstownTrims =
	| 'Endurance'

export type LincolnModels =
	'Star'
export type LincolnYears =
	|'2025'
export type LincolnTrims =
	| 'Standard'
	| 'Reserve'
	| 'Black Label'

export type LexusModels =
	| 'TZ'
	| 'RZ'
	| 'Electrified Sports'
export type LexusYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
export type LexusTrims =
	| 'TZ450e'
	| 'TZ550e'
	| 'RZ300e Premium'
	| 'RZ450e Premium'
	| 'RZ300e Luxury'
	| 'RZ450e Luxury'
	| 'Premium'
	| 'Luxury'
	| 'Base'

export type LandRoverModels =
	| 'Range Rover EV'
	| 'Defender Sport'
export type LandRoverYears =
	| '2027'
	| '2025'
export type LandRoverTrims =
	| 'Base'
	| 'S'
	| 'SE'
	| 'HSE'
	| 'Autobiography'

export type LamborghiniModels =
	|'Lanzador'
export type LamborghiniYears =
	|'2028'
export type LamborghiniTrims =
	|'Lanzador'

export type KiaModels =
	| 'Niro EV'
	| 'EV9'
	| 'EV6'
	| 'EV5'
	| 'EV4'
	| 'EV3'
export type KiaYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
export type KiaTrims =
	| 'Wind'
	| 'Wind AWD'
	| 'Wind RWD'
	| 'Wind e-AWD'
	| 'Wave'
	| 'S'
	| 'EX'
	| 'EX Premium'
	| 'Light'
	| 'Light RWD'
	| 'Light Standard Range'
	| 'Light Long Range'
	| 'Light Long Range RWD'
	| 'Land'
	| 'Land e-AWD'
	| 'GT'
	| 'GT AWD'
	| 'GT-Line'
	| 'GT-Line AWD'
	| 'GT-Line RWD'
	| 'GT-Line e-AWD'
	| 'Limited Edition'

export type JeepModels =
	| 'Recon EV'
	| 'Wagoneer S'
export type JeepYears =
	| '2025'
	| '2024'
export type JeepTrims =
	| 'Sport'
	| 'Willys'
	| 'Rubicon'
	| 'Sahara'
	| 'Sahara High Altitude'
	| 'Series I'
	| 'Series II'
	| 'Series III'

export type JaguaModels =
	| 'I-Pace'
export type JaguaYears =
	| '2024'
	| '2023'
	| '2022'
	| '2020'
	| '2019'
export type JaguaTrims =
	| 'I-Pace'
	| 'S'
	| 'SE'
	| 'HSE'
	| 'R-Dynamic HSE'

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
	| MercedesBenzYears
	| MercedesAMGYears
	| MazdaYears
	| MaseratiYears
	| LucidYears
	| LotusYears
	| LordstownYears
	| LincolnYears
	| LexusYears
	| LandRoverYears
	| LamborghiniYears
	| KiaYears
	| JeepYears
	| JaguaYears
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
	| MercedesBenzModels
	| MercedesAMGModels
	| MazdaModels
	| MaseratiModels
	| LucidModels
	| LotusModels
	| LordstownModels
	| LincolnModels
	| LexusModels
	| LandRoverModels
	| LamborghiniModels
	| KiaModels
	| JeepModels
	| JaguaModels
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
	| MercedesBenzTrims
	| MercedesAMGTrims
	| MazdaTrims
	| MaseratiTrims
	| LucidTrims
	| LotusTrims
	| LordstownTrims
	| LincolnTrims
	| LexusTrims
	| LandRoverTrims
	| LamborghiniTrims
	| KiaTrims
	| JeepTrims
	| JaguaTrims
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

export type MercedesBenzModelYearTrims = {
	year: MercedesBenzYears;
	trims: MercedesBenzTrims[];
}

export type MercedesAMGModelYearTrims = {
	year: MercedesAMGYears;
	trims: MercedesAMGTrims[];
}

export type MazdaModelYearTrims = {
	year: MazdaYears;
	trims: MazdaTrims[];
}

export type MaseratiModelYearTrims = {
	year: MaseratiYears;
	trims: MaseratiTrims[];
}

export type LucidModelYearTrims = {
	year: LucidYears;
	trims: LucidTrims[];
}

export type LotusModelYearTrims = {
	year: LotusYears;
	trims: LotusTrims[];
}

export type LordstownModelYearTrims = {
	year: LordstownYears;
	trims: LordstownTrims[];
}

export type LincolnModelYearTrims = {
	year: LincolnYears;
	trims: LincolnTrims[];
}

export type LexusModelYearTrims = {
	year: LexusYears;
	trims: LexusTrims[];
}

export type LandRoverModelYearTrims = {
	year: LandRoverYears;
	trims: LandRoverTrims[];
}

export type LamborghiniModelYearTrims = {
	year: LamborghiniYears;
	trims: LamborghiniTrims[];
}

export type KiaModelYearTrims = {
	year: KiaYears;
	trims: KiaTrims[];
}

export type JeepModelYearTrims = {
	year: JeepYears;
	trims: JeepTrims[];
}

export type JaguaModelYearTrims = {
	year: JaguaYears;
	trims: JaguaTrims[];
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

export type MercedesBenzModelsItem = {
	model: MercedesBenzModels;
	yearTrims: MercedesBenzModelYearTrims[];
};

export type MercedesAMGModelsItem = {
	model: MercedesAMGModels;
	yearTrims: MercedesAMGModelYearTrims[];
};

export type MazdaModelsItem = {
	model: MazdaModels;
	yearTrims: MazdaModelYearTrims[];
};

export type MaseratiModelsItem = {
	model: MaseratiModels;
	yearTrims: MaseratiModelYearTrims[];
};

export type LucidModelsItem = {
	model: LucidModels;
	yearTrims: LucidModelYearTrims[];
};

export type LotusModelsItem = {
	model: LotusModels;
	yearTrims: LotusModelYearTrims[];
};

export type LordstownModelsItem = {
	model: LordstownModels;
	yearTrims: LordstownModelYearTrims[];
};

export type LincolnModelsItem = {
	model: LincolnModels;
	yearTrims: LincolnModelYearTrims[];
};

export type LexusModelsItem = {
	model: LexusModels;
	yearTrims: LexusModelYearTrims[];
};

export type LandRoverModelsItem = {
	model: LandRoverModels;
	yearTrims: LandRoverModelYearTrims[];
};

export type LamborghiniModelsItem = {
	model: LamborghiniModels;
	yearTrims: LamborghiniModelYearTrims[];
};

export type KiaModelsItem = {
	model: KiaModels;
	yearTrims: KiaModelYearTrims[];
};


export type JeepModelsItem = {
	model: JeepModels;
	yearTrims: JeepModelYearTrims[];
};

export type JaguaModelsItem = {
	model: JaguaModels;
	yearTrims: JaguaModelYearTrims[];
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
	| MercedesMaybachModelsItem[]
	| MercedesBenzModelsItem[]
	| MercedesAMGModelsItem[]
	| MazdaModelsItem[]
	| MaseratiModelsItem[]
	| LucidModelsItem[]
	| LotusModelsItem[]
	| LordstownModelsItem[]
	| LincolnModelsItem[]
	| LexusModelsItem[]
	| LandRoverModelsItem[]
	| LamborghiniModelsItem[]
	| KiaModelsItem[]
	| JeepModelsItem[]
	| JaguaModelsItem[];

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
