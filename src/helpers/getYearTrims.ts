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
import {CarMake, CarModelsArray, CarModelsType, CarTrimsForInputType, CarYearsType} from "../types/evDataTypes";

type GetYearTrimsProps = {
	carMake: CarMake;
	carModel: CarModelsType;
	carYear: CarYearsType;
};

const getYearTrimsHelper = ({currentCarYear, currentModels, currentCarModel}: {
	currentCarYear: CarYearsType
	currentModels: CarModelsArray
	currentCarModel: CarModelsType
}): CarTrimsForInputType[] =>
	currentModels.find(
		(model) => model.model === currentCarModel
	)?.yearTrims
		?.find((yeaTrimItem) => yeaTrimItem.year === currentCarYear)
		?.trims
		.sort()
		.map((trim) => {
			return {
				label: trim,
				value: trim
			};
		}) as CarTrimsForInputType[]


const getYearTrims = (x: GetYearTrimsProps): CarTrimsForInputType[] => {
	const {carMake, carModel, carYear} = x;
	switch (carMake) {
		case "Rivian":
			return getYearTrimsHelper({
				currentModels: rivianModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			});
		
		case "Telsa":
			return getYearTrimsHelper({
				currentModels: teslaModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Ford":
			return getYearTrimsHelper({
				currentModels: fordModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Hyundai":
			return getYearTrimsHelper({
				currentModels: hyundaiModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Volvo":
			return getYearTrimsHelper({
				currentModels: volvoModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Volkswagen":
			return getYearTrimsHelper({
				currentModels: volkswagenModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "VinFast":
			return getYearTrimsHelper({
				currentModels: vinFastModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Toyota":
			return getYearTrimsHelper({
				currentModels: toyotaModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Scout":
			return getYearTrimsHelper({
				currentModels: scoutModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Subaru":
			return getYearTrimsHelper({
				currentModels: subaruModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Smart":
			return getYearTrimsHelper({
				currentModels: smartModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Rolls-Royce":
			return getYearTrimsHelper({
				currentModels: rollsRoyceModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Ram":
			return getYearTrimsHelper({
				currentModels: ramModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Porsche":
			return getYearTrimsHelper({
				currentModels: porscheModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Polestar":
			return getYearTrimsHelper({
				currentModels: polestarModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Nissan":
			return getYearTrimsHelper({
				currentModels: nissanModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mitsubishi":
			return getYearTrimsHelper({
				currentModels: mitsubishiModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mini":
			return getYearTrimsHelper({
				currentModels: miniModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mercedes-Maybach":
			return getYearTrimsHelper({
				currentModels: mercedesMaybachModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Others":
		default:
			return [];
	}
};

export {getYearTrims};
