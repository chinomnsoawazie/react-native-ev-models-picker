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
import {CarMake, CarModelsArray, CarModelsType, CarYearsForInputItems} from "../types/evDataTypes";


type GetModelYearsProps = {
	make: CarMake;
	model: CarModelsType;
};

const getModelYearsHelper = ({currentCarModels, currentModel}: {
	currentCarModels: CarModelsArray,
	currentModel: CarModelsType
}): CarYearsForInputItems[] => currentCarModels.find((modelItem) => modelItem.model === currentModel)
	?.yearTrims
	.sort(function (a, b) {return a.year.localeCompare(b.year)})
	.map((yearItem) => {
		return {
			label: yearItem.year,
			value: yearItem.year
		};
	}) as CarYearsForInputItems[];


const getModelYears = (x: GetModelYearsProps): CarYearsForInputItems[] => {
	const {make, model} = x;
	switch (make) {
		case "Rivian":
			return getModelYearsHelper({currentCarModels: rivianModels, currentModel: model});
		
		case "Telsa":
			return getModelYearsHelper({currentCarModels: teslaModels, currentModel: model});
		
		case 'Ford':
			return getModelYearsHelper({currentCarModels: fordModels, currentModel: model});
		
		case 'Hyundai':
			return getModelYearsHelper({currentCarModels: hyundaiModels, currentModel: model});
		
		case 'Volvo':
			return getModelYearsHelper({currentCarModels: volvoModels, currentModel: model});
		
		case 'Volkswagen':
			return getModelYearsHelper({currentCarModels: volkswagenModels, currentModel: model});
		
		case 'VinFast':
			return getModelYearsHelper({currentCarModels: vinFastModels, currentModel: model});
		
		case 'Toyota':
			return getModelYearsHelper({currentCarModels: toyotaModels, currentModel: model});
		
		case 'Scout':
			return getModelYearsHelper({currentCarModels: scoutModels, currentModel: model});
		
		case "Subaru":
			return getModelYearsHelper({currentCarModels: subaruModels, currentModel: model});
		
		case "Smart":
			return getModelYearsHelper({currentCarModels: smartModels, currentModel: model});
		
		case "Rolls-Royce":
			return getModelYearsHelper({currentCarModels: rollsRoyceModels, currentModel: model});
		
		case "Ram":
			return getModelYearsHelper({currentCarModels: ramModels, currentModel: model});
		
		case "Porsche":
			return getModelYearsHelper({currentCarModels: porscheModels, currentModel: model});
		
		case "Polestar":
			return getModelYearsHelper({currentCarModels: polestarModels, currentModel: model});
		
		case "Nissan":
			return getModelYearsHelper({currentCarModels: nissanModels, currentModel: model});
		
		case "Mitsubishi":
			return getModelYearsHelper({currentCarModels: mitsubishiModels, currentModel: model});
		
		case "Mini":
			return getModelYearsHelper({currentCarModels: miniModels, currentModel: model});
		
		case "Mercedes-Maybach":
			return getModelYearsHelper({currentCarModels: mercedesMaybachModels, currentModel: model});
		
		case "Others":
		default:
			return [];
	}
};

export {getModelYears};
