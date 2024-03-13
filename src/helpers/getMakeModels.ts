import {
  CarMake,
  CarMakeModelsForInputItems,
  rivianModels,
  teslaModels,
} from "../types/evData";

type GetMakeModelsProps = {
  carMake: CarMake;
};

const getMakeModels = (x: GetMakeModelsProps): CarMakeModelsForInputItems[] => {
  const { carMake } = x;
  switch (carMake) {
    case "Telsa": {
      return teslaModels.map((model) => {
        return {
          label: model.model,
          value: model.model,
        };
      });
    }
    case "Rivian": {
      return rivianModels.map((model) => {
        return {
          label: model.model,
          value: model.model,
        };
      });
    }
    default:
      return [];
  }
};

export { getMakeModels };
