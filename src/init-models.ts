import type { Sequelize } from "sequelize";
import AnalyticalMethodsModel from "./models/analytical_methods";
// import AnalyticalInstrumentsModel from "./models/analytical_instruments";
import PlantModel from "./models/plants";
import SoilModel from "./models/soils"
import LocationsModel from './models/locations';

export {
  // AnalyticalInstrumentsModel,
  AnalyticalMethodsModel,
  PlantModel,
  SoilModel,
};

export function initModels(sequelize: Sequelize) {
  // const analyticalInstruments = AnalyticalInstrumentsModel.initModel(sequelize);
  const analyticalMethods = AnalyticalMethodsModel.initModel(sequelize);
  const plants = PlantModel.initModel(sequelize);
  const soils = SoilModel.initModel(sequelize);
  const locations = LocationsModel.initModel(sequelize);

  // analyticalInstruments.belongsTo(analyticalMethods, { as: 'analytical_method', foreignKey: 'analytical_method_id' });

  return {
    // analyticalInstruments,
    analyticalMethods,
    plants,
    soils,
    locations,
  };
}
    