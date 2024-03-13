import {
  CarMake,
  CarModelsType,
  CarYearsForInputItems,
  rivianModels,
  teslaModels,
} from "../types/evData";

type GetModelYearsProps = {
  make: CarMake;
  model: CarModelsType;
};

const getModelYears = (x: GetModelYearsProps): CarYearsForInputItems[] => {
  const { make, model } = x;
  switch (make) {
    case "Rivian": {
      return rivianModels
        .find((rivianModelItem) => rivianModelItem.model === model)
        ?.yearTrims.map((yearItem) => {
          return {
            label: yearItem.year,
            value: yearItem.year,
          };
        }) as CarYearsForInputItems[];
    }
    case "Telsa": {
      return teslaModels
        .find((teslaModelItem) => teslaModelItem.model === model)
        ?.yearTrims.map((yearItem) => {
          return {
            label: yearItem.year,
            value: yearItem.year,
          };
        }) as CarYearsForInputItems[];
    }
    default:
      return [];
  }
};

export { getModelYears };
