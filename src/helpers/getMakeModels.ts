import {
	fordModels,
	hyundaiModels,
	mercedesMaybachModels,
	miniModels,
	mitsubishiModels,
	nissanModels,
	polestarModels,
	porscheModels,
	ramModels,
	rivianModels,
	rollsRoyceModels,
	scoutModels,
	smartModels,
	subaruModels,
	teslaModels,
	toyotaModels,
	vinFastModels,
	volkswagenModels,
	volvoModels
} from "../types/evData";
import {CarMake, CarMakeModelsForInputItems, CarModelsArray} from "../types/evDataTypes";


type GetMakeModelsProps = {
	carMake: CarMake;
};

const getMakeModelsHelper = ({currentModels}: { currentModels: CarModelsArray }): CarMakeModelsForInputItems[] =>
	currentModels.sort(function (a, b) {return a.model.localeCompare(b.model)})
		.map((model) => {
			return {
				label: model.model,
				value: model.model
			};
		});


const getMakeModels = (x: GetMakeModelsProps): CarMakeModelsForInputItems[] => {
	const {carMake} = x;
	switch (carMake) {
		case "Telsa":
			return getMakeModelsHelper({currentModels: teslaModels});
		
		case "Rivian":
			return getMakeModelsHelper({currentModels: rivianModels});
		
		case "Ford":
			return getMakeModelsHelper({currentModels: fordModels});
		
		case 'Hyundai':
			return getMakeModelsHelper({currentModels: hyundaiModels});
		
		case 'Volvo':
			return getMakeModelsHelper({currentModels: volvoModels});
		
		case 'Volkswagen':
			return getMakeModelsHelper({currentModels: volkswagenModels});
		
		case 'VinFast':
			return getMakeModelsHelper({currentModels: vinFastModels});
		case 'Toyota':
			return getMakeModelsHelper({currentModels: toyotaModels});
		
		case 'Scout':
			return getMakeModelsHelper({currentModels: scoutModels});
		
		case 'Subaru':
			return getMakeModelsHelper({currentModels: subaruModels});
		
		
		case 'Smart':
			return getMakeModelsHelper({currentModels: smartModels});
		
		case 'Rolls-Royce':
			return getMakeModelsHelper({currentModels: rollsRoyceModels});
		
		case 'Ram':
			return getMakeModelsHelper({currentModels: ramModels});
		
		case 'Porsche':
			return getMakeModelsHelper({currentModels: porscheModels});
		
		case 'Polestar':
			return getMakeModelsHelper({currentModels: polestarModels});
		
		case 'Nissan':
			return getMakeModelsHelper({currentModels: nissanModels});
		
		case 'Mitsubishi':
			return getMakeModelsHelper({currentModels: mitsubishiModels});
		
		case 'Mini':
			return getMakeModelsHelper({currentModels: miniModels});
		
		case 'Mercedes-Maybach':
			return getMakeModelsHelper({currentModels: mercedesMaybachModels});
		
		case "Others":
		default:
			return [];
	}
};

export {getMakeModels};
