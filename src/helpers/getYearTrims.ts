import {
  CarMake,
  CarModelsType,
  CarTrimsForInputType,
  CarYearsType,
  rivianModels,
  teslaModels,
} from "../types/evData";

type GetYearTrimsProps = {
  carMake: CarMake;
  carModel: CarModelsType;
  carYear: CarYearsType;
};

const getYearTrims = (x: GetYearTrimsProps): CarTrimsForInputType[] => {
  const { carMake, carModel, carYear } = x;
  switch (carMake) {
    case "Rivian": {
      const rivianYearTrim = rivianModels.find(
        (model) => model.model === carModel,
      )?.yearTrims;
      return rivianYearTrim
        ?.find((rivianYeaTrimItem) => rivianYeaTrimItem.year === carYear)
        ?.trims.map((trim) => {
          return {
            label: trim,
            value: trim,
          };
        }) as CarTrimsForInputType[];
    }

    case "Telsa": {
      const telsaYearTrim = teslaModels.find(
        (model) => model.model === carModel,
      )?.yearTrims;
      return telsaYearTrim
        ?.find((telsaYeaTrimItem) => telsaYeaTrimItem.year === carYear)
        ?.trims.map((trim) => {
          return {
            label: trim,
            value: trim,
          };
        }) as CarTrimsForInputType[];
    }

    default:
      return [];
  }
};

export { getYearTrims };
